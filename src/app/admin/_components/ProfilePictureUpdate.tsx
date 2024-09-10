"use client";

import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { Button, Dialog, Flex } from '@radix-ui/themes';

import Upload from '@/app/admin/_components/Upload';
import toast from 'react-hot-toast';

const ProfilePictureUpdate: React.FC = () => {
    const [url, setUrl] = useState('');

    const handleUpload = useCallback(async () => {
        toast.promise(axios.put(process.env.NEXT_PUBLIC_BASE_URL + '/users/cm002b4q9000035hzc5brm5n0', { url }), {
            error: 'Failed to Upload',
            loading: 'Uploading',
            success: 'Uploaded successfully!'
        });
    }, [url]);

    useEffect(() => {
        if (url) handleUpload();
    }, [url, handleUpload]);

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button size='2'>
                    Update Profile Picture
                </Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Edit profile</Dialog.Title>
                <Dialog.Description size="2" mb="4">Make changes to your profile.</Dialog.Description>

                <Upload uri={url} onUpload={(uri) => setUrl(uri)} />

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}; 

export default ProfilePictureUpdate;