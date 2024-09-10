"use client"

import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { Box, Flex, Separator, Text } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, GearIcon, GitHubLogoIcon, HomeIcon, OpenInNewWindowIcon, ReaderIcon } from '@radix-ui/react-icons';

import useThemeStore from '@/app/store/theme';

const NavBarLink = ({ route, label, Icon }: { route: string; label: string; Icon: any }) => {
    const currentPath = usePathname();

    return (
        <Link href={route} className={classNames({
            'flex justify-start items-center rounded-full py-4 px-8 mb-8': true,
            'border border-zinc-700 bg-zinc-800': currentPath === route
        })}>
            <Icon width='14' height='14' />
            <Text className='ml-3 w-full' size='2'>{label}</Text>
            <ChevronRightIcon width='14' height='14' />
        </Link>
    )
}

const AdminNavBar = () => {
    const { theme } = useThemeStore();

    const isDarkTheme = theme === 'dark';

    return (
        <aside className={classNames({
            'h-full w-80 p-10 rounded-3xl': true,
            'dark-bg-light': isDarkTheme,
        })}>
            <Box >
                <Flex className={classNames({
                    'p-3 bg-white rounded-full border-zinc-700 border': true,
                    'dark-bg': isDarkTheme,
                })} justify='center' align='center'>
                    <GitHubLogoIcon width='18' height='18' />

                    <Box className='ml-2'>
                        <Text className='text-fuchsia-600' size='4'>CHUKWUMA </Text>
                        <Text size='4'>MARCEL</Text>
                    </Box>

                </Flex>

                <Box className='mt-16'>
                    <NavBarLink route='/admin' label='Home' Icon={HomeIcon} />
                    
                    <NavBarLink route='/projects' label='Projects' Icon={ReaderIcon} />
                    
                    <Separator className='w-full my-8' />

                    <NavBarLink route='/settings' label='Settings' Icon={GearIcon} />
                    
                    <NavBarLink route='/api/auth/signout' label='Logout' Icon={OpenInNewWindowIcon} />
                </Box>
            </Box>
        </aside>
    )
};

export default AdminNavBar;