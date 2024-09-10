
import React from 'react';
import classNames from 'classnames';

import { BookmarkFilledIcon, EnvelopeClosedIcon, ReaderIcon, StarIcon } from '@radix-ui/react-icons';
import { Box, Flex, Heading, Separator, Text } from '@radix-ui/themes';

import useThemeStore from '@/app/store/theme';

const Overview = async () => {
    const { theme } = useThemeStore();

    const response = await fetch('http://localhost:4000/api/admin/overview');
    const overview = await response.json();

    return (
        <Flex className={classNames({
            'mb-8 p-8 w-full rounded-2xl items-center': true,
            'dark-bg-light': theme === 'dark',
            'border shadow-xl': theme === 'light',
        })}>
            <Flex flexGrow='1'>
                <Box className='w-12 h-12 rounded-xl flex justify-center items-center bg-orange-600/[.1]'>
                    <ReaderIcon width='16' height='16' color='orange' />
                </Box>

                <Box className='ml-4'>
                    <Heading size='1' color='gray'>Projects</Heading>
                    <Text size='6'>{overview.totalProjects}</Text>
                </Box>
            </Flex>

            <Separator orientation='vertical' size='2' mx='5' />

            <Flex flexGrow='1'>
                <Box className='w-12 h-12 rounded-xl flex justify-center items-center bg-purple-600/[.1]'>
                    <BookmarkFilledIcon width='16' height='16' color='purple' />
                </Box>

                <Box className='ml-4'>
                    <Heading size='1' color='gray'>Certifications</Heading>
                    <Text size='6'>{overview.totalCertifications}</Text>
                </Box>
            </Flex>
                
            <Separator orientation='vertical' size='2' mx='5' />

            <Flex flexGrow='1'>
                <Box className='w-12 h-12 rounded-xl flex justify-center items-center bg-cyan-600/[.1]'>
                    <StarIcon width='16' height='16' color='cyan' />
                </Box>

                <Box className='ml-4'>
                    <Heading size='1' color='gray'>Skills</Heading>
                    <Text size='6'>{overview.totalSkills}</Text>
                </Box>
            </Flex>
            
            <Separator orientation='vertical' size='2' mx='5' />

            <Flex flexGrow='1'>
                <Box className='w-12 h-12 rounded-xl flex justify-center items-center bg-red-600/[.1]'>
                <EnvelopeClosedIcon width='16' height='16' color='red' />
                </Box>

                <Box className='ml-4'>
                    <Heading size='1' color='gray'>Messages</Heading>
                    <Text size='6'>{overview.totalMessages}</Text>
                </Box>
            </Flex>
        </Flex>
    )
};

export default Overview;