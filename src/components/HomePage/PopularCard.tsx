'use client'
import Image from 'next/image';
import React from 'react';

interface PopularCardProps {
  data: {
    name: string;
    email: string;
    id: number | string;
    image: string; // URL of the image
    subject: string;
    university: string;
    location: string;
  };
}

const TestForButton = () => {
console.log('test for button')
}

const PopularCard: React.FC<PopularCardProps> = ({data}) => {
  // console.log(data)
  const {name, email, id, image, subject} = data;
  
    return (
        <div className='my-4 mx-auto relative w-full'>
            <div className="card card-compact  bg-base-100 shadow-xl hover:shadow-2xl border border-gray-400 transition ease-in-out delay-150 hover:-translate-y-2 mx-auto  hover:border-cyan-500  hover:shadow-cyan-500/50  ">
              <div className='w-2/3 h-2/3 mx-auto  mt-10 mb-0'>
              <Image
              className='border mx-auto border-gray-400 rounded outline outline-1 hover:outline-cyan-500 shadow-lg hover:shadow-cyan-500/50  p-2'
               width={190} height={190} src={image} alt="tutorImage" />

              </div>
  <div className="card-body text-center">
    <h2 className="card-title justify-center">{name}</h2>
    <p>Email: {email}</p>
    <p>University</p>
    <p>Subject:  {subject}</p>
    <p>Location</p>
    {/* TODO: Top 'use client' is use for button.  */}
    <div className="card-actions justify-end">
      <button onClick={TestForButton} className="btn w-full text-gray-300 bg-cyan-700 hover:bg-cyan-800 hover:text-white  button-">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopularCard;