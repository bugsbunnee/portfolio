import React from 'react';
import Conditional from '@/app/components/Conditional';

import { Avatar, Box, Card, Flex, Heading, Separator, Text } from '@radix-ui/themes';
import { Contact } from '@prisma/client';
import { getInitials } from '@/app/utils';

const Messages = async () => {
    const response = await fetch('/api/contact');
    const messages: Contact[] = await response.json();

    return ( 
          <Box className='mt-4'>
            {messages.map((message, index) => (
                <React.Fragment key={message.id}>
                    <Card>
                        <Flex>
                            <Avatar color='cyan' radius='full' fallback={getInitials([message.firstName, message.lastName])} />

                            <Box className='ml-4 max-h-40'>
                                <Heading size='3'>{message.firstName} {message.lastName}</Heading>
                                <Text size='1' color='gray'>
                                    {message.message}
                                </Text>
                            </Box>
                        </Flex>
                    </Card>
                    
                    <Conditional isVisible={index !== (messages.length - 1)}>
                        <Separator size='4' orientation='horizontal' my='3' />
                    </Conditional>
                </React.Fragment>
            ))}
          </Box>
     );
}


 
export default Messages;