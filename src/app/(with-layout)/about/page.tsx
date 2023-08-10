import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: 'About | Edu-Mentor',
    description: 'Connecting knowledge and home with our tutoring website',
  }

const AboutPage = () => {
    return (
        <div>
            <h3 className='text-3xl text-center h-96'>About</h3>
            <p>Update from Shamiul</p>
        </div>
    );
};

export default AboutPage;