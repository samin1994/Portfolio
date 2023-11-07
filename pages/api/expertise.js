const expertise = [
    {
        id: 0,
        title: 'Front End Development',
        desc: 'I am a skilled Front End developer with extensive experience in building robust web applications using MongoDB, Next.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 1,
        title: 'Trello',
        desc: "As a developer, I'm proficient in Trello and Scrum methodologies. I use Trello to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
    {
        id: 2,
        title: 'Designing (UI/UX)',
        desc: 'I am proficient in using design software such as Figma and Material UI. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.',
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Artist',
        desc: "Art is my passion. I have some artistic hobbies like piano, painting, dancing and photography. I have an eye for detail and love to design and create art pieces and make things more beautiful and appealing.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
