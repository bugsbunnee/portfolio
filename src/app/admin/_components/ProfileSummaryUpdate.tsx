'use client';

import React, { BaseSyntheticEvent, useState } from 'react';
import axios from 'axios';

import { useSession } from 'next-auth/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Callout, Card, Text, TextArea, Button, Spinner, Flex } from '@radix-ui/themes';
import { InfoCircledIcon } from '@radix-ui/react-icons';

import { summarySchema } from '@/app/utils';

import Conditional from '@/app/components/Conditional';
import ErrorMessage from '@/app/components/ErrorMessage';


type SummaryData = z.infer<typeof summarySchema>;

interface Props {
    initialSummary: string;
    onCancelUpdate: () => void;
}

const ProfileSummaryUpdate: React.FC<Props> = ({ initialSummary, onCancelUpdate }) => {
    const [error, setError] = useState('');

    const { data: session, update } = useSession();

    const { handleSubmit, register, reset, formState } = useForm<SummaryData>({ 
        resolver: zodResolver(summarySchema), 
        defaultValues: { summary: initialSummary },
        mode: 'all' 
    });

    const handleSubmitSummary =  async (data: SummaryData, event: BaseSyntheticEvent<any, any, any> | undefined) => {
        if (event) event.preventDefault();

        try {
            await axios.put(`http://localhost:4000/api/users/${session?.user.id}/summary`, data);

            toast.success('Profile Updated!');
            update();
            onCancelUpdate();
            
            reset();
        } catch (error) { 
            setError('Ooops! Looks like something went wrong. Please try again.');
        }
    };

    return (
        <Box as='div' className='w-full'>
            <Conditional isVisible={!!error}>
                <Callout.Root color="red" className='mb-5'>
                    <Callout.Icon>
                        <InfoCircledIcon />
                    </Callout.Icon>
                    <Callout.Text>
                        {error}
                    </Callout.Text>
                </Callout.Root>
            </Conditional>

            <form id='summary-form' onSubmit={handleSubmit(handleSubmitSummary)}>
                <Box className='w-full my-7'>
                    <TextArea 
                        radius='small'
                        mt='1'
                        variant='soft'
                        color='gray'
                        size='3'
                        className='min-h-48 w-full'
                        style={{ border: '1px solid' }}
                        {...register('summary')}
                    />
                    {formState.errors.summary && <ErrorMessage>{formState.errors.summary.message}</ErrorMessage>}
                </Box>
                    
                <Flex gap='3' my='6' justify='end' align='center'>
                    <Button form='summary-form' radius='small' disabled={formState.isSubmitting}>
                        Update Form
                        {formState.isSubmitting && <Spinner />}
                    </Button>

                    <Button form='summary-form' radius='small' color='red' disabled={formState.isSubmitting} onClick={onCancelUpdate}>
                        Cancel
                    </Button>
                </Flex>
            </form>
        </Box>
    );
}
 
export default ProfileSummaryUpdate;