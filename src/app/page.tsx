'use client';

import React from 'react';
import Image from 'next/image';

import { Box, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { caveat, SECTIONS } from './utils';

import Projects from './components/Projects';
import ScrollProgress from '@/app/components/ScrollProgress';
import Section from '@/app/components/Section';
import SocialLinks from '@/app/components/SocialLinks';
import TypeWriterText from '@/app/components/TypeWriterText';

import Certificates from '@/app/components/Certificates';
import Contact from '@/app/components/Contact';
import Education from '@/app/components/Education';
import Skills from '@/app/components/Skills';

import me from '@/app/assets/images/me.jpg';
import profile from '@/app/assets/images/profile.png';

const Home: React.FC = () => {
    return ( 
        <>
          <ScrollProgress />

          <Section currentSectionName={SECTIONS.HERO} nextSectionName={SECTIONS.ABOUT}>
              <Grid columns={{ sm: "1", md: "2", initial: "1" }} align='center' gap='9' px='5'>
                  <Box className='bg-transparent max-md:hidden'>
                      <Image
                          src={profile}
                          alt='Profile'
                          className='object-cover'
                          style={{ width: '100%', height: '100%'}}
                          sizes='fill'
                      />
                  </Box>
                  
                  <Flex align="center">
                      <div className="text-right w-full">
                        <Box className={caveat.className}>
                            <span className='text-6xl max-md:text-5xl'>
                              <TypeWriterText 
                                sequence={['"Hello there!"', 1000, '"Ola!"', 1000, '"Halo!"', 1000 ]}
                                speed={50}
                              />
                            </span>
                        </Box>

                        <Box className='max-md:my-9'>
                          <Heading as='h3' className='text-7xl max-md:text-5xl'>
                            I AM 
                          </Heading>

                          <Heading className='text-fuchsia-500 text-7xl max-md:text-5xl'>
                              <TypeWriterText 
                                sequence={['CHUKWUMA MARCEL', 1000, 'A FULL-STACK DEVELOPER', 1000, 'A CODE ENTHUSIAST', 1000 , 'GOAL-ORIENTED', 1000]}
                                speed={20}
                              />
                          </Heading>
                        </Box>
                            

                        <Text size={{ initial: '3', md: '5' }} my='2'>
                          Over 6 years of professional experience in delivering high-performance software solutions.
                          Proficient in front-end and back-end development using technologies like JavaScript, Python, Node.js, and React. 
                          Strong track record of building scalable, secure web applications and optimizing systems for efficiency. 
                          Known for quick adaptation to new technologies, problem-solving skills, and delivering quality software that meets client needs on time.
                        </Text>

                        <SocialLinks />
                      </div>
                  </Flex>
              </Grid>
          </Section>
          
          <Section currentSectionName={SECTIONS.ABOUT} nextSectionName={SECTIONS.PROJECTS}>
             <Grid columns={{ lg: '3', initial: '1' }} my='9'>
                <Flex justify='center' direction='column' align='center'>
                  <Certificates />
                  
                  <Box className='relative' mt='15rem'>
                    <Skills />
                  </Box>
                </Flex>

                <Flex justify='center' direction='column' align='center' className='max-sm:my-14'>
                  <Box className='overflow-hidden rounded-full w-72 max-sm:w-56 h-full transition-all duration-700 blur-sm hover:blur-none hover:rounded-none hover:shadow-xl hover:shadow-slate-200'>
                    <Image src={me} alt='Me' sizes='fill'  className='w-full h-full object-cover' />
                  </Box>
                </Flex>
                
                <Flex justify='center' direction='column' align='center'>
                  <Education />
                </Flex>
             </Grid>
          </Section>
          
          <Section currentSectionName={SECTIONS.PROJECTS} nextSectionName={SECTIONS.CONTACT}>
            <Projects />
          </Section>

          <section id={SECTIONS.CONTACT}>
            <Contact />
          </section>
        </>
  );
}
 
export default Home;