import { en } from './locales/en';
import { pt } from './locales/pt';
import type { Dictionary, Locale } from './types';

export type { Dictionary, Locale } from './types';

/** Rótulo de cada idioma no seletor — sempre no próprio idioma. */
export const LOCALE_NAMES: Record<Locale, string> = {
    pt: 'português',
    en: 'english',
};

export const DEFAULT_LOCALE: Locale = 'pt';

/** Código usado no atributo `lang` do documento. */
export const HTML_LANG: Record<Locale, string> = {
    pt: 'pt-BR',
    en: 'en',
};

export const DICTIONARIES: Record<Locale, Dictionary> = { pt, en };

export const isLocale = (value: unknown): value is Locale =>
    typeof value === 'string' && value in DICTIONARIES;
