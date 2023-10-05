const socialLinks = [
    {
        id: 0,
        image: "/images/icons/instagram-icon.svg",
        altInfo: "instagram icon",
        targetLink: "https://www.instagram.com/bytebadger"
    },
    {
        id: 1,
        image: "/images/icons/x-icon.svg",
        altInfo: "x icon",
        targetLink: "https://twitter.com/teko8080"
    },
    {
        id: 2,
        image: "/images/icons/linkedin-icon.svg",
        altInfo: "linkedin icon",
        targetLink: "https://www.linkedin.com/in/atakantekoglu"
    }
]

const siteRoutes = [
    {
        id: 0,
        route: "Anasayfa",
        link: "/"
    },
    {
        id: 1,
        route: "Hakkımda",
        link: "/about-me"
    },
    {
        id: 2,
        route: "İletişim",
        link: "/contact"
    }
]

const workHistory = [
    {
        id: 0,
        company: "Param Technology",
        title: "Front-End Developer",
        date: "12/2022 – Günümüz",
        desc: "Contributed to the development of an admin dashboard using React, Redux, and RTK Query and Ant Desıgn. Worked closely with the backend team to integrate API calls and manage data flow within the application. Implemented authentication and authorization functionalities to ensure secure access for authorized personnel. Designed and implemented various data visualization components to provide meaningful insights and analytics."
    },
    {
        id: 1,
        company: "Roofstacks",
        title: "Front-End Developer",
        date: "04/2022 – 11/2022",
        desc: "Created a Simple Web3 application using React.js, integrating with Ethereum blockchain and Solidity smart contracts. Developed user interfaces that interact with the blockchain network, allowing users to perform transactions, view balances, and access decentralized applications. Moreover, leveraged the server-side rendering capabilities of Next.js to optimize page load times and improve SEO performance. Implemented responsive design techniques to ensure the landing page is visually appealing and functional across various devices and screen sizes."
    },
    {
        id: 2,
        company: "Modanisa",
        title: "Technologist",
        date: "10/2021 – 03/2022",
        desc: "Developed a Project Information Management System using Vue.js and Nuxt.js. Created a centralized platform for managing projectrelated information, including documents, tasks, and collaboration features. Developed unit tests using frameworks like Jest, Vue Test Utils and wrote test cases before writing production code. Ensured high code coverage and maintained code quality through continuous integration and automated testing. Followed agile methodologies and effectively communicated project progress to stakeholders."
    },
    {
        id: 3,
        company: "RnD Lab",
        title: "Junior Java Developer",
        date: "08/2020 – 03/2021",
        desc: "Developed a REST-based Java web service as part of a university project.Implemented endpoints for CRUD operations, utilizing the Spring framework and Hibernate for data persistence.Designed secure authentication and authorization mechanisms using JSON Web Tokens(JWT) to protect sensitive data."
    },

]
export const ComponentsContainer = {
    socialLinks,
    siteRoutes,
    workHistory
}