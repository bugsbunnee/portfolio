'use client';

import {  scroller } from 'react-scroll';

export const mouseToLightRotation = (value: number) => {
    return (-1 * value) / 140;
};

export const handleScrollToNextSection = (nextSectionName: string) => {
    // Somewhere else, even another file
    scroller.scrollTo(nextSectionName, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: 50, // Scrolls to element + 50 pixels down the page
    });
};