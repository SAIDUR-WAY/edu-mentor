import React from 'react';

import Section2 from '../../components/Section2';
import Section3 from '../../components/Section3';
import { Metadata } from 'next';
import Popular from '@/components/Popular';
export const metadata: Metadata = {
  title: 'Home | Edu-Mentor',
  description: 'Connecting knowledge and home with our tutoring website',
}

const HomePage = () => {
  return (
    <div>
      <h1 className='flex justify-center items-center text-3xl text-center '>Home Page!</h1>

      <Popular></Popular>
      <Section2></Section2>
      <Section3></Section3>
    </div>
  );
};

export default HomePage;
