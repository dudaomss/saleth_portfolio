import type { SectionId } from '@/app/config/site';

/** Rola até a âncora. Ignora silenciosamente seções que ainda não existem. */
export const scrollToSection = (sectionId: SectionId) => {
    document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
