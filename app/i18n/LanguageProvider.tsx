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
        return DEFAULT_LOCALE;
    }
};

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
