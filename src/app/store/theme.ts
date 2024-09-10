import { ThemeProps } from '@radix-ui/themes';
import { create } from 'zustand';

type Appearance = ThemeProps['appearance'];

export interface ThemeStore {
    theme: Appearance;
    isAnimating: boolean;
    setTheme: (theme: Appearance) => void;
    setAnimating: () => void;
    toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
    theme: 'dark',
    isAnimating: false,
    setTheme: (theme: Appearance) => set(() => ({ theme })),
    setAnimating: () => set((store) => ({ isAnimating: !store.isAnimating })),
    toggleTheme: () => set((store) => ({ theme: store.theme === 'dark' ? 'light' : 'dark' }))
}));

export default useThemeStore;