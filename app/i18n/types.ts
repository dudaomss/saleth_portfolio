import type { NavSectionId, SocialId } from '@/app/config/site';
import type { ProjectId } from '@/app/config/projects';
import type { SkillGroupId } from '@/app/config/skills';

export type Locale = 'pt' | 'en';

export type Segment = {
    text: string;
    accent?: boolean;
};

export type ProjectCopy = {
    description: string;
};

export type TimelineEntry = {
    date: string;
    role: string;
    bullets: string[];
};

export type Dictionary = {
    backToTop: string;
    social: Record<SocialId, string>;
    nav: Record<NavSectionId, string>;
    header: {
        resume: string;
        resumeShort: string;
        languageLabel: string;
        openMenu: string;
        menuTitle: string;
        navLabel: string;
    };
    hero: {
        greeting: string;
        name: string;
        lead: string;
        scrollDown: string;
    };
    about: {
        title: string;
        paragraphs: Segment[][];
    };
    skills: {
        title: string;
        subtitle: string;
        groups: Record<SkillGroupId, string>;
        spokenLanguages: string[];
    };
    projects: {
        title: string;
        subtitle: string;
        stacksLabel: string;
        liveLabel: string;
        repoLabel: string;
        previous: string;
        next: string;
        goToProject: string;
        items: Record<ProjectId, ProjectCopy>;
    };
    experience: {
        title: string;
        subtitle: string;
        items: TimelineEntry[];
    };
    footer: {
        builtBy: string;
        source: string;
    };
    contact: {
        title: string;
        subtitle: string;
        emailLabel: string;
        copy: string;
        copied: string;
    };
};
