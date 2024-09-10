'use client';

import React from 'react';
import Image from "next/image";

import classNames from 'classnames';

import { Badge, Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { useRouter } from 'next/navigation';

import { ProjectItem } from '../utils';


interface Props {
    project: ProjectItem;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    const router = useRouter();

    return ( 
        <Card className='p-3 me-3 h-auto '>
            <Image
                src={project.image}
                alt={project.title}
                className={classNames({
                    'w-100 h-52 md:h-64 object-cover rounded-lg': true,
                    'blur': project.isConfidential
                })}
            />

            <Box>
                <Box className='h-52'>
                    <Flex align='center' className='pt-6 mb-3'>
                        <Flex flexGrow='1'>
                            <Heading size={{ initial: '3', md: '5' }}>{project.title}</Heading>
                        </Flex>

                        <Box className='bg-fuchsia-400 rounded-e-full rounded-bl-full border-fuchsia-500 border-2 text-gray-800 py-1 px-3'>
                            <Text size='1'>{project.stack}</Text>
                        </Box>
                    </Flex>

                    <Grid columns='4' gap='1' className='my-4'>
                        {project.skill.map((skill) => (
                            <Badge key={skill} color='amber' className='w-min'>
                                {skill}
                            </Badge>
                        ))}
                    </Grid>

                    <Text size={{ initial: '1', md: '2' }} className='mt-8'>
                        {project.description}
                    </Text>
                </Box>
                    
                <Button onClick={() => router.push(project.url)} disabled={project.isConfidential} className='w-full bg-fuchsia-600 disabled:bg-gray-200 disabled:text-gray-900' size='3' radius='small'>
                    {project.isConfidential ? 'Confidential' : 'View Project'}
                </Button>
            </Box>
        </Card>
     );
};
 
export default ProjectCard;