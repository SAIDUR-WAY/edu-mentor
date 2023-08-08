import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: 'Dashboard | Edu-Mentor',
    description: 'Connecting knowledge and home with our tutoring website',
  }

const DashboardPage = () => {
    return (
        <div className='min-h-screen text-center'>
            <h3 className='text-center text-3xl py-4'>DashboardPage</h3>
        </div>
    );
};

export default DashboardPage;