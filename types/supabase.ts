export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      subscription_tiers: {
        Row: {
          chatbot_personalities_included: boolean
          custom_themes_included: boolean
          id: string
          messages_limit: number
          monthly_cost: number
          name: string
          remove_branding: boolean
          resume_words_limit: number
          stripe_price_id: string | null
          stripe_product_id: string | null
        }
        Insert: {
          chatbot_personalities_included: boolean
          custom_themes_included: boolean
          id?: string
          messages_limit: number
          monthly_cost: number
          name: string
          remove_branding: boolean
          resume_words_limit: number
          stripe_price_id?: string | null
          stripe_product_id?: string | null
        }
        Update: {
          chatbot_personalities_included?: boolean
          custom_themes_included?: boolean
          id?: string
          messages_limit?: number
          monthly_cost?: number
          name?: string
          remove_branding?: boolean
          resume_words_limit?: number
          stripe_price_id?: string | null
          stripe_product_id?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          banner_color: string | null
          banner_image: string | null
          bio: string | null
          created_at: string
          display_name: string | null
          email: string | null
          handle: string | null
          id: number
          links: Json[]
          profile_picture: string | null
          tag: string | null
          tag_color: string
          user_id: string | null
        }
        Insert: {
          banner_color?: string | null
          banner_image?: string | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          handle?: string | null
          id?: number
          links?: Json[]
          profile_picture?: string | null
          tag?: string | null
          tag_color?: string
          user_id?: string | null
        }
        Update: {
          banner_color?: string | null
          banner_image?: string | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          handle?: string | null
          id?: number
          links?: Json[]
          profile_picture?: string | null
          tag?: string | null
          tag_color?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
