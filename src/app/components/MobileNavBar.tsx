'use client';

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { handleScrollToNextSection, SECTIONS } from "@/app/utils";

import classNames from "classnames";
import useThemeStore from "@/app/store/theme";

const MobileNavBar = () => {
    const { theme } = useThemeStore();

    return ( 
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <IconButton 
                    aria-label="Customise options" 
                    radius='full'
                    className={classNames({
                        'bg-zinc-900 shadow-[0px_0px_10px_2px_rgba(179,54,255,0.75)]': theme === 'dark',
                        'border-4 border-solid border-gray-900 bg-white shadow-2xl shadow-gray-900 text-gray-900': theme === 'light',
                    })}
                >
                    <HamburgerMenuIcon />
                </IconButton>
            </DropdownMenu.Trigger>


            <DropdownMenu.Content sideOffset={25} className="w-56" side='top'>
                <DropdownMenu.Item onClick={() => handleScrollToNextSection(SECTIONS.HERO)} shortcut="⌘ E">{SECTIONS.HERO}</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item onClick={() => handleScrollToNextSection(SECTIONS.ABOUT)} shortcut="⌘ D">{SECTIONS.ABOUT}</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item onClick={() => handleScrollToNextSection(SECTIONS.PROJECTS)} shortcut="⌘ N">{SECTIONS.PROJECTS}</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item onClick={() => handleScrollToNextSection(SECTIONS.CONTACT)} shortcut="⌘ N">{SECTIONS.CONTACT}</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
     );
}

export default MobileNavBar;