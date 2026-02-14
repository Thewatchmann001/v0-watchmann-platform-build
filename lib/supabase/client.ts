import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    const mockResponse = { data: null, error: null }
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
        signInWithPassword: async () => ({ data: { user: null, session: null }, error: null }),
        signUp: async () => ({ data: { user: null, session: null }, error: null }),
        signInWithOAuth: async () => mockResponse,
        signOut: async () => ({ error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      },
      from: () => chain,
    } as any
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
