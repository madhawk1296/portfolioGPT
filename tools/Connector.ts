import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";

export default class Connector {
    private supabase: SupabaseAuthClient;

    constructor(supabase: SupabaseAuthClient) {
      this.supabase = supabase;
    }
  
    async signInWithProvider(provider: string) {
      if (!['twitter', 'google', 'facebook'].includes(provider)) {
        throw new Error(`Provider ${provider} is not supported`);
      }
      const { data, error } = await this.supabase.auth.signInWithOAuth({ provider });
      if (error) {
        throw error;
      }
      return data;
    }
}