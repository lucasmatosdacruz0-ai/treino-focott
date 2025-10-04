/**
 * =================================================================================
 * CONFIGURAÇÃO DE AMBIENTE - LEIA-ME
 * =================================================================================
 *
 * Para desenvolvimento local, substitua os valores de placeholder abaixo
 * pelas suas chaves reais do Supabase e Gemini.
 *
 * QUANDO VOCÊ FIZER O DEPLOY PARA UM SERVIÇO COMO VERCEL OU NETLIFY:
 * 1. NÃO comite este arquivo com suas chaves secretas. Use um arquivo .gitignore.
 * 2. Em vez disso, configure as variáveis de ambiente DIRETAMENTE no painel
 *    de controle do seu serviço de hospedagem.
 *    - SUPABASE_URL
 *    - SUPABASE_ANON_KEY
 *    - API_KEY
 *
 * O código abaixo é projetado para usar as variáveis de ambiente do Vercel
 * quando disponíveis, e usar os valores hardcoded abaixo como um fallback
 * para o desenvolvimento local.
 */

export const SUPABASE_URL = process.env.SUPABASE_URL || "COLE_SUA_URL_SUPABASE_AQUI";
export const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "COLE_SUA_CHAVE_ANON_SUPABASE_AQUI";
export const API_KEY = process.env.API_KEY || "COLE_SUA_CHAVE_API_GEMINI_AQUI";

// Para compatibilidade com bibliotecas que esperam `process.env` (como o Gemini SDK),
// nós populamos o objeto global `process.env`.
// Fix: Cast `window` to `any` to avoid TypeScript errors, as `process` is not a standard property on the `window` object.
if (typeof window !== 'undefined' && (window as any).process && (window as any).process.env) {
    if (!(window as any).process.env.API_KEY) {
        (window as any).process.env.API_KEY = API_KEY;
    }
    if (!(window as any).process.env.SUPABASE_URL) {
        (window as any).process.env.SUPABASE_URL = SUPABASE_URL;
    }
    if (!(window as any).process.env.SUPABASE_ANON_KEY) {
        (window as any).process.env.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;
    }
}
