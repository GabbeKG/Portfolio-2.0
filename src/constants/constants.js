import  astro  from '../assets/astro.png'
import  html  from '../assets/HTML5.png'
import  css  from '../assets/css.png'
import  javaScript  from '../assets/JavaScript.png'
import  csharp  from '../assets/csharp.png'
import  mongodb  from '../assets/mongodb.svg'
import  react  from '../assets/React.png'
import  mysql  from '../assets/mysql.svg'
import  threejs  from '../assets/ThreeJS.png'

export const tech = [
    {
        name: 'Html 5',
        icon: html
    },
    {
        name: 'CSS',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javaScript,
    },
    {
        name: 'React',
        icon: react,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'MySQL2',
        icon: mysql,
    },
    {
        name: 'Astro.JS',
        icon: astro,
    },
    {
        name: 'C#',
        icon: csharp
    }
]

export const navItemsEng = [
    {
        id: "welcome",
        title: "Welcome"
    },
    {
        id: "experience",
        title: "Experience"
    },
    {
        id: "skills",
        title: "Skills"
    },
    {
        id: "showcase",
        title: "Showcase"
    },
    {
        id: "contact",
        title: "Contact"
    }
]

export const experiences = [
    {
        id: 1,
        title: 'Frontend developer React, Vocational School of Borås',
        location:'Borås, Sweden',
        date: '2022 - 2024',
        desc:'Enrolled at the Vocational School of Borås for the educational program Frontend developer React. \nThe curriculum focused on the use of JavaScript and the available frameworks and libraries.\nBut as bonus we also learned backedn with node and connecting to databases like mongoDB and MySQL.\nEstimated graduation 14th June 2024.'
    },
    {
        id: 2,
        title: 'Internship - IT consultant, Consid',
        location:'Borås, Sweden',
        date: '2023 - 2024 (5 months)',
        desc:'I did a combined 5 month intership as part of my Frontend developer React curricullum. \nI was involved in a few projects for one of their customers. Most of my task involved evaluating technologies and supporting their senior developers. Another part of my tasks was creating some UX design suggestions using Figma to then evaluate if it was feasible to implement the design on Umbraco CMS.        Most of the technologies i learned and/or used was:\nC# JavaScript Vue3 Umbraco CMS Figma WebGL Three.JS Shopify'
    },
    {
        id: 3,
        title: 'Webdesigner, Falköga',
        location:'Stockholm(remote), Sweden',
        date: '2021 - 2021(~6 months)',
        desc:'Was hired as a webdesigner by the accounting firm Falköga, to overlook and maintain their wordpress site.\nI also created some minor content using Adobe Photoshop.'
    },
    {
        id: 4,
        title: 'System developer .NET, Vocational School of Borås',
        location:'Borås, Sweden',
        date: '2019 - 2021',
        desc:'Enrolled at the Vocational School of borås for educational program System developer .NET. \nThe program focused on system development using C# and the .NET framework.\nThe main focus was backend development but we did also get to learn a bit of web development using Node.JS and React.\nAnd as a bonus we got the opportunity to create a small game of our choice in Unity with C#.'
    },
    {
        id: 5,
        title: 'Internship - Developer, Ngine AB',
        location: 'Borås, Sweden',
        date: '2020 - 2021 (5 months)',
        desc:'I got the opprtunity to do my internship as part of the System developer .NET curriculum at the digital marketing company Ngine. \nHere I learned and also got certified as a Hubspot CMS Developer. I was tasked with adding content and functions to their website that was created with Hubspot CMS.\n I was also tasked with a small in-house project for a proof of concept to transfer and create new customer profiles on their partners CRM system. Unfortunately my time there ended before i could complete it.'
    }
]

export const projects = [
    {
        id: 1,
        title: "State of JavaScript",
        description: "This was quite a fun project that we were assigned to choose and learn a JavaScript Framework to then use it to replicate the website 'State of JavaScript'.\nI decided to use Astro.JS which i discovered was a great framework for making static sites and rather easy to use and learn.\nWe were provided with a data source for the statistics and left to recreate the website with our chosen framework and also to make it responsive.",
        techstack: [
            "Astro.js", "Javascript", "CSS", "Html"
        ],
        url:"https://fascinating-rolypoly-779f41.netlify.app/retention/"

    },
    {
        id: 2,
        title: "Evil Scientist DB",
        description: "One of our very first assignments. The assignment focused on DOM manipulation. We were tasked with creating a small website to create and store 'Evil scientists'.\nAs an old World of Warcraft player i took some liberties to get creative.\nI added error handling that plays a small sound clip of a raid encounter during the Icecrown Citadel raid. Visit the site to check it out!",
        techstack: [
            "Html", "CSS", "JavaScript"
        ],
        url:"https://evil-scientist-db.vercel.app/"

    },
    {
        id: 3,
        title: "Dungeons & Dragons: Character creator(5th Edition)",
        description: "For this assignment the challenge was to find an API and use it in an application. For this i used D&D 5e SRD API. The project was and remains unfinished due to the realization that the API was lacking in some areas to properly follow the ruleset with the official D&D character sheet 5th Edition.\nAlthough It's unfinished I do plan to revisit this project. This was the very first project that i got to use TypeScript but most of the challenge was understanding how you create a character for a D&D session.",
        techstack: [
         "TypeScript", "CSS", "Html"   
        ],
        url:"https://heroic-heliotrope-a8d5b6.netlify.app/"

    }
]