import React, { ReactNode } from 'react'
import { Box, Flex } from '@radix-ui/themes';
import AdminNavBar from '@/app/components/AdminNavBar';

interface Props { 
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
    return (
        <Box p='5' className='h-lvh w-full'>
            <Flex className='h-full w-full'>
                <AdminNavBar />
                <main className='p-10 w-full h-full max-h-lvh overflow-y-scroll'>{children}</main>
            </Flex>
        </Box>
    )
}



export default AdminLayout