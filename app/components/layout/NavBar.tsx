'use client';

import { NAV_SECTION_IDS } from '@/app/config/site';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { scrollToSection } from '@/app/utils/scrollToSection';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';

const linkClassName =
    'relative cursor-pointer whitespace-nowrap p-0 text-sm font-bold text-foreground transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-accent hover:after:w-full focus:text-accent';

const NavBar = () => {
    const { t } = useI18n();

    return (
        <nav aria-label={t.header.navLabel} className="hidden lg:block">
            <NavigationMenu viewport={false}>
                <NavigationMenuList className="gap-[14px]">
                    {NAV_SECTION_IDS.map((sectionId) => (
                        <NavigationMenuItem key={sectionId}>
                            <NavigationMenuLink
                                href={`#${sectionId}`}
                                onClick={(event) => {
                                    event.preventDefault();
                                    scrollToSection(sectionId);
                                }}
                                className={linkClassName}
                            >
                                {t.nav[sectionId]}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
};

export default NavBar;
