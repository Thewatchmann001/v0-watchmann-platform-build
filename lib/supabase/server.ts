import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function createClient() {
  const cookieStore = await cookies()

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Supabase credentials missing. Using mock server client.")
    }

    const mockResponse = { data: null, error: null }
    const errorResponse = {
      data: null,
      error: {
        message: "Supabase is not configured. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment variables."
      }
    }

    const chain = {
      eq: () => chain,
      select: () => chain,
      insert: () => chain,
      update: () => chain,
      upsert: () => chain,
      delete: () => chain,
      order: () => chain,
      limit: () => chain,
      single: async () => mockResponse,
      maybeSingle: async () => mockResponse,
      then: (onfulfilled?: any) => Promise.resolve(mockResponse).then(onfulfilled),
    }

    return {
      auth: {
        getUser: async () => ({ data: { user: null }, error: null }),
        getSession: async () => ({ data: { session: null }, error: null }),
        signInWithOAuth: async () => errorResponse,
        exchangeCodeForSession: async () => errorResponse,
        signOut: async () => ({ error: null }),
      },
      from: () => chain,
    } as unknown as ReturnType<typeof createServerClient>
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
