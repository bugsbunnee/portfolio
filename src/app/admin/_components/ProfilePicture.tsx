
import React from 'react';
import Image from 'next/image';

import { useSession } from 'next-auth/react';
import { CameraIcon, Pencil1Icon } from '@radix-ui/react-icons';
import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes';

import ProfilePictureUpdate from '@/app/admin/_components/ProfilePictureUpdate';
import ProfileSummary from './ProfileSummary';
import ProfilePictureSkeleton from './ProfilePictureSkeleton';

const ProfilePicture = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <ProfilePictureSkeleton />;
    }
    
    return (
       <>
            <Flex flexGrow='1' justify='center'>
                <Card className='w-full min-w-96 p-8'>
                    {session!.user!.image ? 
                        <Image src={session!.user.image} alt='Profile' className='w-full h-44 object-cover rounded-xl' />
                        : (
                            <Box className='w-full h-44 bg-zinc-700 rounded-xl flex justify-center items-center'>
                                <CameraIcon width='40' height='40' />
                            </Box>
                        )}

                    <Box my='7'>
                        <Flex justify='between' align='center'>
                            <Heading size='5'>
                                Update Profile Picture
                            </Heading>

                            <Pencil1Icon width='18' height='18' />
                        </Flex>

                        <Text className='text-justify' color='gray' size='2'>
                            Change the default picture displayed in the hero section
                        </Text>
                    </Box>

                    <ProfilePictureUpdate />
                </Card>
            </Flex>
                  
            <Flex flexGrow='1'>
                <ProfileSummary />
            </Flex>
       </>
     )
}

export default ProfilePicture;
