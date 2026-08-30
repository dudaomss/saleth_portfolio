import type { Dictionary } from '../types';

export const pt: Dictionary = {
    nav: {
        about: 'sobre',
        skills: 'habilidades',
        projects: 'projetos',
        experience: 'experiência',
        contact: 'contato',
    },
    header: {
        resume: 'baixe meu currículo',
        resumeShort: 'currículo',
        languageLabel: 'Selecionar idioma',
        openMenu: 'Abrir menu de navegação',
        menuTitle: 'Navegação',
    },
    hero: {
        greeting: 'Olá, eu sou a ',
        name: 'Eduarda Saleth',
        lead: 'Desenvolvedora web e estudante de Sistemas de Informação desde 2022. Gosto de transformar ideias em interfaces simples, bonitas e que realmente funcionam.',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        scrollDown: 'Ir para a seção sobre',
    },
    about: {
        title: 'sobre',
        paragraphs: [
            [
                { text: 'Trabalho com desenvolvimento web desde 2022, com ' },
                { text: 'foco em front-end', accent: true },
                {
                    text: ' e interesse em UI/UX. Gosto de criar interfaces simples, bonitas e funcionais, sempre pensando na experiência de quem vai usar.',
                },
            ],
            [
                {
                    text: 'Quando não estou codando, provavelmente estou jogando, lendo, assistindo reality shows ou ouvindo k-pop (especialmente NewJeans). Essas paixões ',
                },
                { text: 'influenciam', accent: true },
                {
                    text: ' bastante meu processo criativo. E sim, sou completamente apaixonada por animais — especialmente minha cachorrinha ',
                },
                { text: 'Shuri', accent: true },
                { text: ' 🐶.' },
            ],
        ],
    },
    skills: {
        title: 'habilidades',
        subtitle:
            'Tecnologias que utilizo atualmente no meu dia a dia como desenvolvedora.',
    },
    projects: {
        title: 'projetos',
        placeholder: 'em breve',
        previous: 'Ver projetos anteriores',
        next: 'Ver próximos projetos',
        goToPage: 'Ir para a página',
    },
    experience: {
        title: 'experiência',
        items: [
            {
                date: 'maio 2024 - até o momento',
                role: 'Assistente de Desenvolvimento de Software | SYSDAM',
                bullets: [
                    'Desenvolvimento de sistema web para monitoramento de barragens',
                    'Desenvolvimento front-end com React.js',
                    'Customização de componentes utilizando Ant Design (AntD)',
                    'Gerenciamento de estado com Context API',
                    'Implementação de mapas e visualização geoespacial com Cesium',
                    'Atuação em back-end com C#',
                ],
            },
            {
                date: 'junho 2022 - maio 2024',
                role: 'Estagiária em Desenvolvimento de Software | dti digital',
                bullets: [
                    'Desenvolvimento web para sistema bancário',
                    'Criação de interfaces com React.js e Material UI (MUI)',
                    'Integração com APIs utilizando Axios e Redux',
                    'Implementação de testes automatizados com Cypress',
                    'Atuação com back-end em C# (.NET 6)',
                    'Manipulação de banco de dados relacional (MySQL)',
                    'Participação em metodologia ágil, refinamento de tarefas e ritos do time',
                ],
            },
        ],
    },
};
