import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    const NavLinks = [
        {
            path: '/dashboard',
            title: 'Dashboard',
        },
        {
            path: '/dashboard/addClasses ',
            title: 'Add Classes'
        },
        {
            path: '/',
            title: 'Home'
        }
    ]
    return (
        <div>
            
            {/* <Link className='px-4' href='/'>Home</Link>
            <Link className='px-4' href='/dashboard/addClasses'>Add Classes</Link> */}
        <aside>
        <h3 className='py-4 text-3xl text-green-950 text-center'>Edu Mentor</h3>
            <ul className='pl-8'>
                {
                    NavLinks.map(({path, title}) => (<li
                     key={path}
                     className='py-2'
                     
                     >

                        <Link href={path}>{title}</Link>
                    </li>))
                }
            </ul>
        </aside>
            
        </div>
    );
};

export default Sidebar;