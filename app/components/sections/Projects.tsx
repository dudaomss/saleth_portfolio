'use client';

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { SECTION_IDS } from '@/app/config/site';
import { PROJECTS } from '@/app/config/projects';
import { GitHubIcon } from '@/app/components/icons/brand';
import { EXTERNAL_LINK_PROPS } from '@/app/utils/externalLink';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { revealDelay } from '@/app/utils/reveal';
import { Section } from '@/app/components/common/Section';

const CARD_STEP_PERCENT = 32;
const CARD_SCALE_STEP = 0.12;
const MAX_VISIBLE_OFFSET = 2;
const SWIPE_THRESHOLD_PX = 40;

const arrowClassName =
    'absolute top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full border-white/20';

const panelAnimation =
    'animate-[reveal-up_0.45s_cubic-bezier(0.22,1,0.36,1)_both]';

const Projects = () => {
    const { t } = useI18n();
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);

    const total = PROJECTS.length;
    const project = PROJECTS[activeIndex];
    const copy = t.projects.items[project.id];

    const move = useCallback(
        (direction: -1 | 1) =>
            setActiveIndex((current) => (current + direction + total) % total),
        [total]
    );

    const onTouchStart = (event: React.TouchEvent) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const onTouchEnd = (event: React.TouchEvent) => {
        const start = touchStartX.current;
        touchStartX.current = null;
        if (start === null) return;

        const delta = event.changedTouches[0].clientX - start;
        if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
        move(delta < 0 ? 1 : -1);
    };

    return (
        <Section
            id={SECTION_IDS.projects}
            title={t.projects.title}
            subtitle={t.projects.subtitle}
        >
            <div className="grid w-full max-w-[1265px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,470px)] lg:gap-12">
                <div
                    className="reveal relative"
                    style={revealDelay(2)}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="relative h-[260px] overflow-hidden sm:h-[330px] lg:h-[380px]">
                        {PROJECTS.map((item, index) => {
                            const half = Math.floor(total / 2);
                            const offset =
                                ((index - activeIndex + total + half) % total) - half;
                            const distance = Math.abs(offset);
                            const isActive = offset === 0;
                            const isVisible = distance <= MAX_VISIBLE_OFFSET;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    tabIndex={isActive || !isVisible ? -1 : 0}
                                    aria-label={`${t.projects.goToProject}: ${item.name}`}
                                    aria-hidden={!isVisible}
                                    style={{
                                        transform: `translate(-50%, -50%) translateX(${offset * CARD_STEP_PERCENT}%) scale(${1 - distance * CARD_SCALE_STEP})`,
                                        zIndex: total - distance,
                                        opacity: isVisible ? 1 : 0,
                                    }}
                                    className={cn(
                                        'absolute left-1/2 top-1/2 w-[66%] max-w-[420px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[64%]',
                                        !isVisible && 'pointer-events-none',
                                        isActive && 'cursor-default'
                                    )}
                                >
                                    <Card
                                        className={cn(
                                            'gap-0 overflow-hidden border-solid p-0 py-0 transition-colors',
                                            isActive
                                                ? 'border-accent'
                                                : 'border-white/15'
                                        )}
                                    >
                                        <div className="relative aspect-video w-full overflow-hidden bg-black">
                                            <Image
                                                src={item.preview}
                                                alt={item.name}
                                                fill
                                                sizes="(min-width: 1024px) 420px, 70vw"
                                                unoptimized={item.preview.endsWith('.gif')}
                                                priority={index === 0}
                                                className="object-cover object-top"
                                            />
                                        </div>

                                        <div className="flex flex-col items-center gap-2 px-4 py-4">
                                            <p className="text-center text-base font-medium">
                                                {item.name}
                                            </p>
                                            <div className="flex flex-wrap justify-center gap-[6px]">
                                                {item.stacks.slice(0, 2).map((stack) => (
                                                    <Badge
                                                        key={stack}
                                                        variant="outline"
                                                        className="border-input"
                                                    >
                                                        {stack}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </Card>
                                </button>
                            );
                        })}

                        <Button
                            type="button"
                            variant="outline"
                            size="icon-lg"
                            onClick={() => move(-1)}
                            aria-label={t.projects.previous}
                            className={cn(arrowClassName, 'left-0 sm:left-2')}
                        >
                            <ChevronLeft className="size-5" />
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            size="icon-lg"
                            onClick={() => move(1)}
                            aria-label={t.projects.next}
                            className={cn(arrowClassName, 'right-0 sm:right-2')}
                        >
                            <ChevronRight className="size-5" />
                        </Button>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <div className="flex items-center gap-2 rounded-full border border-solid border-white/10 px-3 py-2">
                            {PROJECTS.map((item, index) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`${t.projects.goToProject}: ${item.name}`}
                                    aria-current={index === activeIndex}
                                    className={cn(
                                        'h-2 cursor-pointer rounded-full transition-all',
                                        index === activeIndex
                                            ? 'w-6 bg-accent'
                                            : 'w-2 bg-foreground/40 hover:bg-foreground/70'
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <Card
                    className="reveal gap-0 border-solid border-white/15 p-6 py-6 sm:p-8 sm:py-8"
                    style={revealDelay(3)}
                >
                    <div key={project.id} className={cn('flex flex-col gap-5', panelAnimation)}>
                        <h3 className="text-xl font-medium text-accent sm:text-2xl">
                            {project.name}
                        </h3>

                        <p className="text-sm leading-relaxed">{copy.description}</p>

                        {project.stacks.length > 0 && (
                            <div className="flex flex-col gap-2">
                                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                    {t.projects.stacksLabel}
                                </span>
                                <ul className="flex flex-wrap gap-[6px]">
                                    {project.stacks.map((stack) => (
                                        <li key={stack}>
                                            <Badge
                                                variant="outline"
                                                className="border-input px-3 py-1 text-xs"
                                            >
                                                {stack}
                                            </Badge>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {(project.liveUrl || project.repoUrl) && (
                            <div className="grid gap-3 sm:grid-cols-2">
                                {project.liveUrl && (
                                    <Button asChild size="lg" className="rounded-[10px]">
                                        <a
                                            href={project.liveUrl}
                                            {...EXTERNAL_LINK_PROPS}
                                        >
                                            <ArrowUpRight className="size-4" />
                                            {t.projects.liveLabel}
                                        </a>
                                    </Button>
                                )}
                                {project.repoUrl && (
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="rounded-[10px] border-input"
                                    >
                                        <a
                                            href={project.repoUrl}
                                            {...EXTERNAL_LINK_PROPS}
                                        >
                                            <GitHubIcon className="size-4" />
                                            {t.projects.repoLabel}
                                        </a>
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </Section>
    );
};

export default Projects;
