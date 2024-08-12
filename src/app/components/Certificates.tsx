'use client';

import React from 'react';
import Image from 'next/image';

import classNames from 'classnames';

import { Box } from '@radix-ui/themes';

import AppSlider from '@/app/components/Slider';
import useThemeStore from '@/app/store/theme';

import darkMode from '@/app/assets/images/certificates-light.png';
import lightMode from '@/app/assets/images/certificates-dark.png';

import dataStructures from '@/app/assets/certificates/data-structures.jpg';
import django from '@/app/assets/certificates/django.jpg';
import javascriptBasics from '@/app/assets/certificates/javascript-basics.jpg';
import python from '@/app/assets/certificates/python.jpg'
import react from '@/app/assets/certificates/react-18.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Certificates() {
    const { theme } = useThemeStore();

    const certificates = [
        {
            image: python,
            title: 'Python',
        },
        {
            image: dataStructures,
            title: 'Data Structures',
        },
        {
            image: django,
            title: 'Django',
        },
        {
            image: javascriptBasics,
            title: 'Javascript Basics',
        },
        {
            image: react,
            title: 'React',
        },
    ];

    return ( 
        <Box width='17.5rem' height='11.75rem' className='relative'>
            <Image src={theme === 'dark' ? lightMode : darkMode} alt='Certificated' className='w-44 h-36 object-cover ' />

            <AppSlider slidesToShow={1}>
                {certificates.map((certificate) => (
                    <Box 
                        as='div' 
                        key={certificate.title} 
                        overflow='hidden'
                        className={classNames({
                            'bg-white rounded-sm h-56': true,
                            'border-4 border-solid border-gray-900 bg-white': theme === 'light',
                        })}
                    >
                        <Image
                            src={certificate.image}
                            alt={certificate.title}
                            className='object-contain'
                            width={280}
                            height={188}
                            style={{ width: '17.5rem', height: '100%' }}
                        />
                    </Box>
                ))}
            </AppSlider>
        </Box>
     );
}
 
export default Certificates;