'use client';

import React, { PropsWithChildren, useCallback, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Element } from 'react-scroll';
import { Box, Flex, IconButton } from '@radix-ui/themes';
import { ArrowDownIcon } from '@radix-ui/react-icons';
import { handleScrollToNextSection } from '@/app/utils';

import SectionDivider from '@/app/components/SectionDivider';

interface Props extends PropsWithChildren {
    currentSectionName: string;
    nextSectionName: string;
}

const Section: React.FC<Props> = ({ children, currentSectionName, nextSectionName }) => {
    const [isAnimating, setAnimating] = useState(false);

    const sectionVariants: Variants = {
        offscreen: {
          y: 0
        },
        onscreen: {
          y: 50,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            staggerChildren: 0.01,
          }
        }
    };

    const handleScroll = () => {
        setAnimating(true);
        handleScrollToNextSection(nextSectionName);
    };

    const onEndAnimation = useCallback(() => {
        setAnimating(false);
    }, []);

    return ( 
       <>
             <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div style={{ minHeight: '45rem'}} variants={sectionVariants}>
                    <Element name={currentSectionName}>
                        {children}
                    </Element>
                </motion.div>
            </motion.div>
            
            <Flex align='center' justify='center' mt={{ sm: '5', md: '10', lg: '16' }} mb='3'>
                <Box className='animate-bounce'>
                    <IconButton variant='outline' size='2' radius='large' onClick={handleScroll}>
                        <ArrowDownIcon width='18' height='100%' color='gray' />
                    </IconButton>
                </Box>
            </Flex>
                
            <SectionDivider isAnimating={isAnimating} onEndAnimation={onEndAnimation} />
       </>
     );
};
 
export default Section;