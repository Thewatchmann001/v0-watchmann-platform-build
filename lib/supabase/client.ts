import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      auth: {
        async getUser() {
          return { data: { user: null }, error: null }
        },
        async signInWithPassword() {
          return { data: null, error: { message: "Supabase is not configured" } }
        },
        async signUp() {
          return { data: null, error: { message: "Supabase is not configured" } }
        },
        async signOut() {
          return { error: null }
        },
        onAuthStateChange() {
          return { data: { subscription: { unsubscribe() {} } } }
        },
      },
      from() {
        return {
          select() {
            return {
              eq() {
                return {
                  order() {
                    return { data: [], error: null }
                  },
                  single() {
                    return { data: null, error: null }
                  },
                }
              },
              order() {
                return { data: [], error: null }
              },
              single() {
                return { data: null, error: null }
              },
            }
          },
        }
      },
    } as any
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
