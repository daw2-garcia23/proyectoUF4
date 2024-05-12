import { createClient } from "@supabase/supabase-js"
const supabaseUrl = 'https://bkukfnxtibiwbzdqptwn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrdWtmbnh0aWJpd2J6ZHFwdHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyNjgxNTksImV4cCI6MjAzMDg0NDE1OX0.KlQtSpDsTWuikE3N0u863wkWzEgO_RIE5vnW1qsSrnQ'

export const supabase = createClient(supabaseUrl, supabaseKey)