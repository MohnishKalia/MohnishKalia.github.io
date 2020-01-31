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
        type: 'scripting',
        name: 'Python',
        description: 'Starting with web scrapers, file manipulation, algorithms',
        confidence: 2,
    },
    {
        type: 'scripting',
        name: 'Coming Soon',
        description: 'This is not ready to be revealed yet...',
        confidence: 5,
    },
]

export default Profs;