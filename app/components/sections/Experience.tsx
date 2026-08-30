'use client';

import { SECTION_IDS } from '@/app/config/site';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { revealDelay } from '@/app/utils/reveal';
import { Section } from '@/app/components/common/Section';

const ITEM_DELAY_STEP_MS = 140;

const Experience = () => {
    const { t } = useI18n();

    return (
        <Section id={SECTION_IDS.experience} title={t.experience.title}>
            <ol className="flex w-full max-w-[614px] flex-col">
                {t.experience.items.map((item, index) => (
                    <li
                        key={item.role}
                        className="reveal flex w-full flex-col items-start sm:flex-row"
                        style={revealDelay(index + 1, ITEM_DELAY_STEP_MS)}
                    >
                        <p className="mb-1 pl-[26px] font-roboto text-sm leading-[22px] sm:mb-0 sm:w-[186px] sm:shrink-0 sm:pl-0 sm:pr-[14px] sm:text-right">
                            {item.date}
                        </p>

                        <div className="relative flex min-w-px flex-1 flex-col items-start pb-6 pl-[26px]">
                            {/* Linha e marcador da timeline. */}
                            <span
                                aria-hidden="true"
                                className="absolute bottom-0 left-[5px] top-[11px] w-px bg-foreground/60"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute left-[5px] top-[6px] size-[10px] -translate-x-1/2 rounded-full bg-foreground"
                            />

                            <h3 className="text-base font-bold leading-[24px] text-accent">
                                {item.role}
                            </h3>

                            <ul className="mt-1 list-disc ps-5">
                                {item.bullets.map((bullet) => (
                                    <li key={bullet} className="text-sm leading-[24px]">
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </Section>
    );
};

export default Experience;
