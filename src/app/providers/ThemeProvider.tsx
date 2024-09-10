'use client';

import React, { PropsWithChildren } from 'react';
import { Theme } from '@radix-ui/themes';
import dayjs from 'dayjs';

import useThemeStore from '@/app/store/theme';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const { theme, setTheme } = useThemeStore();

	React.useEffect(() => {
		const currentHour = dayjs().hour();
		const currentTheme = currentHour < 8 || currentHour > 17 ? 'dark' : 'light';

		setTheme(currentTheme);
	}, [setTheme]);

	return (
		<Theme
			accentColor="purple"
			appearance={theme}
			radius="small"
			scaling="105%"
		>
			{children}
		</Theme>
	);
};

export default ThemeProvider;
