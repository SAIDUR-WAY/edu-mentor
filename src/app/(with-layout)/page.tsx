import React from 'react';
import Section1 from '../component/Section1';
import Section2 from '../component/Section2';
import Section3 from '../component/Section3';
import { Metadata } from 'next';
import SuccessStory from '../component/SuccessStory';
export const metadata: Metadata = {
  title: 'Home | Edu-Mentor',
  description: 'Connecting knowledge and home with our tutoring website',
}

const HomePage = () => {
  return (
    <div>
      <h1 className='flex justify-center items-center text-3xl text-center '>Home Page!</h1>

      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <SuccessStory></SuccessStory>
    </div>
  );
};

export default HomePage;
