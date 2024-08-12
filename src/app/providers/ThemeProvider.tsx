"use client"

import React, { PropsWithChildren } from 'react';
import { Theme, ThemePanel } from '@radix-ui/themes';

import useThemeStore from '../store/theme';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const { theme } = useThemeStore();

    return ( 
        <Theme accentColor='purple' appearance={theme} radius='small' scaling='105%'>
            {children}
        </Theme>
     );
}
 
export default ThemeProvider;

