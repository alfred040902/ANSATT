// ── App-konfigurasjon ────────────────────────────────────
// API-nøkkel injiseres via EAS Secret (ANTHROPIC_API_KEY) ved build-tid.
// Sett nøkkelen med: eas secret:create --name ANTHROPIC_API_KEY --value <nøkkel>
import Constants from 'expo-constants';

export const DEFAULT_API_KEY = Constants.expoConfig?.extra?.anthropicApiKey ?? '';

// ── AI-modeller ─────────────────────────────────────────
// Sonnet 4.5 brukes for kvalitet (søknadsbrev, CV-coach).
// Haiku 4.5 brukes for raske bakgrunns-tasks (job match score)
// for å holde kostnaden lav på cards som kanskje aldri åpnes.
export const MODEL_SONNET = 'claude-sonnet-4-5-20250929';
export const MODEL_HAIKU  = 'claude-haiku-4-5-20251001';

// Maks tegn fra stillingsbeskrivelse i prompt (token-økonomi)
export const MAX_DESC_CHARS = 1500;

// Maks tegn fra CV-tekst i prompt
export const MAX_CV_CHARS = 4000;

// Antall forsøk ved API-feil
export const API_RETRY = 1;
