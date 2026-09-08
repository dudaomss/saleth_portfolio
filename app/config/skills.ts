export type SkillGroupId =
    | 'languages'
    | 'frontend'
    | 'backend'
    | 'tools'
    | 'spokenLanguages';

export type SkillGroup = {
    id: SkillGroupId;
    items?: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
    {
        id: 'languages',
        items: ['JavaScript (ES6+)', 'TypeScript', 'C#'],
    },
    {
        id: 'frontend',
        items: [
            'React.js',
            'Next.js',
            'Vite',
            'Ant Design',
            'Material UI',
            'styled-components',
            'Tailwind CSS',
            'HTML5',
            'CSS3',
        ],
    },
    {
        id: 'backend',
        items: ['.NET', 'REST APIs', 'MySQL'],
    },
    {
        id: 'tools',
        items: ['Git', 'GitHub', 'Azure', 'Figma', 'Cypress', 'Claude', 'Cursor'],
    },
    { id: 'spokenLanguages' },
];
