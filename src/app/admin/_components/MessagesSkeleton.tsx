import React from 'react';
import Conditional from '@/app/components/Conditional';
import { Box, Card, Flex, Heading, Separator, Skeleton, Text } from '@radix-ui/themes';

const MessagesSkeleton = () => {
    const messageSamples = [1, 2, 3, 4, 5, 6, 7];

    return ( 
          <Box className='mt-4'>
            {messageSamples.map((message, index) => (
                <React.Fragment key={message}>
                    <Card>
                        <Flex>
                            <Box width='3rem' height='3rem'>
                                <Skeleton width='3rem' height='3rem' className='rounded-full' />
                            </Box>

                            <Box className='ml-4 max-h-40'>
                                <Heading size='3'>
                                    <Skeleton>Message Header</Skeleton>
                                </Heading>

                                <Text size='1' color='gray'>
                                    <Skeleton>This is a sample message body. It should be longer than usual</Skeleton>
                                </Text>
                            </Box>
                        </Flex>
                    </Card>

                    <Conditional isVisible={index !== (messageSamples.length - 1)}>
                        <Separator size='4' orientation='horizontal' my='3' />
                    </Conditional>
                </React.Fragment>
            ))}
        </Box>
     );
}
 
export default MessagesSkeleton;