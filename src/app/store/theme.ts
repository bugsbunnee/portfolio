import { ThemeProps } from '@radix-ui/themes';
import { create } from 'zustand';

export interface ThemeStore {
    theme: ThemeProps['appearance'];
    isAnimating: boolean;
    setAnimating: () => void;
    toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
    theme: 'dark',
    isAnimating: false,
    setAnimating: () => set((store) => ({ isAnimating: !store.isAnimating })),
    toggleTheme: () => set((store) => ({ theme: store.theme === 'dark' ? 'light' : 'dark' }))
}));

export default useThemeStore;