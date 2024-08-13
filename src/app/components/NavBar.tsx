"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Box, Button, Flex } from '@radix-ui/themes';
import { handleScrollToNextSection, SECTIONS } from '../utils';

import MobileNavBar from './MobileNavBar';

import classNames from 'classnames';
import routes from '@/app/utils/routes';

import useThemeStore from '@/app/store/theme';

import darkMode from '@/app/assets/images/dark-mode.png';
import lightMode from '@/app/assets/images/light-mode.png';

const NavLinks = () => {
    const currentPath = usePathname();

    const links = [
        { label: 'Home', route: SECTIONS.HERO },
        { label: 'About', route: SECTIONS.ABOUT },
        { label: 'Projects', route: SECTIONS.PROJECTS },
        { label: 'Contact Me', route: SECTIONS.CONTACT },
    ];

    return (
        <ul className="flex space-x-6">
            {links.map((link) => (
                <li key={link.route}>    
                    <Button 
                        variant='ghost'
                        color='gray'
                        onClick={() => handleScrollToNextSection(link.route)} 
                        className={classNames({ 'nav-link': true, 'text-2xl': true, 'text-fuchsia-500': link.route === currentPath  })}
                    >
                        {link.label}
                    </Button>
                </li>
            ))}
        </ul>
    )
};

const NavBar = () => {
    const themeStore = useThemeStore();
    const isDark = themeStore.theme === 'dark';

    return ( 
        <nav className={classNames({
            'sticky top-0 z-50 shadow-[0px_5px_6px_-5px_rgba(179,54,255,0.5)] px-16': true,
            'dark-bg': isDark,
            'light-bg': !isDark
        })}>
            <header className='relative'>
                <Flex justify='between' height="5rem" align='center' className={classNames({
                    'z-50': true,
                    'dark-bg': isDark,
                    'light-bg': !isDark
                })}>
                    <Link href={routes.HOME} className='text-fuchsia-600 text-2xl'>
                        Welcome!
                    </Link>

                    <Flex gap="3">
                        <Box as='div' className='block max-md:hidden'>
                            <NavLinks />
                        </Box>
                        
                        <Box as='div' className='hidden max-md:block'>
                            <MobileNavBar />
                        </Box>
                    </Flex>
                </Flex>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Box position='absolute' left={{ xs: '5%', sm: '5%', md: '15%', lg: '36%' }} className='z-0'>
                        <Button 
                            className='bg-transparent cursor-pointer' 
                            variant='ghost'
                            onClick={themeStore.toggleTheme}
                        >
                            <Image
                                src={isDark ? darkMode : lightMode}
                                alt="Toggle"
                                className='dark-theme object-cover h-80 w-auto max-sm:h-36 md:h-48'
                            />
                        </Button>
                    </Box>
                </motion.div>
            </header>
        </nav>
     );
};
 
export default NavBar;