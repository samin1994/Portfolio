const portfolio = [
    {
        id: 0,
        projectName: "Simple Blog (Github Link)",
        url: "https://github.com/samin1994/my-website",
        image: "projects/blog.png",
        projectDetail: "This project is a simple blog website that has two themes and uses data on mongodb and local data on nextjs app api",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "nodeJS"
            },
            {
                tech: "MongoDB"
            }
        ]
    },
    {
        id: 1,
        projectName: "Dr Safdarian Dermatology Clinic (Github Link)",
        url: "https://github.com/samin1994/Dermatology_Clinic",
        image: "projects/dermatology_clinic.png",
        projectDetail: "DEsigned and started developing a full stack website for Dr Negin Safdarian Dermatology Clinic using NextJS",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "MUI"
            },
            {
                tech: "Figma"
            },
        ]
    },
    {
        id: 2,
        projectName: "Introduction Card",
        url: "/#",
        image: "projects/introduction_card.png",
        projectDetail: "Made this simple introduction card for myself when I first started using figma",
        technologiesUsed: [
            {
                tech: "Figma"
            },
        ]
    },
    {
        id: 3,
        projectName: "Fruits In The Bowl",
        url: "/#",
        image: "projects/watercolor_1.jpg",
        projectDetail: "One of my favorite paintings with good shadow technique and beautiful colors",
        technologiesUsed: [
            {
                tech: "Water Color"
            }
        ]
    },
    {
        id: 4,
        projectName: "Vegetables On The Plate",
        url: "/#",
        image: "projects/watercolor_3.jpg",
        projectDetail: "beautiful radishes in a plate. I love the harmony of their color.",
        technologiesUsed: [
            {
                tech: "Water Color"
            }
        ]
    },
    {
        id: 5,
        projectName: "Breakfast Table",
        url: "/#",
        image: "projects/watercolor_2.jpg",
        projectDetail: "Simple yet beautiful breakfast table with bright colors. It gives me good vibes.",
        technologiesUsed: [
            {
                tech: "Water Color"
            }
        ]
    },
    {
        id: 6,
        projectName: "Blue Dreams",
        url: "/#",
        image: "projects/watercolor_4.jpg",
        projectDetail: "Dreamy blue flowers with water on water technique and salt on it",
        technologiesUsed: [
            {
                tech: "Water Color"
            }
        ]
    },
    {
        id: 7,
        projectName: "Fruit Market",
        url: "/#",
        image: "projects/watercolor_5.jpg",
        projectDetail: "lovely fresh and colorful fruits in the baskets. They look so pretty and yummy :)",
        technologiesUsed: [
            {
                tech: "Water Color"
            }
        ]
    },
    {
        id: 8,
        projectName: "Vegetables",
        url: "/#",
        image: "projects/watercolor_6.jpg",
        projectDetail: "A good combination of some vegetables placed in a good position.",
        technologiesUsed: [
            {
                tech: "Water Color"
            }
        ]
    },
    {
        id: 9,
        projectName: "Flower",
        url: "/#",
        image: "projects/watercolor_7.jpg",
        projectDetail: "mysterious beautiful flower that looks very artistic and complicated.",
        technologiesUsed: [
            {
                tech: "Water Color"
            }
        ]
    },
    
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
