import React from 'react';
import { Box, Card, Flex, Heading, Skeleton, Text } from '@radix-ui/themes';

const ProfilePictureSkeleton = () => {
    return (
       <>
            <Flex flexGrow='0.5'>
                <Card className='w-96 p-8'>
                    <Skeleton className='w-full h-44 bg-zinc-700 rounded-xl flex justify-center items-center' />

                    <Box my='7'>
                        <Flex justify='between' align='center'>
                            <Heading size='5'>
                                <Skeleton>
                                    Update Profile Picture
                                </Skeleton>
                            </Heading>

                            <Skeleton width='1.5rem' height='1.5rem' />
                        </Flex>

                        <Text className='text-justify' color='gray' size='2'>
                            <Skeleton>
                                Change the default picture displayed in the hero section
                            </Skeleton>
                        </Text>
                    </Box>
                </Card>
            </Flex>

            <Flex flexGrow='0.5'>
                <Card className='w-full p-8'>
                    <Flex justify='between' align='center'>
                        <Heading size='5'>
                            <Skeleton>
                                Update Professional Summary
                            </Skeleton>
                        </Heading>

                        <Skeleton width='1.5rem' height='1.5rem' />
                    </Flex>

                    <Box my='7'>
                        <Text className='text-justify' color='gray' size='2'>
                            <Skeleton>
                                Over 6 years of professional experience in delivering high-performance software solutions. Proficient in front-end, mobile and back-end development using technologies like JavaScript, Python, Node.js, and React / React Native.                              Strong track record of building scalable, secure applications and optimizing systems for efficiency.                              Known for quick adaptation to new technologies, problem-solving skills, and delivering quality software that meets client needs on time.
                            </Skeleton>
                        </Text>
                    </Box>

                    <Flex justify='between' align='center'>
                        <Box width='3rem' height='3rem'>
                            <Skeleton width='3rem' height='3rem' className='rounded-full' />
                        </Box>

                        <Skeleton width='4rem' height='1.5rem' />
                    </Flex>
                </Card>
            </Flex>
       </>
    );
}
 
export default ProfilePictureSkeleton;