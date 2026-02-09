import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function createClient() {
  const cookieStore = await cookies()

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      auth: {
        async getUser() {
          return { data: { user: null }, error: null }
        },
      },
      from() {
        const chain = {
          eq() {
            return chain
          },
          order() {
            return { data: [], error: null }
          },
          single() {
            return { data: null, error: null }
          },
        }
        return {
          select() {
            return chain
          },
          insert() {
            return { data: null, error: null }
          },
          update() {
            return { data: null, error: null }
          },
        }
      },
    } as any
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // The "setAll" method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}
