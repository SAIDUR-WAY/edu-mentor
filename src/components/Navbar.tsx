import Link from 'next/link';
import React from 'react';
const NavLinks = [
  {
      path: '/',
      title: 'Home'
  },
  {
        path: '/mentor-jobs',
        title: 'Mentor Jobs'
  },
  {
        path: '/mentor',
        title: 'Mentor'
  },
  {
      path: '/about',
      title: 'About Us'
  },

  {
      path: '/dashboard',
      title: 'Dashboard'
  }
]

const Navbar = () => {
    return (
      <nav className='md:flex text-center justify-between container mx-auto my-2 py-4 bg-slate-300 '>
            
      <h1 className='text-3xl mx-10  border-b-2 rounded-3xl pb-2 mb-2 md:mb-0 md:pb-0 border-cyan-500 md:border-none '>Edu Mentor</h1>
      <ul className='md:flex mx-2 justify-center items-center text-center '>
          {
              NavLinks.map(({path, title}) => (<li key={path}
                  className="mx-2"
              >
                  <Link href={path}>{title}</Link>
              </li>))
          }
      </ul>
      
  </nav>
        
    );
};

export default Navbar;