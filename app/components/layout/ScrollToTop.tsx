'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SECTION_IDS } from '@/app/config/site';
import { useI18n } from '@/app/i18n/LanguageProvider';

const ScrollToTop = () => {
    const { t } = useI18n();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById(SECTION_IDS.hero);
        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => setVisible(!entry.isIntersecting),
            { threshold: 0 }
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    const scrollToTop = () => {
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
    };

    return (
        <Button
            type="button"
            variant="outline"
            size="icon-lg"
            onClick={scrollToTop}
            aria-label={t.backToTop}
            aria-hidden={!visible}
            tabIndex={visible ? 0 : -1}
            className={cn(
                'fixed bottom-6 right-6 z-40 cursor-pointer rounded-full border-white/20 shadow-lg transition-all duration-300 hover:border-accent hover:text-accent sm:bottom-8 sm:right-8',
                visible
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-2 opacity-0'
            )}
        >
            <ArrowUp className="size-5" />
        </Button>
    );
};

export default ScrollToTop;
