import React from 'react';
import HomeLoading from './loading';
import dynamic from 'next/dynamic';

const Home = dynamic(
  () => import('@/app/components/Home'),
  { ssr: true, loading: () => <HomeLoading /> }
)

const HomePage: React.FC = () => {
    return <Home />; 
}
 
export default HomePage;