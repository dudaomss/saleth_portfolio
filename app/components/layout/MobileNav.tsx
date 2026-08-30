'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_SECTION_IDS, type SectionId } from '@/app/config/site';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { scrollToSection } from '@/app/utils/scrollToSection';

const MobileNav = () => {
    const { t } = useI18n();
    const [open, setOpen] = useState(false);

    const handleNavClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        sectionId: SectionId
    ) => {
        event.preventDefault();
        setOpen(false);
        scrollToSection(sectionId);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
                aria-label={t.header.openMenu}
                className="cursor-pointer text-foreground transition-colors hover:text-accent lg:hidden"
            >
                <Menu className="size-6" />
            </SheetTrigger>

            <SheetContent
                side="right"
                aria-describedby={undefined}
                className="border-border/30 px-6 py-8"
            >
                <SheetHeader className="p-0">
                    <SheetTitle className="text-accent">
                        {t.header.menuTitle}
                    </SheetTitle>
                </SheetHeader>

                <nav aria-label={t.header.menuTitle}>
                    <ul className="flex flex-col gap-5">
                        {NAV_SECTION_IDS.map((sectionId) => (
                            <li key={sectionId}>
                                <a
                                    href={`#${sectionId}`}
                                    onClick={(event) => handleNavClick(event, sectionId)}
                                    className="text-lg font-bold text-foreground transition-colors hover:text-accent"
                                >
                                    {t.nav[sectionId]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
