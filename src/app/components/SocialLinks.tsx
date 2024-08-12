
import React from 'react';
import Link from 'next/link';

import { Flex, IconButton, Text } from '@radix-ui/themes';
import { DownloadIcon, EnvelopeClosedIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

import Conditional from './Conditional';

interface Props {
    displayResume?: boolean;
}

const SocialLinks: React.FC<Props> = ({ displayResume = true }) => {
    const socialLinks = [
        {
            Icon: InstagramLogoIcon,
            url: 'https://www.instagram.com/marcelchukwuma/'
        },
        {
            Icon: LinkedInLogoIcon,
            url: 'https://www.linkedin.com/in/marcel-chukwuma-30108b12a/'
        },
        {
            Icon: GitHubLogoIcon,
            url: 'https://github.com/bugsbunnee'
        },
        {
            Icon: EnvelopeClosedIcon,
            url: 'marcel.chukwuma00@gmail.com'
        },
    ];

    return ( 
        <Flex my='6' gap='6' justify='end'>
            <Conditional isVisible={displayResume}>
                <Link
                    download='Chukwuma Marcel Resume.pdf'
                    href='/ChukwumaMarcelNsidinanyaResume.pdf'
                    className='shadow-[1px_2px_8px_2px_rgba(179,54,255,0.75)] rounded-full flex flex-row p-3 py-1 items-center'
                    color='gray' 
                >
                    <Text as='span' mr='0.5rem'>Resume</Text>
                    <DownloadIcon width='18' height='18' />
                </Link>
            </Conditional>

            <Flex gap='4' align='center'>
                {socialLinks.map((link) => (
                    <IconButton type='button' key={link.url} color='gray' variant="ghost">
                        <Link href={link.url} target='_blank' rel='noopenner noreferrer'>
                            <link.Icon width='25' height='25' />
                        </Link>
                    </IconButton>
                ))}
            </Flex>
        </Flex>
     );
}
 
export default SocialLinks;