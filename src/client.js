import { createClient } from '@supabase/supabase-js';

const URL = "https://yzaqfrpkstwnxzjygbfz.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6YXFmcnBrc3R3bnh6anlnYmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NTg4NTEsImV4cCI6MjAyODUzNDg1MX0.naU80Cq5jL-unGFFnHuSRdExH4HfS-71arShML5tJxk";

export const supabase = createClient(URL, API_KEY);