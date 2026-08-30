'use client';

import { cn } from '@/lib/utils';
import type { SectionId } from '@/app/config/site';
import { useInView } from '@/app/hooks/useInView';
import { revealDelay } from '@/app/utils/reveal';

type SectionProps = {
    id: SectionId;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
};

/**
 * Casca comum das seções: âncora do menu, título, e o gatilho da animação de
 * entrada. Marcar a seção com `is-visible` faz todos os filhos `.reveal`
 * animarem em cascata.
 */
export function Section({
    id,
    title,
    subtitle,
    children,
    className,
}: SectionProps) {
    const { ref, inView } = useInView<HTMLElement>();
    const headingId = `${id}-title`;

    return (
        <section
            ref={ref}
            id={id}
            aria-labelledby={headingId}
            className={cn(
                'flex flex-col items-center justify-center gap-[10px]',
                inView && 'is-visible',
                className
            )}
        >
            <header className="flex flex-col items-center gap-[10px] pb-9">
                <h2
                    id={headingId}
                    className="reveal text-section font-medium text-accent"
                >
                    {title}
                </h2>

                {subtitle && (
                    <p
                        className="reveal max-w-[500px] text-center text-body"
                        style={revealDelay(1)}
                    >
                        {subtitle}
                    </p>
                )}
            </header>

            {children}
        </section>
    );
}
