'use client';

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from 'react';
import {
    DEFAULT_LOCALE,
    DICTIONARIES,
    HTML_LANG,
    isLocale,
    type Dictionary,
    type Locale,
} from './dictionaries';

const STORAGE_KEY = 'saleth-portfolio-locale';

const readStoredLocale = (): Locale => {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        return isLocale(stored) ? stored : DEFAULT_LOCALE;
    } catch {
        // localStorage pode estar bloqueado (modo privado, cookies desativados).
        return DEFAULT_LOCALE;
    }
};

/**
 * Store externa mínima para o idioma.
 *
 * A preferência vive no localStorage, fora do React, então `useSyncExternalStore`
 * é o jeito certo de lê-la: na hidratação o React usa o snapshot do servidor
 * (idioma padrão, igual ao HTML entregue) e só depois troca para o valor salvo,
 * sem mismatch e sem `setState` dentro de efeito.
 */
const localeStore = {
    current: typeof window === 'undefined' ? DEFAULT_LOCALE : readStoredLocale(),
    listeners: new Set<() => void>(),

    subscribe(listener: () => void) {
        localeStore.listeners.add(listener);
        return () => localeStore.listeners.delete(listener);
    },

    getSnapshot: (): Locale => localeStore.current,

    getServerSnapshot: (): Locale => DEFAULT_LOCALE,

    set(next: Locale) {
        if (next === localeStore.current) return;
        localeStore.current = next;

        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // Sem persistência a troca continua valendo para a sessão atual.
        }

        localeStore.listeners.forEach((listener) => listener());
    },
};

type LanguageContextValue = {
    locale: Locale;
    setLocale: (next: Locale) => void;
    t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const locale = useSyncExternalStore(
        localeStore.subscribe,
        localeStore.getSnapshot,
        localeStore.getServerSnapshot
    );

    useEffect(() => {
        document.documentElement.lang = HTML_LANG[locale];
    }, [locale]);

    const value = useMemo<LanguageContextValue>(
        () => ({ locale, setLocale: localeStore.set, t: DICTIONARIES[locale] }),
        [locale]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useI18n precisa estar dentro de <LanguageProvider>');
    }
    return context;
}
