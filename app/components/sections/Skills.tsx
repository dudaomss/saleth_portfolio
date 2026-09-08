'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { SECTION_IDS } from '@/app/config/site';
import { SKILL_GROUPS } from '@/app/config/skills';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { revealDelay } from '@/app/utils/reveal';
import { Section } from '@/app/components/common/Section';

const ROW_DELAY_OFFSET = 2;
const ROW_DELAY_STEP_MS = 90;

const Skills = () => {
    const { t } = useI18n();

    return (
        <Section
            id={SECTION_IDS.skills}
            title={t.skills.title}
            subtitle={t.skills.subtitle}
        >
            <Card className="w-full max-w-[640px] gap-0 border-solid border-white/15 bg-transparent p-6 py-6 sm:p-8 sm:py-8">
                <ul className="flex w-full flex-col">
                    {SKILL_GROUPS.map((group, index) => {
                        const items = group.items ?? t.skills.spokenLanguages;

                        return (
                            <li
                                key={group.id}
                                style={revealDelay(
                                    index + ROW_DELAY_OFFSET,
                                    ROW_DELAY_STEP_MS
                                )}
                                className="reveal flex flex-col gap-3 border-b border-solid border-white/10 py-5 first:pt-0 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6"
                            >
                                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground sm:w-[140px] sm:shrink-0 sm:text-right">
                                    {t.skills.groups[group.id]}
                                </h3>

                                <ul className="flex flex-wrap gap-2">
                                    {items.map((item) => (
                                        <li key={item}>
                                            <Badge
                                                variant="outline"
                                                className="border-input px-3 py-1 text-sm transition-colors hover:border-accent hover:text-accent"
                                            >
                                                {item}
                                            </Badge>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </Card>
        </Section>
    );
};

export default Skills;
