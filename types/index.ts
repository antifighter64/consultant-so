export interface WaitlistEntry {
  id?: string
  name: string
  email: string
  phone: string
  website?: string
  created_at?: string
}

export interface WaitlistFormData {
  name: string
  email: string
  phone: string
  website?: string
}
