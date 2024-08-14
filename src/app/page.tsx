import React from 'react';
import dynamic from 'next/dynamic';
import HomeLoading from './loading';

const Home = dynamic(
() => import('@/app/components/Home'),
  { 
    ssr: false, 
    loading: () => <HomeLoading />
  }
)


const HomePage: React.FC = async () => {
    // const response = await fetch(process.env.NEXTAUTH_URL + '/api/home');
    // const result = await response.json();

    return <Home />; 
}
 
export default HomePage;