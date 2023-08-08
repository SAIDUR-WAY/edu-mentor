import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: 'Add-Classes | Edu-Mentor',
    description: 'Connecting knowledge and home with our tutoring website',
  }

const AddClassesPage = () => {
    return (
        <div className='min-h-screen text-center'>
            <h3 className='text-center text-3xl py-4'>Add Classes</h3>
        </div>
    );
};

export default AddClassesPage;