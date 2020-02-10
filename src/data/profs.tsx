import { MediaData } from '../components/templates/Media'

const Profs: MediaData[] = [
    {
        type: 'backend',
        name: 'Java',
        description: 'Data structures, algorithms, programming competitions',
        confidence: 4,
    },
    {
        type: 'backend',
        name: 'CSharp',
        description: 'MVC 5 with .NET and EF6',
        confidence: 3,
    },
    {
        type: 'webdevkit',
        name: 'Javascript',
        description: 'DOM interaction, REST APIs, async/await, Browser API',
        confidence: 5,
    },
    {
        type: 'webdevkit',
        name: 'Node.js',
        description: 'API requests, API design, npm, full-stack JSE + deployment',
        confidence: 3,
    },
    {
        type: 'webdevkit',
        name: 'React',
        description: 'This page is made with React! Working out hooks',
        confidence: 3,
    },
    {
        type: 'webdevkit',
        name: 'Typescript',
        description: 'Static typing made simple, 2nd nature from JS background',
        confidence: 4,
    },
    {
        type: 'webdevkit',
        name: 'Bootstrap',
        description: 'Agile and accessible templating, used in almost all my projects',
        confidence: 4,
    },
    {
        type: 'webdevkit',
        name: 'Material Design',
        description: 'Adapting Bootstrap 4 knowledge into Material (UI)',
        confidence: 2,
    },
    {
        type: 'scripting',
        name: 'Python',
        description: 'Starting with web scrapers, file manipulation, algorithms',
        confidence: 2,
    },
    {
        type: 'scripting',
        name: 'Bash',
        description: 'Beginnning to automate file tasks with Linux/Unix',
        confidence: 1,
    },
    // {
    //     type: 'scripting',
    //     name: 'Coming Soon',
    //     description: 'This is not ready to be revealed yet...',
    //     confidence: 5,
    // },
    {
        type: 'softwaredev',
        name: 'Git',
        description: 'Using Git since the beginning of my CS education',
        confidence: 3,
    },
    {
        type: 'softwaredev',
        name: 'Github',
        description: 'All my work history is outlined on Github repos',
        confidence: 4,
    },
]

export default Profs;