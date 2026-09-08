'use client';

import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { RESUME_PATH } from '@/app/config/site';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { useInView } from '@/app/hooks/useInView';
import NavBar from './NavBar';
import MobileNav from './MobileNav';
import { LanguageDropdown } from '../LanguageDropdown';

const Header = () => {
    const { t, locale } = useI18n();
    const resumePath = RESUME_PATH[locale];
    const { ref, inView } = useInView<HTMLElement>({ threshold: 0 });

    return (
        <header
            ref={ref}
            className={cn(
                'reveal flex min-h-9 w-full items-center justify-between gap-4',
                inView && 'is-visible'
            )}
        >
            <p className="shrink-0 font-bold leading-none text-accent">
                <span className="text-xl sm:text-2xl">{'<saleth '}</span>
                <span className="text-sm sm:text-base">/</span>
                <span className="text-xl sm:text-2xl">{'>'}</span>
            </p>

            <NavBar />

            <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-[15px]">
                <LanguageDropdown />

                <Button
                    variant="outline"
                    className="h-9 min-w-16 gap-0 px-2 py-1.5 font-medium"
                    asChild
                >
                    <a href={resumePath} download={resumePath.slice(1)}>
                        <FileDown className="size-4" />
                        <span className="hidden px-1 sm:inline">{t.header.resume}</span>
                        <span className="px-1 sm:hidden">{t.header.resumeShort}</span>
                    </a>
                </Button>

                <MobileNav />
            </div>
        </header>
    );
};

export default Header;
