const axios = require("axios");

const aabs =  './src/app/assets/images/aabs.png';
const nerve =  './src/app/assets/images/nerve.png';
const lifebank =  './src/app/assets/images/lifebank.png';
const hrms =  './src/app/assets/images/hrms.png';
const rsidms =  './src/app/assets/images/rsidms.png';
const one =  './src/app/assets/images/one.png';
const dispatch =  './src/app/assets/images/dispatch.png';
const mamaka =  './src/app/assets/images/mamaka.png';
const quip =  './src/app/assets/images/quip.png';
const donewithit =  './src/app/assets/images/donewithit.jpeg';

async function loadSkills() {
    const skills = [
        {
          title: 'REACT JS',
          position: [-0.5, -0.5, 0],
        },
        {
          title: 'DJANGO JS',
          position: [1.1, 0, 0],
        },
        {
          title: 'JS & TS',
          position: [-1.5, 1, 0],
        },
        {
          title: 'EXPRESS JS',
          position: [-3.5, 1, 0],
        },
        {
          title: 'REACT NATIVE',
          position: [-4.5, 1, 0],
        },
        {
          title: 'REDUX JS',
          position: [-1.5, 0.5, 0],
        }
    ];

    for (const skill of skills) {
        await axios.post('http://localhost:4000/api/skills', JSON.stringify({ skillName: skill.title }));
    }
}

async function loadProjects() {
    const projectItems = [
        {
            url: 'https://play.google.com/store/apps/details?id=com.lifebankdevs.nerve&hl=en',
            title: 'Nerve By LifeBank',
            image: nerve,
            description: 'This app allows hospitals request medical consumables and track delivery in realtime',
            skill: ['clzro7ely000dq5fb1kxqvbva'],
            isConfidential: false,
            stack: 'FRONTEND'
        },
        {
            url: 'https://aabs-website.vercel.app/',
            title: 'A.A. Bridge & Spartan Website',
            image: aabs,
            description: 'A beautiful presentational website for a law firm with contact form email integration',
            skill: ['clzro7ely000dq5fb1kxqvbva', 'clzro7eqj000iq5fb76ag9ski'],
            isConfidential: false,
            stack: 'FRONTEND'
        },
        {
            url: 'https://play.google.com/store/apps/details?id=com.lifebankdevs.dispatchmobile&hl=en',
            title: 'Dispatch App',
            image: dispatch,
            skill: ['clzro7eq2000hq5fb2iug5h2l', 'clzro7eqj000iq5fb76ag9ski'],
            description: 'A mobile app for dispatch riders that allows them to keep track of their inventory and productivity',
            isConfidential: false,
            stack: 'MOBILE'
        },
        {
            url: 'https://www.lifebankcares.com/',
            title: 'LifeBank Official Website',
            image: lifebank,
            description: 'The official website for LifeBank',
            skill: ['clzro7eqj000iq5fb76ag9mqw', 'clzro7eoj000fq5fbm0jd23hw'],
            isConfidential: false,
            stack: 'FRONTEND'
        },
        {
            url: 'https://rsidms.com/',
            title: 'RSIDMS',
            image: rsidms,
            description: 'A robust application for inspection report delivery',
            skill: ['clzro7ely000dq5fb1kxqvbva', 'clzro7epk000gq5fbp7v4wubw', 'clzro7eoj000fq5fbm0jd23hw'],
            isConfidential: true,
            stack: 'FULLSTACK'
        },
        {
            url: 'https://rsidms.com/',
            title: 'HRMS',
            image: hrms,
            skill: ['clzro7ely000dq5fb1kxqvbva', 'clzro7eoj000fq5fbm0jd23hw', 'clzro7epk000gq5fbp7v4wubw'],
            isConfidential: false,
            description: 'A HR management system that allows for Human Resource management functionality',
            stack: 'FULLSTACK'
        },
        {
            url: 'https://one.lifebank.ng/',
            title: 'One Hospital',
            image: one,
            description: 'A CRM for tracking onboarding of hospitals and timeline',
            skill: ['clzro7ely000dq5fb1kxqvbva', 'clzro7eoj000fq5fbm0jd23hw'],
            isConfidential: true,
            stack: 'FRONTEND'
        },
        {
            url: 'https://quip.lifebank.ng/',
            title: 'QUIP',
            image: quip,
            description: 'A platform where hospitals can purchase medical equipment and request BME services',
            skill: ['clzro7ely000dq5fb1kxqvbva', 'clzro7eq2000hq5fb2iug5h2l', 'clzro7eoj000fq5fbm0jd23hw'],
            isConfidential: true,
            stack: 'FRONTEND'
        },
        {
            url: 'https://order.mamakabowls.com/',
            title: 'Mamaka Bowls',
            image: mamaka,
            skill: ['clzro7ely000dq5fb1kxqvbva'],
            description: 'A web app that allows customers to place orders for delicacies',
            isConfidential: false,
            stack: 'FRONTEND'
        },
        {
            url: 'https://quip.lifebank.ng/',
            title: 'Done With It',
            image: donewithit,
            skill: ['clzro7eq2000hq5fb2iug5h2l', 'clzro7epk000gq5fbp7v4wubw'],
            description: 'A mobile app for selling used items',
            isConfidential: false,
            stack: 'FULLSTACK'
        }
    ];

    for (const project of projectItems.slice(0, 1)) {
        await axios.post('http://localhost:4000/api/projects', JSON.stringify({ 
            url: project.url,
            title: project.title,
            image: project.image,
            description: project.description,
            isConfidential: project.isConfidential,
            stack: project.stack,
            authorId: 'clzrb26ho0000tvdwhdtp961y',
            skills: project.skill,
        }));
    }
}

loadProjects();