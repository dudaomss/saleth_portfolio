'use client';

import { SOURCE_REPO_URL } from '@/app/config/site';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { EXTERNAL_LINK_PROPS } from '@/app/utils/externalLink';

const Footer = () => {
    const { t } = useI18n();

    return (
        <footer className="border-t border-solid border-white/10">
            <div className="mx-auto flex w-full max-w-[1512px] flex-col items-center gap-1 px-5 py-6 text-center text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-2 sm:px-8 lg:px-[60px]">
                <p>{t.footer.builtBy}</p>

                <a
                    href={SOURCE_REPO_URL}
                    {...EXTERNAL_LINK_PROPS}
                    className="underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                    {t.footer.source}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
