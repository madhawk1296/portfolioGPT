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
      api_calls: {
        Row: {
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "api_calls_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      subscription_tiers: {
        Row: {
          coupon_id: string | null
          id: string
          messages_limit: number
          monthly_cost: number
          monthly_price_id: string | null
          name: string
          stripe_product_id: string | null
          title: string
          yearly_cost: number
          yearly_price_id: string | null
        }
        Insert: {
          coupon_id?: string | null
          id?: string
          messages_limit: number
          monthly_cost: number
          monthly_price_id?: string | null
          name: string
          stripe_product_id?: string | null
          title: string
          yearly_cost?: number
          yearly_price_id?: string | null
        }
        Update: {
          coupon_id?: string | null
          id?: string
          messages_limit?: number
          monthly_cost?: number
          monthly_price_id?: string | null
          name?: string
          stripe_product_id?: string | null
          title?: string
          yearly_cost?: number
          yearly_price_id?: string | null
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
          github: Json | null
          handle: string | null
          id: number
          links: Json[]
          plan: string
          profile_picture: string | null
          stripe_customer_id: string | null
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
          github?: Json | null
          handle?: string | null
          id?: number
          links?: Json[]
          plan?: string
          profile_picture?: string | null
          stripe_customer_id?: string | null
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
          github?: Json | null
          handle?: string | null
          id?: number
          links?: Json[]
          plan?: string
          profile_picture?: string | null
          stripe_customer_id?: string | null
          tag?: string | null
          tag_color?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_plan_fkey"
            columns: ["plan"]
            referencedRelation: "subscription_tiers"
            referencedColumns: ["id"]
          },
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
