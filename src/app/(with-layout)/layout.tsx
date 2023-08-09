
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';



const WithLayout = ({children,}:{
    children: React.ReactNode
  }) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default WithLayout;