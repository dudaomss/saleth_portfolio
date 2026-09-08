'use client';

import { Card } from '@/components/ui/card';
import { SECTION_IDS } from '@/app/config/site';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { revealDelay } from '@/app/utils/reveal';
import { Section } from '@/app/components/common/Section';

const ITEM_DELAY_STEP_MS = 140;

const splitRole = (role: string) => {
    const [title, company] = role.split('|');
    return { title: title.trim(), company: company?.trim() };
};

const Experience = () => {
    const { t } = useI18n();

    return (
        <Section
            id={SECTION_IDS.experience}
            title={t.experience.title}
            subtitle={t.experience.subtitle}
        >
            <Card className="w-full max-w-[614px] gap-0 border-solid border-white/15 bg-transparent p-6 py-6 sm:p-8 sm:py-8">
                <ol className="flex w-full flex-col">
                    {t.experience.items.map((item, index) => {
                        const { title, company } = splitRole(item.role);

                        return (
                            <li
                                key={item.role}
                                className="reveal relative flex w-full flex-col items-start pb-10 pl-7 last:pb-0"
                                style={revealDelay(index + 2, ITEM_DELAY_STEP_MS)}
                            >
                                {/* Linha e marcador da timeline. */}
                                <span
                                    aria-hidden="true"
                                    className="absolute bottom-0 left-[5px] top-[10px] w-px bg-foreground/25"
                                />
                                <span
                                    aria-hidden="true"
                                    className="absolute left-[5px] top-[5px] size-[10px] -translate-x-1/2 rounded-full bg-accent"
                                />

                                <p className="font-roboto text-xs uppercase tracking-[0.14em] text-muted-foreground">
                                    {item.date}
                                </p>

                                <h3 className="mt-2 text-base font-bold leading-[24px]">
                                    {title}
                                </h3>
                                {company && (
                                    <p className="text-sm leading-[22px] text-muted-foreground">
                                        {company}
                                    </p>
                                )}

                                <ul className="mt-4 flex list-disc flex-col gap-3 ps-5 marker:text-foreground/40">
                                    {item.bullets.map((bullet) => (
                                        <li
                                            key={bullet}
                                            className="text-sm leading-[22px]"
                                        >
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ol>
            </Card>
        </Section>
    );
};

export default Experience;
