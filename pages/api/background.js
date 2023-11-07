const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Amirkabir University of Technology',
                degree: 'BS, Information Technology',
                detail: "Bachelor's Degree in Information Technology Engineering from Amirkabir University in Tehran.",
                year: '2012-2019'
            },
            {
                id: 1,
                title: 'Kherad High School',
                degree: 'Mathematics and Physics Diploma',
                detail: "Completed Mathematics and Physics Diploma from Kherad High School.",
                year: '2007-2011'
            }
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Antcoders',
                role: 'Junior Frontend Developer',
                url: 'https://www.antcoders.ir/',
                desc: 'Developed an E-commerce website using NextJS(Full Material UI v5) for a german customer.',
                year: '06/2021 - 08/2021',
                location: 'Tehran, Iran'
            },
            {
                id: 2,
                title: 'Dexis Co',
                role: 'Junior Frontend Developer',
                url: 'dexis.io',
                desc: 'Developing a code for national exhibition website and helped to update an admin panel for a pharmacy company.',
                year: '01/2021 - 04/2021',
                location: 'Tehran, Iran'
            },
            {
                id: 3,
                title: 'TOD Co',
                role: 'PHP Developer Intern',
                url: 'https://www.tod.ir/',
                desc: "I got familiar with Zend Framework and learned how to debug and write test scenarios for different modules.",
                year: '11/2016 - 04/2017',
                location: 'Tehran, Iran'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
