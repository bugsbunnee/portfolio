'use client';

import React, { PropsWithChildren } from 'react';
import Slider from "react-slick";

import classNames from 'classnames';

import { IconButton } from '@radix-ui/themes';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import useThemeStore from '@/app/store/theme';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
    onClick: () => void;
}

interface SliderProps extends PropsWithChildren {
    slidesToShow: number;
}

function SampleNextArrow({ onClick }: ArrowProps) {
    const { theme } = useThemeStore();

    return (
        <IconButton
            className={classNames({
                'cursor-pointer absolute top-1/2 p-0': true,
                'bg-zinc-900 shadow-[0px_0px_10px_2px_rgba(179,54,255,0.75)]': theme === 'dark',
                'border-4 border-solid border-gray-900 bg-white shadow-2xl text-gray-900': theme === 'light',
            })}
            size='2'
            style={{ right: '-3.5rem' }}
            radius='full'
            onClick={onClick}
        >
            <ChevronRightIcon width='25' height='25' />
        </IconButton>
    );
}
  
function SamplePrevArrow({ onClick }: ArrowProps) {
    const { theme } = useThemeStore();

    return (
        <IconButton
            className={classNames({
                'cursor-pointer absolute top-1/2 p-0': true,
                'bg-zinc-900 shadow-[0px_0px_10px_2px_rgba(179,54,255,0.75)]': theme === 'dark',
                'border-4 border-solid border-gray-900 bg-white shadow-2xl text-gray-900': theme === 'light',
            })}
            size='2'
            style={{ left: '-3.5rem' }}
            radius='full'
            onClick={onClick}
        >
            <ChevronLeftIcon width='20' height='20' />
        </IconButton>
    );
}

function AppSlider(props: SliderProps) {
    return ( 
        <Slider 
            adaptiveHeight
            autoplay
            autoplaySpeed={5000}
            dots={false}
            infinite
            speed={500}
            slidesToShow={props.slidesToShow}
            slidesToScroll={1}
            // @ts-ignore
            nextArrow={<SampleNextArrow />}
            // @ts-ignore
            prevArrow={<SamplePrevArrow />}
            responsive={[
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    arrows: false,
                    slidesToShow: 1,
                  }
                },
            ]}
        >
            {props.children}
        </Slider>
     );
}
 
export default AppSlider;