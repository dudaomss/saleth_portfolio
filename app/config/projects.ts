
export type ProjectId = 'random-cine' | 'melhores-do-ano' | 'awards-ballot';

export type Project = {
    id: ProjectId;
    name: string;
    preview: string;
    liveUrl?: string;
    repoUrl?: string;
    stacks: string[];
};

export const PROJECTS: Project[] = [
    {
        id: 'random-cine',
        name: 'Random Cine',
        preview: '/images/projects/random-cine.png',
        liveUrl: 'https://random-cine.netlify.app/',
        repoUrl: 'https://github.com/dudaomss/random-cine',
        stacks: [
            'Next.js 16',
            'React 18',
            'Chakra UI v3',
            'Framer Motion',
            'CSS Modules',
            'axios',
            'Netlify',
        ],
    },
    {
        id: 'melhores-do-ano',
        name: 'Melhores do Ano',
        preview: '/images/projects/melhores-do-ano.png',
        repoUrl: 'https://github.com/fabio-aug/best-of-the-year-web',
        stacks: [
            'React 19',
            'TypeScript',
            'Vite 7',
            'shadcn/ui',
            'Framer Motion',
            'ESLint',
        ],
    },
    {
        id: 'awards-ballot',
        name: 'Awards Ballot',
        preview: '/images/projects/awards-ballot.png',
        liveUrl: 'https://awards-ballot-seven.vercel.app/',
        repoUrl: 'https://github.com/jotapz/Awards-Ballot',
        stacks: [
            'Next.js 15',
            'React 19',
            'Tailwind CSS v4',
            'shadcn/ui',
            'Framer Motion',
            'Supabase',
            'html2canvas',
            'Vercel',
        ],
    },
];
