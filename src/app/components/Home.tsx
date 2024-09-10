'use client';

import React from 'react';
import Image from 'next/image';

import { Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { caveat, SECTIONS } from '@/app/utils';
import { motion } from 'framer-motion';

import Projects from '@/app/components/Projects';
import ScrollProgress from '@/app/components/ScrollProgress';
import Section from '@/app/components/Section';
import SocialLinks from '@/app/components/SocialLinks';
import TypeWriterText from '@/app/components/TypeWriterText';

import Certificates from '@/app/components/Certificates';
import Contact from '@/app/components/Contact';
import Education from '@/app/components/Education';
import Footer from './Footer';
import NavBar from './NavBar';
import Skills from '@/app/components/Skills';

const Home: React.FC = () => {
    return ( 
        <>
          <Container size='4' maxWidth='80%'>
            <NavBar />

            <ScrollProgress />

            <main>
              <Section currentSectionName={SECTIONS.HERO} nextSectionName={SECTIONS.ABOUT}>
                  <Grid columns={{ initial: "1", lg: "2" }} align='center' gap='9' px='5'>
                      <Box className='bg-transparent h-full w-full flex justify-center max-lg:justify-end items-center'>
                          <motion.div className='hidden lg:block' whileHover={{ scale: 1.1 }}>
                            <Box className='overflow-hidden relative w-96 h-96 border-8 border-fuchsia-600 rounded-full'>
                              <Box className=' absolute w-full h-full'/>

                              <Image
                                  src='/images/profile.png'
                                  alt='Profile'
                                  className='grayscale-0 hover:grayscale transition-all duration-500 object-cover'
                                  style={{ width: '100%', height: '100%'}}
                                  sizes='fill'
                              />
                            </Box>
                          </motion.div>
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

                            <Box className='my-9'>
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
                              Proficient in front-end, mobile and back-end development using technologies like JavaScript, Python, Node.js, and React / React Native. 
                              Strong track record of building scalable, secure applications and optimizing systems for efficiency. 
                              Known for quick adaptation to new technologies, problem-solving skills, and delivering quality software that meets client needs on time.
                            </Text>

                            <SocialLinks />
                          </div>
                      </Flex>
                  </Grid>
              </Section>
              
              <Section currentSectionName={SECTIONS.ABOUT} nextSectionName={SECTIONS.PROJECTS}>
                <Grid columns={{ lg: '3', md: '2', initial: '1' }} gap='5' my='9'>
                    <Flex justify='center' direction='column' align='center'>
                      <Certificates />
                      
                      <Box className='relative' mt='15rem'>
                        <Skills />
                      </Box>
                    </Flex>

                    <Flex justify='center' direction='column' align='center' className='my-14 lg:my-0'>
                      <Box className='overflow-hidden rounded-full w-72 max-sm:w-56 h-full transition-all duration-700 blur-sm hover:blur-none hover:rounded-none hover:shadow-xl hover:shadow-slate-200'>
                        <Image src='/images/me.jpg' alt='Me' sizes='fill'  className='w-full h-full object-cover' />
                      </Box>
                    </Flex>
                    
                    <Flex justify='center' direction='column' align='center' className='md:mt-9' flexGrow={{ md: '1' }}>
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
            </main>

            <Footer />
          </Container>
        </>
  );
}
 
export default Home;