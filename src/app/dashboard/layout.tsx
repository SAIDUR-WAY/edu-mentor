import Sidebar from '@/app/component/Sidebar';
import React from 'react';

const DashboardLayout = ({children,}:{
    children: React.ReactNode
  }) => {
    return (
        <div className='flex gap-4 min-h-screen'>
            <div className='w-64 bg-slate-400'>
            <Sidebar></Sidebar>
            </div>
            <div className='w-full'>
            {children}
            </div>
        </div>
    );
};

export default DashboardLayout;