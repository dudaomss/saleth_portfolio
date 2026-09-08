'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT_EMAIL, SECTION_IDS, SOCIAL_LINKS } from '@/app/config/site';
import { SOCIAL_ICONS } from '@/app/components/icons/brand';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { EXTERNAL_LINK_PROPS } from '@/app/utils/externalLink';
import { revealDelay } from '@/app/utils/reveal';
import { Section } from '@/app/components/common/Section';

const COPIED_FEEDBACK_MS = 2000;

const actionClassName = 'w-full rounded-full px-5 sm:w-auto';

const socialLinkClassName =
    'flex size-12 items-center justify-center rounded-full border border-solid border-input text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent';

const Contact = () => {
    const { t } = useI18n();
    const [copied, setCopied] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(
        () => () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        },
        []
    );

    const copyEmail = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
        } catch {
            return;
        }

        setCopied(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), COPIED_FEEDBACK_MS);
    }, []);

    const CopyIcon = copied ? Check : Copy;

    return (
        <Section
            id={SECTION_IDS.contact}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
        >
            <div className="flex w-full max-w-[614px] flex-col items-center gap-6">
                <div
                    className="reveal flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
                    style={revealDelay(2)}
                >
                    <Button asChild size="lg" className={actionClassName}>
                        <a href={`mailto:${CONTACT_EMAIL}`}>
                            <Mail className="size-4" />
                            {t.contact.emailLabel}
                        </a>
                    </Button>

                    <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={copyEmail}
                        className={`${actionClassName} cursor-pointer border-input hover:border-accent`}
                    >
                        <CopyIcon className="size-4" />
                        <span aria-live="polite">
                            {copied ? t.contact.copied : t.contact.copy}
                        </span>
                    </Button>
                </div>

                <div
                    className="reveal flex items-center gap-4"
                    style={revealDelay(3)}
                >
                    {SOCIAL_LINKS.map(({ id, url }) => {
                        const Icon = SOCIAL_ICONS[id];

                        return (
                            <a
                                key={id}
                                href={url}
                                {...EXTERNAL_LINK_PROPS}
                                aria-label={t.social[id]}
                                className={socialLinkClassName}
                            >
                                <Icon className="size-5" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default Contact;
