'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SECTION_IDS } from '@/app/config/site';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { useCarousel } from '@/app/hooks/useCarousel';
import { revealDelay } from '@/app/utils/reveal';
import { Section } from '@/app/components/common/Section';

type Project = {
    id: string;
};

/** Placeholders do Figma — trocar por projetos reais quando existirem. */
const PROJECTS: Project[] = [{ id: 'p1' }, { id: 'p2' }, { id: 'p3' }];

const CARD_DELAY_STEP_MS = 90;

const arrowClassName =
    'absolute z-10 hidden size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:text-accent disabled:cursor-default disabled:opacity-30 sm:flex';

const Projects = () => {
    const { t } = useI18n();
    const {
        trackRef,
        page,
        pageCount,
        hasOverflow,
        isFirstPage,
        isLastPage,
        handleScroll,
        scrollToPage,
        scrollByPage,
    } = useCarousel<HTMLUListElement>();

    return (
        <Section id={SECTION_IDS.projects} title={t.projects.title}>
            <div className="relative flex w-full max-w-[1265px] items-center">
                <button
                    type="button"
                    onClick={() => scrollByPage(-1)}
                    disabled={!hasOverflow || isFirstPage}
                    aria-label={t.projects.previous}
                    className={cn(arrowClassName, '-left-2 lg:-left-12')}
                >
                    <ChevronLeft className="size-5" />
                </button>

                <ul
                    ref={trackRef}
                    onScroll={handleScroll}
                    className="flex w-full snap-x snap-mandatory gap-[10px] overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {PROJECTS.map((project, index) => (
                        // As larguras descontam o gap de 10px do trilho acima:
                        // 2 por vista tiram 1 gap, 3 por vista tiram 2.
                        <li
                            key={project.id}
                            style={revealDelay(index + 1, CARD_DELAY_STEP_MS)}
                            className="reveal flex shrink-0 basis-full snap-start justify-center sm:basis-[calc((100%-10px)/2)] lg:basis-[calc((100%-20px)/3)]"
                        >
                            <div className="flex aspect-square w-full max-w-[415px] items-center justify-center rounded-[10px] border border-solid border-border bg-black text-sm text-muted-foreground transition duration-300 hover:-translate-y-1 hover:border-accent">
                                {t.projects.placeholder}
                            </div>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    onClick={() => scrollByPage(1)}
                    disabled={!hasOverflow || isLastPage}
                    aria-label={t.projects.next}
                    className={cn(arrowClassName, '-right-2 lg:-right-12')}
                >
                    <ChevronRight className="size-5" />
                </button>
            </div>

            {hasOverflow && (
                <div className="mt-6 flex items-center justify-center gap-2">
                    {Array.from({ length: pageCount }, (_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => scrollToPage(index)}
                            aria-label={`${t.projects.goToPage} ${index + 1}`}
                            aria-current={index === page}
                            className={cn(
                                'h-2 cursor-pointer rounded-full transition-all',
                                index === page
                                    ? 'w-6 bg-accent'
                                    : 'w-2 bg-foreground/40 hover:bg-foreground/70'
                            )}
                        />
                    ))}
                </div>
            )}
        </Section>
    );
};

export default Projects;
