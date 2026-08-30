'use client';

import { useEffect, useRef, useState } from 'react';

type UseInViewOptions = {
    /** Fração do elemento que precisa aparecer para disparar. */
    threshold?: number;
    /** Margem aplicada à viewport antes de considerar o elemento visível. */
    rootMargin?: string;
};

/**
 * Marca o elemento como visto na primeira vez que ele entra na viewport.
 * Depois disso o observer é desligado — a animação de entrada roda uma vez só.
 *
 * Sem JavaScript o conteúdo continua visível: `globals.css` neutraliza a regra
 * `.reveal` dentro de um `<noscript>`.
 */
export function useInView<T extends HTMLElement>({
    threshold = 0.15,
    rootMargin = '0px 0px -10% 0px',
}: UseInViewOptions = {}) {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries.some((entry) => entry.isIntersecting)) return;
                setInView(true);
                observer.disconnect();
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return { ref, inView };
}
