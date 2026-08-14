// =========================================================
// ÚNICO ARCHIVO QUE DEBES EDITAR PARA CONECTAR TU PROYECTO
// =========================================================
// 1. Entra a tu proyecto en https://supabase.com
// 2. Ve a: Project Settings > API
// 3. Copia "Project URL" y pégalo en SUPABASE_URL
// 4. Copia "anon public key" y pégalo en SUPABASE_ANON_KEY
// =========================================================
(function () {

const SUPABASE_URL = "https://qialrpgmkaddshynsnga.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpYWxycGdta2FkZHNoeW5zbmdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU1MTkzNjAsImV4cCI6MjEwMTA5NTM2MH0.yU1kgXpAD2pe7v1h4HmbmiAa5QbMJppFVgEOxEpXhWc";

if (typeof window.supabase === "undefined") {
  console.error("La librería de Supabase no cargó. Revisa tu conexión a internet o si algo está bloqueando el CDN.");
  alert("No se pudo conectar con el servidor. Revisa tu conexión a internet y recarga la página.");
} else {
  window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

})();
