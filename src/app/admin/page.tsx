"use client";

import React, { Suspense } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';

import { useSession } from 'next-auth/react';
import { CalendarIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Box, Flex, Heading, IconButton, Text } from '@radix-ui/themes';

import Certificates from '@/app/components/Certificates';
import Chart from '@/app/admin/_components/Chart';
import MessagesSkeleton from '@/app/admin/_components/MessagesSkeleton';
import OverviewSkeleton from '@/app/admin/_components/OverviewSkeleton';
import ProfilePicture from './_components/ProfilePicture';

import useThemeStore from '@/app/store/theme';

const Messages = dynamic(() => import('@/app/admin/_components/Messages'), { ssr: false, loading: () => <MessagesSkeleton /> })
const Overview = dynamic(() => import('@/app/admin/_components/Overview'), { ssr: false, loading: () => <OverviewSkeleton /> })

const AdminHome = () => {
    const { theme, toggleTheme } = useThemeStore();
    const { data: session } = useSession();

    const isDarkTheme = theme === 'dark';

    const containerClassName = classNames({
        'mb-8 p-8 w-full rounded-2xl items-center': true,
        'dark-bg-light': isDarkTheme,
        'border shadow-xl': !isDarkTheme,
    });

    return ( 
        <Box className='w-full'>
            <Flex justify='between' align='center'>
                <Box>
                    <Heading as='h1' size='6'>Dashboard</Heading>
                    <Text size='2'>Information about your portfolio</Text>
                </Box>

                <Flex justify='center' align='center' >
                    <Flex 
                        justify='center' 
                        align='center' 
                        className={classNames({
                          'py-2 px-4 rounded-full': true,
                          'dark-bg-light': isDarkTheme,
                          'border shadow-xl': !isDarkTheme,
                        })}
                      >
                        <CalendarIcon width='18' height='18' />
                        <Text className='ml-3' size='2'>Last Login: {dayjs(session?.user?.lastLogin).format('DD MMMM, YYYY HH:mm:ss') }</Text>
                    </Flex>

                    <IconButton color='gray' onClick={toggleTheme} size='2' radius='full' className='ml-4' variant='soft'>
                      {isDarkTheme ? <MoonIcon /> : <SunIcon />}
                    </IconButton>
                </Flex>
            </Flex>

            <Flex gap='6' className='my-12'>
              <Flex flexGrow='1' direction='column'>
                  <Overview />

                <Box className={containerClassName}>
                  <Chart />
                </Box>

                <Flex className={containerClassName} gap='5'>
                    <ProfilePicture />
                </Flex>
              </Flex>

              <Flex className='min-w-96' direction='column' gap='6'>
                  <Box height='50rem' className={classNames({
                      'p-8 w-full overflow-scroll rounded-2xl items-center': true,
                      'dark-bg-light': isDarkTheme,
                      'border shadow-xl': !isDarkTheme,
                  })}>
                    <Heading size='3'>Messages</Heading>

                    <Messages />
                  </Box>

                  <Box className='flex justify-center items-center'>
                    <Certificates displayLabel={false} />
                  </Box>
              </Flex>
            </Flex>
        </Box>
     );
};
 
export default AdminHome;