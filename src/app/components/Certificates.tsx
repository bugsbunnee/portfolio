'use client';

import React from 'react';
import Image from 'next/image';
import Conditional from '@/app/components/Conditional';

import classNames from 'classnames';

import { Box } from '@radix-ui/themes';

import AppSlider from '@/app/components/Slider';
import useThemeStore from '@/app/store/theme';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
    displayLabel?: boolean;
}

function Certificates({ displayLabel = true }: Props) {
    const { theme } = useThemeStore();

    const certificates = [
        {
            image: '/certificates/python.jpg',
            title: 'Python',
        },
        {
            image: '/certificates/data-structures.jpg',
            title: 'Data Structures',
        },
        {
            image: '/certificates/django.jpg',
            title: 'Django',
        },
        {
            image: '/certificates/javascript-basics.jpg',
            title: 'Javascript Basics',
        },
        {
            image: '/certificates/react-18.jpg',
            title: 'React',
        },
    ];

    return ( 
        <Box width='17.5rem' height='11.75rem' className='relative'>
            <Conditional isVisible={displayLabel}>
                <Image src={theme === 'dark' ? '/images/certificates-dark.png' : '/images/certificates-light.png'} alt='Certificated' className='w-44 h-36 object-cover ' />
            </Conditional>

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