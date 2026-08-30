import type { CSSProperties } from 'react';

/** Passo padrão, em ms, entre os itens de uma lista escalonada. */
const DEFAULT_STEP_MS = 70;

/**
 * Atraso da animação de entrada de um item.
 * Lido pela regra `.reveal` em `globals.css` através de `--reveal-delay`.
 */
export const revealDelay = (
    index: number,
    stepMs: number = DEFAULT_STEP_MS
): CSSProperties =>
    ({ '--reveal-delay': `${index * stepMs}ms` }) as CSSProperties;
