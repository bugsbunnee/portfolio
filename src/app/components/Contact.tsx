'use client';

import React, { BaseSyntheticEvent, useState } from 'react';
import classNames from 'classnames';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Callout, Card, Flex, Text, TextArea, TextField, Button, Spinner } from '@radix-ui/themes';
import { InfoCircledIcon } from '@radix-ui/react-icons';

import { EmailData, contactSchema } from '@/app/utils';
import { sendEmail } from '../services/email';

import Conditional from '@/app/components/Conditional';
import ErrorMessage from '@/app/components/ErrorMessage';
import SocialLinks from '@/app/components/SocialLinks';

import useThemeStore from '@/app/store/theme';

type ContactData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
    const [error, setError] = useState('');

    const { handleSubmit, register, reset, formState } = useForm<ContactData>({ resolver: zodResolver(contactSchema), mode: 'all' });
    const { theme } = useThemeStore();

    const handleSubmitContact =  async (data: ContactData, event: BaseSyntheticEvent<any, any, any> | undefined) => {
        if (event) event.preventDefault();

        const emailData: EmailData = {
            first_name: data.firstName,
            last_name: data.lastName,
            message: data.message,
            from_email: data.email
        };

        try {
            await sendEmail(emailData as unknown as Record<string, string>);
            toast.success('Thank you! I\'ll be in touch!');
            
            reset();
        } catch (error) {
            setError('Ooops! Looks like something went wrong. Please try again or shoot me a direct email.');
        }
    };

    return (
        <Flex flexGrow='1' justify='center' p='9'>
            <Box as='div' className={classNames({ 
                'rounded-tl-3xl rounded-br-3xl border-white border-2 p-4': true, 
                'border-white': theme === 'dark', 
                'border-zinc-500': theme === 'light',
            })}>
                <Card className='shadow-lg p-8 w-full max-lg:max-w-5xl'>
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

                    <form id='contact-form' onSubmit={handleSubmit(handleSubmitContact)}>
                        <Flex flexGrow='1' align='center' gap='6'>
                            <Box>
                                <Flex flexGrow='1' gap='9' direction={{ lg: 'row', initial: 'column' }}>
                                    <Box width='100%'>
                                        <Text size='2'>First Name:</Text>
                                        <TextField.Root 
                                            radius='none'
                                            mt='1'
                                            variant='soft'
                                            color='gray'
                                            size='3'
                                            style={{ background: 'transparent', borderBottom: '1px solid' }}
                                            {...register('firstName')}
                                        />
                                        {formState.errors.firstName && <ErrorMessage>{formState.errors.firstName.message}</ErrorMessage>}
                                    </Box>

                                    <Box width='100%'>
                                        <Text size='2'>Last Name:</Text>
                                        <TextField.Root
                                            radius='none'
                                            mt='1'
                                            variant='soft'
                                            color='gray'
                                            size='3'
                                            style={{ background: 'transparent', borderBottom: '1px solid' }}
                                            {...register('lastName')}
                                        />
                                        {formState.errors.lastName && <ErrorMessage>{formState.errors.lastName.message}</ErrorMessage>}
                                    </Box>
                                </Flex>
                                
                                <Flex flexGrow='1' gap='9' direction={{ lg: 'row', initial: 'column' }}>
                                    <Box width='100%' mt='9'>
                                        <Text size='2'>Email:</Text>
                                        <TextField.Root 
                                            radius='none'
                                            mt='1'
                                            variant='soft'
                                            color='gray'
                                            size='3'
                                            style={{ background: 'transparent', borderBottom: '1px solid' }}
                                            {...register('email')}
                                        />
                                        {formState.errors.email && <ErrorMessage>{formState.errors.email.message}</ErrorMessage>}
                                    </Box>

                                    <Box width='100%' mt='9'>
                                        <Text size='2'>Message:</Text>
                                        <TextArea
                                            radius='small'
                                            mt='1'
                                            variant='soft'
                                            color='gray'
                                            size='3'
                                            {...register('message')}
                                        />
                                        {formState.errors.message && <ErrorMessage>{formState.errors.message.message}</ErrorMessage>}
                                    </Box>
                                </Flex>
                                
                                <Flex flexGrow='1' gap='9' direction={{ lg: 'row', initial: 'column' }}>
                                    <Box width='18rem' my='6'>
                                        <Button form='contact-form' radius='full' variant='outline' disabled={formState.isSubmitting}>
                                            Submit
                                            {formState.isSubmitting && <Spinner />}
                                        </Button>
                                    </Box>

                                    <SocialLinks displayResume={false} />
                                </Flex>
                            </Box>
                        </Flex>
                    </form>
                </Card>
            </Box>
        </Flex>
    );
}
 
export default Contact;