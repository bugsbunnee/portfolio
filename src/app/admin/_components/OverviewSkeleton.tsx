
import React from 'react';
import classNames from 'classnames';

import { Box, Flex, Heading, Separator, Skeleton, Text } from '@radix-ui/themes';

import useThemeStore from '@/app/store/theme';

const OverviewSkeleton = () => {
    const { theme } = useThemeStore();

    return (
        <Flex className={classNames({
            'mb-8 p-8 w-full rounded-2xl items-center': true,
            'dark-bg-light': theme === 'dark',
            'border shadow-xl': theme === 'light',
        })}>
            <Flex flexGrow='1'>
                <Skeleton className='w-12 h-12 rounded-xl' />

                <Box className='ml-4'>
                    <Heading size='1' color='gray'>
                        <Skeleton>
                            Projects
                        </Skeleton>
                    </Heading>
                    <Text size='6'>
                        <Skeleton>
                            0
                        </Skeleton>
                    </Text>
                </Box>
            </Flex>

            <Separator orientation='vertical' size='2' mx='5' />

            <Flex flexGrow='1'>
                <Skeleton className='w-12 h-12 rounded-xl' />

                <Box className='ml-4'>
                    <Heading size='1' color='gray'>
                        <Skeleton>
                            Projects
                        </Skeleton>
                    </Heading>
                    <Text size='6'>
                        <Skeleton>
                            0
                        </Skeleton>
                    </Text>
                </Box>
            </Flex>
                
            <Separator orientation='vertical' size='2' mx='5' />

            <Flex flexGrow='1'>
                <Skeleton className='w-12 h-12 rounded-xl' />

                <Box className='ml-4'>
                    <Heading size='1' color='gray'>
                        <Skeleton>
                            Projects
                        </Skeleton>
                    </Heading>
                    <Text size='6'>
                        <Skeleton>
                            0
                        </Skeleton>
                    </Text>
                </Box>
            </Flex>
            
            <Separator orientation='vertical' size='2' mx='5' />

            <Flex flexGrow='1'>
                <Skeleton className='w-12 h-12 rounded-xl' />

                <Box className='ml-4'>
                    <Heading size='1' color='gray'>
                        <Skeleton>
                            Projects
                        </Skeleton>
                    </Heading>
                    <Text size='6'>
                        <Skeleton>
                            0
                        </Skeleton>
                    </Text>
                </Box>
            </Flex>
        </Flex>
    )
};

export default OverviewSkeleton;