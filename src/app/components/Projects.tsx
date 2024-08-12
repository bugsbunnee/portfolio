'use client';

import React from 'react';

import AppSlider from '@/app/components/Slider';
import ProjectCard from '@/app/components/ProjectCard';

import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';
import { ProjectItem } from '../utils';

import aabs from '@/app/assets/images/aabs.png';
import nerve from '@/app/assets/images/nerve.png';
import lifebank from '@/app/assets/images/lifebank.png';
import hrms from '@/app/assets/images/hrms.png';
import rsidms from '@/app/assets/images/rsidms.png';
import one from '@/app/assets/images/one.png';
import dispatch from '@/app/assets/images/dispatch.png';
import mamaka from '@/app/assets/images/mamaka.png';
import quip from '@/app/assets/images/quip.png';
import donewithit from '@/app/assets/images/donewithit.jpeg';

const Projects = () => {
    const projectItems: ProjectItem[] = [
        {
            url: 'https://play.google.com/store/apps/details?id=com.lifebankdevs.nerve&hl=en',
            title: 'Nerve By LifeBank',
            image: nerve,
            skill: ['React Native'],
            isConfidential: false,
            stack: 'FRONT-END'
        },
        {
            url: 'https://aabs-website.vercel.app/',
            title: 'A.A. Bridge & Spartan Website',
            image: aabs,
            skill: ['React JS', 'Next JS'],
            isConfidential: false,
            stack: 'FRONT-END'
        },
        {
            url: 'https://play.google.com/store/apps/details?id=com.lifebankdevs.dispatchmobile&hl=en',
            title: 'Dispatch App',
            image: dispatch,
            skill: ['React Native', 'Redux JS'],
            isConfidential: false,
            stack: 'MOBILE'
        },
        {
            url: 'https://www.lifebankcares.com/',
            title: 'LifeBank Official Website',
            image: lifebank,
            skill: ['Angular JS', 'TypeScript'],
            isConfidential: false,
            stack: 'FRONT-END'
        },
        {
            url: 'https://rsidms.com/',
            title: 'RSIDMS',
            image: rsidms,
            skill: ['Angular JS', 'TypeScript'],
            isConfidential: true,
            stack: 'FULL-STACK'
        },
        {
            url: 'https://rsidms.com/',
            title: 'HRMS',
            image: hrms,
            skill: ['React JS', 'TypeScript', 'Express JS'],
            isConfidential: false,
            stack: 'FULL-STACK'
        },
        {
            url: 'https://one.lifebank.ng/',
            title: 'One Hospital',
            image: one,
            skill: ['React JS', 'TypeScript'],
            isConfidential: true,
            stack: 'FRONT-END'
        },
        {
            url: 'https://quip.lifebank.ng/',
            title: 'QUIP',
            image: quip,
            skill: ['React JS', 'React Native', 'TypeScript'],
            isConfidential: false,
            stack: 'FRONT-END'
        },
        {
            url: 'https://order.mamakabowls.com/',
            title: 'Mamaka Bowls',
            image: mamaka,
            skill: ['React JS'],
            isConfidential: false,
            stack: 'FRONT-END'
        },
        {
            url: '',
            title: 'Done With It',
            image: donewithit,
            skill: ['React Native', 'Express JS'],
            isConfidential: false,
            stack: 'FULL-STACK'
        }
    ];

    return ( 
        <Flex direction={{ md: 'row', initial: 'column' }} className='h-72' gap='6'>
            <Box width={{ md: '23rem', initial: '100%' }}>
                <Box className='bg-fuchsia-600 p-2 rounded-sm h-min w-max mb-4'>
                    <Heading>Featured Projects</Heading>
                </Box>
                <Text>With over {projectItems.length * 2} projects in the catalog, here are some of my most memorable ones</Text>
            </Box>

            <Flex flexGrow='1'>
                <Container maxWidth={{ initial: '18rem', sm: '30rem', md: '40rem', lg: '50rem', xl: '70rem' }}>
                    <AppSlider slidesToShow={3}>
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