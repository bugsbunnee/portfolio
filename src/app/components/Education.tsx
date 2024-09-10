'use client';

import React from 'react';
import Image from 'next/image';

import { Box, Heading, Text } from '@radix-ui/themes';

import useThemeStore from '@/app/store/theme';

const Education = () => {
    const { theme } = useThemeStore();

    const education = [
        {
            level: 'Bachelor of Computer & Information Sciences',
            institution: 'Monash University, Australia',
            years: '2013-2017',
        },
        {
            level: 'National Senior Certificate',
            institution: 'Trichardt School, Mozambique',
            years: '2012-2013',
        },
        {
            level: 'West African Senior School Certificate',
            institution: 'Queensland Academy',
            years: '2006-2011',
        },
    ];

    return ( 
        <>
            <Box className='relative'>
                <Image src={theme === 'dark' ? '/images/qualifications-light.png' : '/images/qualifications-dark.png'} alt='Qualifications' className='w-44 h-36 object-cover' />

                {education.map((record) => (
                    <Box key={record.level} className='text-center' mb='6'>
                        <Box>
                            <Heading className='underline leading-8' size='7'>
                                {record.level}
                            </Heading>
                            <Text>{record.institution}</Text>
                        </Box>
                        <Text className='leading-2'>{record.years}</Text>
                    </Box>
                ))}
            </Box>
        </>
    );
};
 
export default Education;