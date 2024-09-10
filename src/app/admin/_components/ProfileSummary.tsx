import React, { useState } from 'react';

import { Pencil1Icon } from '@radix-ui/react-icons';
import { Avatar, Box, Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';
import { getInitials } from '@/app/utils';

import Conditional from '@/app/components/Conditional';
import ProfileSummaryUpdate from './ProfileSummaryUpdate';


const ProfileSummary: React.FC = () => {
    const [isSummaryUpdateVisible, setSummaryUpdateVisible] = useState(false);

    const { data: session } = useSession();


    return ( 
        <Card className='w-96 p-8'>
            <Flex justify='between' align='center'>
                <Heading size='5'>
                    Update Professional Summary
                </Heading>

                <Pencil1Icon width='18' height='18' />
            </Flex>

            <Conditional isVisible={!isSummaryUpdateVisible}>
                <Box my='7' className='min-h-48'>
                    <Text className='text-justify min-h-48' color='gray' size='2'>
                        {session!.user!.summary}
                    </Text>
                </Box> 

                <Flex justify='between' align='center'>
                    <Avatar color='cyan' size='2' radius='full' fallback={getInitials([session!.user.firstName!, session!.user.lastName!])} />

                    <Button size='2' onClick={() => session!.user ? setSummaryUpdateVisible(true) : null}>
                        Update Summary
                    </Button>
                </Flex>
            </Conditional>

            <Conditional isVisible={isSummaryUpdateVisible}>
                <ProfileSummaryUpdate initialSummary={session!.user.summary} onCancelUpdate={() => setSummaryUpdateVisible(false)} />
            </Conditional>
        </Card>
     );
}
 
export default ProfileSummary;