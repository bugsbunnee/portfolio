'use client';

import React from 'react';
import Image from 'next/image';

import { Box } from '@radix-ui/themes';
import { motion } from 'framer-motion';

const HomeLoading = () => {
    return ( 
        <Box className='w-full h-svh flex justify-center items-center'>
            <motion.div
                animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [1, 1.3, 1], 
                    transition: {
                        repeat: Infinity,
                        repeatType: "reverse",
                    },
                }}
                transition={{
                    duration: 10000,
                    repeat: Infinity,
                    delay: 1000,
                    repeatDelay: 2,
                    ease: "easeOut"
                }}
            >
                <Box className='overflow-hidden relative w-32 h-32 border-8 border-fuchsia-600 rounded-full'>
                    <Box className=' absolute w-full h-full'/>

                    <Image
                        src='/images/profile.png'
                        alt='Profile'
                        className='transition-all duration-500 object-cover'
                        style={{ width: '100%', height: '100%'}}
                        sizes='fill'
                    />
                </Box>
            </motion.div>
        </Box>
     );
}
 
export default HomeLoading;