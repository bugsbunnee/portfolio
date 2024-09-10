
import {  scroller } from 'react-scroll';

export const mouseToLightRotation = (value: number) => {
    return (-1 * value) / 140;
};

export const getInitials = (text: string[]) => {
    return text.map((word) => word[0]).join('');
};

export const handleScrollToNextSection = (nextSectionName: string) => {
    'use client';

    // Somewhere else, even another file
    scroller.scrollTo(nextSectionName, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: 50, // Scrolls to element + 50 pixels down the page
    });
};