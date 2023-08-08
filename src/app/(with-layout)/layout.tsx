
import Footer from '@/app/component/Footer';
import Navbar from '@/app/component/Navbar';
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