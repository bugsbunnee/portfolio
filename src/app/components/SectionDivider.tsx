import React, { useEffect } from 'react';
import Image from 'next/image';

import classNames from 'classnames';

import { Flex } from '@radix-ui/themes';
import { useAnimationControls } from 'framer-motion';
import { motion } from 'framer-motion';

import useThemeStore from '@/app/store/theme';

import flagDark from '@/app/assets/images/flag-dark.png';
import flagLight from '@/app/assets/images/flag-light.png';
import carDark from '@/app/assets/images/car-dark.png';
import carLight from '@/app/assets/images/car-light.png';


interface Props {
    isAnimating: boolean;
}

const SectionDivider: React.FC<Props> = ({ isAnimating }) => {
    const themeStore = useThemeStore();
    const controls = useAnimationControls();

    const isDarkTheme = themeStore.theme === 'dark';
    const DURATION = 1;

    useEffect(() => {
        if (isAnimating) {
            controls.start({
                x: "-940%",
                transition: { duration: DURATION },
            });

            const timeout = setTimeout(() => {
                controls.start({
                    x: "0%",
                    transition: { duration: DURATION },
                });
            }, (DURATION + 2) * 1_000);

            return () => {
                clearTimeout(timeout);
            }
        }
    }, [isAnimating]);

    return ( 
        <Flex 
            justify='center'
            className={classNames({
                'border-b my-6 w-full': true,
                'border-gray-900': !isDarkTheme,
                'border-white': isDarkTheme,
            })} 
        >
            <Image src={isDarkTheme ? flagLight : flagDark} alt='Flag' className='w-6 h-66 object-contain' />
            <Flex flexGrow='1' justify='end'>
                <motion.div animate={controls}>
                    <Image src={isDarkTheme ? carLight : carDark} alt='Car' className='w-32 h-6 object-contain' />
                </motion.div>
            </Flex>
        </Flex>
    );
};
 
export default SectionDivider;
