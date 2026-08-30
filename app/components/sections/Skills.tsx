'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { SECTION_IDS } from '@/app/config/site';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { revealDelay } from '@/app/utils/reveal';
import { Section } from '@/app/components/common/Section';

type Stack = {
    name: string;
    src: string;
    /** Dimensões desenhadas para o ícone no Figma. */
    width: number;
    height: number;
    imageClassName?: string;
};

/** Delay dos cards começa depois do título e do subtítulo da seção. */
const CARD_DELAY_OFFSET = 2;
const CARD_DELAY_STEP_MS = 60;

const STACKS: Stack[] = [
    { name: 'HTML5', src: '/images/stacks/html5.png', width: 40, height: 40 },
    {
        name: 'CSS3',
        src: '/images/stacks/css3.png',
        width: 40,
        height: 40,
        imageClassName: 'object-contain',
    },
    {
        name: 'JavaScript',
        src: '/images/stacks/javascript.png',
        width: 40,
        height: 40,
        imageClassName: 'rounded-[4px]',
    },
    {
        name: 'Typescript',
        src: '/images/stacks/typescript.png',
        width: 40,
        height: 40,
    },
    { name: 'Reactjs', src: '/images/stacks/react.png', width: 40, height: 35 },
    {
        name: 'styled components',
        src: '/images/stacks/styled-components.png',
        width: 40,
        height: 40,
    },
    {
        name: 'FIGMA',
        src: '/images/stacks/figma.svg',
        width: 24,
        height: 24,
        imageClassName: 'object-contain',
    },
    { name: 'C#', src: '/images/stacks/csharp.png', width: 36, height: 40 },
];

const Skills = () => {
    const { t } = useI18n();

    return (
        <Section
            id={SECTION_IDS.skills}
            title={t.skills.title}
            subtitle={t.skills.subtitle}
        >
            <ul className="flex w-full max-w-[714px] flex-wrap items-stretch justify-center gap-4 sm:gap-5">
                {STACKS.map((stack, index) => (
                    <li
                        key={stack.name}
                        className="reveal"
                        style={revealDelay(
                            index + CARD_DELAY_OFFSET,
                            CARD_DELAY_STEP_MS
                        )}
                    >
                        {/* O hover fica no filho: o reveal usa `animation-fill-mode: both`
                            e travaria qualquer transform aplicado no mesmo elemento. */}
                        <div className="flex size-[140px] flex-col items-center justify-center gap-[7px] rounded-[10px] border border-solid border-border px-4 py-6 shadow-[2px_5px_4px_0px_rgba(255,168,168,0.4)] transition duration-300 hover:-translate-y-1 hover:border-accent sm:size-[160px]">
                            <Image
                                src={stack.src}
                                alt={stack.name}
                                width={stack.width}
                                height={stack.height}
                                // O otimizador recusa SVG sem `dangerouslyAllowSVG`.
                                unoptimized={stack.src.endsWith('.svg')}
                                className={cn('object-cover', stack.imageClassName)}
                            />
                            <span className="text-center text-sm font-medium leading-tight">
                                {stack.name}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default Skills;
