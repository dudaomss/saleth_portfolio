'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const currentPage = (track: HTMLElement) =>
    track.clientWidth > 0 ? Math.round(track.scrollLeft / track.clientWidth) : 0;

/**
 * Carrossel baseado em scroll nativo com `scroll-snap`.
 * Uma "página" equivale a uma largura visível do trilho, então o número de
 * páginas se ajusta sozinho quando o breakpoint muda quantos itens cabem.
 */
export function useCarousel<T extends HTMLElement>() {
    const trackRef = useRef<T>(null);
    const frameRef = useRef<number | null>(null);
    const [pageCount, setPageCount] = useState(1);
    const [page, setPage] = useState(0);

    const sync = useCallback(() => {
        const track = trackRef.current;
        if (!track || track.clientWidth === 0) return;

        // O -1 absorve arredondamento de subpixel: sem ele, um trilho que cabe
        // inteiro na tela às vezes reporta duas páginas.
        const pages = Math.ceil((track.scrollWidth - 1) / track.clientWidth);
        setPageCount(Math.max(1, pages));
        setPage(currentPage(track));
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        sync();

        if (typeof ResizeObserver === 'undefined') return;
        const observer = new ResizeObserver(sync);
        observer.observe(track);
        return () => observer.disconnect();
    }, [sync]);

    useEffect(
        () => () => {
            if (frameRef.current !== null) {
                cancelAnimationFrame(frameRef.current);
            }
        },
        []
    );

    /** Atualiza a página no máximo uma vez por frame durante o scroll. */
    const handleScroll = useCallback(() => {
        if (frameRef.current !== null) return;

        frameRef.current = requestAnimationFrame(() => {
            frameRef.current = null;
            const track = trackRef.current;
            if (track) setPage(currentPage(track));
        });
    }, []);

    const scrollToPage = useCallback((index: number) => {
        const track = trackRef.current;
        if (!track) return;
        track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
    }, []);

    const scrollByPage = useCallback((direction: -1 | 1) => {
        const track = trackRef.current;
        if (!track) return;
        track.scrollBy({
            left: direction * track.clientWidth,
            behavior: 'smooth',
        });
    }, []);

    return {
        trackRef,
        page,
        pageCount,
        hasOverflow: pageCount > 1,
        isFirstPage: page <= 0,
        isLastPage: page >= pageCount - 1,
        handleScroll,
        scrollToPage,
        scrollByPage,
    };
}
