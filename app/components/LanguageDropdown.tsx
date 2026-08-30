'use client';

import { ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { LOCALE_NAMES, type Locale } from '@/app/i18n/dictionaries';

const LOCALES = Object.keys(LOCALE_NAMES) as Locale[];

export function LanguageDropdown() {
    const { locale, setLocale, t } = useI18n();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                aria-label={t.header.languageLabel}
                className="flex cursor-pointer items-center gap-[6px] text-sm font-medium leading-5 text-foreground transition-colors hover:text-accent focus:outline-none"
            >
                <span>{LOCALE_NAMES[locale]}</span>
                <ChevronDown className="size-[11px]" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="start"
                className="min-w-[140px] border-border/30 bg-background text-foreground"
            >
                {LOCALES.map((option) => (
                    <DropdownMenuItem
                        key={option}
                        onClick={() => setLocale(option)}
                        className={cn(
                            'cursor-pointer text-sm font-medium focus:bg-secondary focus:text-foreground',
                            option === locale && 'text-accent'
                        )}
                    >
                        {LOCALE_NAMES[option]}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
