'use client';

import Image from 'next/image';
import shuriPhoto from '@/public/images/about/shuri.png';
import { SECTION_IDS } from '@/app/config/site';
import { useI18n } from '@/app/i18n/LanguageProvider';
import { revealDelay } from '@/app/utils/reveal';
import { Section } from '@/app/components/common/Section';

type CollageLayer = {
    src: string;
    /** Posição e tamanho em % do quadro, convertidos das medidas do Figma. */
    left: string;
    top: string;
    width: string;
    height: string;
};

/**
 * Rabiscos ao redor da foto. As posições vêm do Figma convertidas de px para %
 * do quadro de 373.754 x 380.663, para que tudo escale junto em telas menores.
 */
const COLLAGE_LAYERS: CollageLayer[] = [
    {
        src: '/images/about/risco.svg',
        left: '6.619%',
        top: '0%',
        width: '18.664%',
        height: '36.293%',
    },
    {
        src: '/images/about/quadro.svg',
        left: '9.889%',
        top: '8.819%',
        width: '82.887%',
        height: '77.140%',
    },
    {
        src: '/images/about/estrela.svg',
        left: '75.045%',
        top: '0.961%',
        width: '24.952%',
        height: '19.895%',
    },
    {
        src: '/images/about/ponto-1.svg',
        left: '11.368%',
        top: '32.485%',
        width: '4.013%',
        height: '3.940%',
    },
    {
        src: '/images/about/ponto-2.svg',
        left: '82.537%',
        top: '59.018%',
        width: '4.013%',
        height: '3.940%',
    },
    {
        src: '/images/about/coracao.svg',
        left: '71.835%',
        top: '75.569%',
        width: '20.602%',
        height: '24.431%',
    },
    {
        src: '/images/about/coelho.svg',
        left: '0%',
        top: '57.994%',
        width: '22.505%',
        height: '29.113%',
    },
];

const About = () => {
    const { t } = useI18n();

    return (
        <Section id={SECTION_IDS.about} title={t.about.title}>
            <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[110px]">
                <div
                    className="reveal max-w-[519px] text-body font-medium"
                    style={revealDelay(1)}
                >
                    {t.about.paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                            key={paragraphIndex}
                            className={paragraphIndex > 0 ? 'mt-4' : undefined}
                        >
                            {paragraph.map((segment, segmentIndex) => (
                                <span
                                    key={segmentIndex}
                                    className={segment.accent ? 'text-accent' : undefined}
                                >
                                    {segment.text}
                                </span>
                            ))}
                        </p>
                    ))}
                </div>

                {/* Colagem decorativa: sem valor semântico para leitores de tela. */}
                <div
                    className="reveal relative aspect-[373.754/380.663] w-full max-w-[373.754px] shrink-0"
                    style={revealDelay(3)}
                    aria-hidden="true"
                >
                    <div className="absolute left-[14.579%] top-[10.681%] h-[73.293%] w-[69.832%] overflow-hidden rounded-[7%]">
                        <Image
                            src={shuriPhoto}
                            alt=""
                            sizes="261px"
                            className="absolute left-0 top-[-35.33%] h-[166.54%] w-full max-w-none"
                        />
                    </div>

                    {COLLAGE_LAYERS.map(({ src, ...position }) => (
                        // SVGs decorativos: `next/image` não os otimiza, então
                        // `img` evita o overhead sem ganho nenhum.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            key={src}
                            src={src}
                            alt=""
                            style={{ position: 'absolute', ...position }}
                            className="max-w-none"
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
