import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config.ts';

// As credenciais do Supabase são carregadas do arquivo de configuração central.
// Esse arquivo prioriza variáveis de ambiente para produção (Vercel)
// e usa valores de fallback para desenvolvimento local.
const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_ANON_KEY;

// Verifica se as credenciais do Supabase foram preenchidas e não são os valores de placeholder.
export const isSupabaseConfigured =
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.startsWith("COLE_SUA_URL_SUPABASE_AQUI") &&
  !supabaseAnonKey.startsWith("COLE_SUA_CHAVE_ANON_SUPABASE_AQUI");

if (!isSupabaseConfigured) {
    console.warn(
        "As credenciais do Supabase não estão configuradas corretamente. " +
        "Verifique o arquivo `config.ts` (para desenvolvimento local) ou as variáveis de ambiente (para produção). " +
        "O aplicativo não poderá se conectar ao backend."
    );
}

// Exporta o cliente Supabase e um booleano para indicar se está configurado.
// Se não estiver configurado, um objeto vazio é exportado para evitar que o app quebre na inicialização,
// permitindo que uma mensagem de erro amigável seja exibida.
export const supabase = isSupabaseConfigured ? createClient(supabaseUrl, supabaseAnonKey) : {} as any;
