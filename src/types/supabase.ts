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
      users: {
        Row: {
          id: string
          email: string
          role: 'admin' | 'donor' | 'hospital' | 'organization'
          status: 'active' | 'inactive' | 'suspended'
          full_name: string
          phone: string
          profile_picture: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          role: 'admin' | 'donor' | 'hospital' | 'organization'
          status?: 'active' | 'inactive' | 'suspended'
          full_name: string
          phone: string
          profile_picture?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: 'admin' | 'donor' | 'hospital' | 'organization'
          status?: 'active' | 'inactive' | 'suspended'
          full_name?: string
          phone?: string
          profile_picture?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      donor_profiles: {
        Row: {
          id: string
          user_id: string
          blood_group: string
          weight: number
          blood_pressure: string
          medical_conditions: string | null
          last_donation_date: string | null
          total_donations: number
          eligibility_status: 'eligible' | 'not_eligible'
          next_eligible_date: string | null
          address: string
          city: string
          state: string
          pincode: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          blood_group: string
          weight: number
          blood_pressure: string
          medical_conditions?: string | null
          last_donation_date?: string | null
          total_donations?: number
          eligibility_status?: 'eligible' | 'not_eligible'
          next_eligible_date?: string | null
          address: string
          city: string
          state: string
          pincode: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          blood_group?: string
          weight?: number
          blood_pressure?: string
          medical_conditions?: string | null
          last_donation_date?: string | null
          total_donations?: number
          eligibility_status?: 'eligible' | 'not_eligible'
          next_eligible_date?: string | null
          address?: string
          city?: string
          state?: string
          pincode?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {}
    Functions: {}
    Enums: {
      user_role: 'admin' | 'donor' | 'hospital' | 'organization'
      user_status: 'active' | 'inactive' | 'suspended'
      blood_group: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
      component_type: 'Whole' | 'RBC' | 'WBC' | 'Plasma' | 'Platelets'
    }
  }
}