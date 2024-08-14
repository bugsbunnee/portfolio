
import React from 'react';

import { Flex, Text } from '@radix-ui/themes';


const Footer = () => {
    return ( 
        <footer className='shadow-[0px_-5px_6px_-5px_rgba(179,54,255,0.5)] relative px-16 mt-5'>
            <Flex justify='center' height="5rem" align='center'>
                <Text mr='0.5rem'>All Copyrights Reserved @ {new Date().getFullYear()}</Text>
            </Flex>
        </footer>
     );
};
 
export default Footer;