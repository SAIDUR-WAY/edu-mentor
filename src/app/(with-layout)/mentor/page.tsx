import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: 'Mentor | Edu-Mentor',
    description: 'Connecting knowledge and home with our tutoring website',
  }

const MentorPage = () => {
    return (
        <div>
            <h3 className='text-3xl text-center h-96'>Mentor Page</h3>
        </div>
    );
};

export default MentorPage;