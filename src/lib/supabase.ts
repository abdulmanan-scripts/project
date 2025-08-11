import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if environment variables are properly configured
const isConfigured = supabaseUrl && supabaseAnonKey && 
  supabaseUrl !== 'your_supabase_project_url' && 
  supabaseAnonKey !== 'your_supabase_anon_key'

if (!isConfigured) {
  console.warn('Supabase not configured. Please set up your environment variables.')
}

// Create a mock client when not configured to prevent fetch errors
const createMockClient = () => ({
  from: () => ({
    insert: () => Promise.resolve({ data: null, error: null }),
    select: () => Promise.resolve({ data: [], error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null }),
  })
})

export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient() as any

export type StrategyCallLead = {
  id?: string
  full_name: string
  email: string
  phone: string
  budget: string
  company?: string
  message?: string
  created_at?: string
}