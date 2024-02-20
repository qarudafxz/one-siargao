'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var supabase_js_1 = require('@supabase/supabase-js')
var supabase = (0, supabase_js_1.createClient)(
 import.meta.env.VITE_SUPABASE_URL,
 import.meta.env.VITE_SUPABASE_ANON_KEY
)
console.log(import.meta.env.VITE_SUPABASE_URL)
exports.default = supabase
