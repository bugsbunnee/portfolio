import React, { useEffect } from 'react';
import Image from 'next/image';

import classNames from 'classnames';

import { Flex } from '@radix-ui/themes';
import { useAnimationControls } from 'framer-motion';
import { motion } from 'framer-motion';

import useThemeStore from '@/app/store/theme';

interface Props {
    isAnimating: boolean;
    onEndAnimation: () => void;
}

const SectionDivider: React.FC<Props> = ({ isAnimating, onEndAnimation }) => {
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

                onEndAnimation();
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
            <Image src={isDarkTheme ? '/images/flag-light.png' : '/images/flag-dark.png'} alt='Flag' className='w-6 h-66 object-contain' />
            <Flex flexGrow='1' justify='end'>
                <motion.div animate={controls}>
                    <Image src={isDarkTheme ? '/images/car-light.png' : '/images/car-dark.png'} alt='Car' className='w-32 h-6 object-contain' />
                </motion.div>
            </Flex>
        </Flex>
    );
};
 
export default SectionDivider;
