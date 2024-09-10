'use client';

import React from 'react';

import AppSlider from '@/app/components/Slider';
import ProjectCard from '@/app/components/ProjectCard';

import { ResponsiveObject } from 'react-slick';
import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';
import { ProjectItem, STACK } from '@/app/utils';


const Projects = () => {
    const projectItems: ProjectItem[] = [
        {
            url: 'https://exactrem.vercel.app/',
            title: 'Exactrem App',
            image: '/images/exactrem.png',
            skill: ['React JS', 'Next JS', 'Firebase'],
            description: 'An interactive website for foreign exchange transfers',
            isConfidential: false,
            stack: STACK.FRONTEND_WEB
        },
        {
            url: 'https://quickcheck.ng/',
            title: 'QuickCheck App',
            image: '/images/quickcheck.png',
            skill: ['React Native', 'Redux JS', 'Django'],
            description: 'Collaborator: An app for providing entrepreneurs and businesses with affordable loans.',
            isConfidential: false,
            stack: STACK.FULLSTACK
        },
        {
            url: 'https://play.google.com/store/apps/details?id=com.lifebankdevs.nerve&hl=en',
            title: 'Nerve By LifeBank',
            image: '/images/nerve.png',
            description: 'This app allows hospitals request medical consumables and track delivery in realtime',
            skill: ['React Native'],
            isConfidential: false,
            stack: STACK.FRONTEND_MOBILE
        },
        {
            url: 'https://aabs-website.vercel.app/',
            title: 'A.A. Bridge & Spartan Website',
            image: '/images/aabs.png',
            description: 'A beautiful presentational website for a law firm with contact form email integration',
            skill: ['React JS', 'Next JS'],
            isConfidential: false,
            stack: STACK.FRONTEND_WEB
        },
        {
            url: 'https://play.google.com/store/apps/details?id=com.lifebankdevs.dispatchmobile&hl=en',
            title: 'Dispatch App',
            image: '/images/dispatch.png',
            skill: ['React Native', 'Redux JS', 'Firebase'],
            description: 'A mobile app for dispatch riders that allows them to keep track of their inventory and productivity',
            isConfidential: false,
            stack: STACK.FRONTEND_MOBILE
        },
        {
            url: 'https://www.lifebankcares.com/',
            title: 'LifeBank Official Website',
            image: '/images/lifebank.png',
            description: 'The official website for LifeBank',
            skill: ['Angular JS', 'TypeScript'],
            isConfidential: false,
            stack: STACK.FRONTEND_WEB,
        },
        {
            url: 'https://rsidms.com/',
            title: 'RSIDMS',
            image: '/images/rsidms.png',
            description: 'A robust application for inspection report delivery',
            skill: ['React JS', 'Redux JS', 'TypeScript'],
            isConfidential: true,
            stack: STACK.FULLSTACK
        },
        {
            url: 'https://order.mamakabowls.com/',
            title: 'HRMS',
            image: '/images/hrms.png',
            skill: ['React JS', 'TypeScript', 'Express JS'],
            isConfidential: false,
            description: 'A HR management system that allows for Human Resource management functionality',
            stack: STACK.FRONTEND_WEB
        },
        {
            url: 'https://one.lifebank.ng/',
            title: 'One Hospital',
            image: '/images/one.png',
            description: 'A CRM for tracking onboarding of hospitals and timeline',
            skill: ['React JS', 'TypeScript'],
            isConfidential: true,
            stack: STACK.FRONTEND_WEB
        },
        {
            url: 'https://quip.lifebank.ng/',
            title: 'QUIP',
            image: '/images/quip.png',
            description: 'A platform where hospitals can purchase medical equipment and request BME services',
            skill: ['React JS', 'React Native', 'TypeScript'],
            isConfidential: true,
            stack: STACK.FULLSTACK
        },
        {
            url: 'https://order.mamakabowls.com/',
            title: 'Mamaka Bowls',
            image: '/images/mamaka.png',
            skill: ['React JS'],
            description: 'A web app that allows customers to place orders for delicacies',
            isConfidential: false,
            stack: STACK.FRONTEND_WEB
        },
        {
            url: 'https://order.mamakabowls.com/',
            title: 'Done With It',
            image: '/images/donewithit.jpeg',
            skill: ['React Native', 'Express JS'],
            description: 'A mobile app for selling used items',
            isConfidential: false,
            stack: STACK.FULLSTACK
        },
    ];

    const responsive: ResponsiveObject[] = [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 1,
          }
        },
    ];
    
    return ( 
        <Flex direction={{ md: 'row', initial: 'column' }} className='h-72' gap='6'>
            <Box className='text-left max-lg:text-center' width={{ md: '23rem', initial: '100%' }}>
                <Box className='max-lg:flex max-lg:flex-column max-lg:justify-center'>
                    <Box className='bg-fuchsia-600 p-2 rounded-sm h-min w-max mb-4 '>
                        <Heading>Featured Projects</Heading>
                    </Box>
                </Box>
                <Text>With over {projectItems.length * 2} projects in the catalog, here are some of my most memorable ones</Text>
            </Box>

            <Flex flexGrow='1'>
                <Container maxWidth={{ initial: '18rem', sm: '30rem', md: '45rem', lg: '50rem', xl: '70rem' }}>
                    <AppSlider responsive={responsive} slidesToShow={3}>
                        {projectItems.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </AppSlider>
                </Container>
            </Flex> 
        </Flex> 
     );
}
 
export default Projects;