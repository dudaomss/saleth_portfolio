'use client';

import Image from 'next/image';
import { CircleChevronUp, Github, Linkedin } from 'lucide-react';
import heroPhoto from '@/public/images/hero.png';
import { cn } from '@/lib/utils';
import { SECTION_IDS, SOCIAL_LINKS } from '@/app/config/site';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { useInView } from '@/app/hooks/useInView';
import { revealDelay } from '@/app/utils/reveal';
import { scrollToSection } from '@/app/utils/scrollToSection';

const socialLinkClassName =
    'text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-accent';

const Hero = () => {
    const { t } = useI18n();
    const { ref, inView } = useInView<HTMLElement>({ threshold: 0 });

    return (
        <section
            ref={ref}
            id={SECTION_IDS.hero}
            className={cn(
                'flex flex-col items-start gap-12 py-[33px] lg:gap-20 lg:px-[90px]',
                inView && 'is-visible'
            )}
        >
            {/* No mobile o texto vem antes da foto; no desktop a foto volta para a esquerda. */}
            <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-[68px]">
                <div className="order-1 flex w-full flex-col items-start justify-center gap-5 lg:order-2 lg:w-auto lg:shrink">
                    <div className="flex flex-col items-start justify-center gap-[10px] lg:pt-[25px]">
                        <h1
                            className="reveal max-w-[798px] text-display font-bold"
                            style={revealDelay(0)}
                        >
                            {t.hero.greeting}
                            <span className="text-accent">{t.hero.name}</span>
                        </h1>

                        <p
                            className="reveal max-w-[706px] text-lead font-medium"
                            style={revealDelay(2)}
                        >
                            {t.hero.lead}
                        </p>
                    </div>

                    <div
                        className="reveal flex items-center gap-5"
                        style={revealDelay(4)}
                    >
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t.hero.linkedin}
                            className={socialLinkClassName}
                        >
                            <Linkedin className="size-8 lg:size-9" strokeWidth={1.5} />
                        </a>
                        <a
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t.hero.github}
                            className={socialLinkClassName}
                        >
                            <Github className="size-8 lg:size-9" strokeWidth={1.5} />
                        </a>
                    </div>
                </div>

                <div
                    className="reveal order-2 flex w-full shrink-0 justify-center px-4 lg:order-1 lg:w-[332px]"
                    style={revealDelay(1)}
                >
                    {/* A moldura define o recorte; a foto é posicionada dentro dela
                        com as mesmas proporções do Figma. */}
                    <div className="relative aspect-[300/404] w-full max-w-[300px] overflow-hidden rounded-[17px] shadow-[-14px_-14px_0.4px_0px_white,14px_14px_0.4px_0px_#ffa8a8]">
                        <Image
                            src={heroPhoto}
                            alt={t.hero.name}
                            priority
                            sizes="300px"
                            className="absolute left-[-11.39%] top-[-50.32%] h-[162.36%] w-[122.88%] max-w-none"
                        />
                    </div>
                </div>
            </div>

            <div
                className="reveal flex w-full items-center justify-center"
                style={revealDelay(6)}
            >
                <button
                    type="button"
                    onClick={() => scrollToSection(SECTION_IDS.about)}
                    aria-label={t.hero.scrollDown}
                    className="cursor-pointer text-foreground transition-colors hover:text-accent"
                >
                    <CircleChevronUp
                        className="animate-bob size-10 lg:size-[45px]"
                        strokeWidth={1.5}
                    />
                </button>
            </div>
        </section>
    );
};

export default Hero;
