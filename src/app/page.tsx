import React from 'react';
import dynamic from 'next/dynamic';
import HomeLoading from './loading';

const Home = dynamic(
  () => import('@/app/components/Home'),
  { ssr: true, loading: () => <HomeLoading /> }
)


const HomePage: React.FC = () => {
    return <Home />; 
}
 
export default HomePage;