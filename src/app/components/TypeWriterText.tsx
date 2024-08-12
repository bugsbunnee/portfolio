"use client"

import React from 'react';

import { TypeAnimation } from 'react-type-animation';
import { Box } from '@radix-ui/themes';

interface Props {
    sequence: (string | number)[];
    speed: any
}

const TypeWriterText: React.FC<Props> = ({ sequence, speed = 50 }) => {
    return ( 
        <Box as='div'>
            <TypeAnimation
                sequence={sequence}
                wrapper="span"
                speed={speed}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
            />
        </Box>
     );
}
 
export default TypeWriterText;