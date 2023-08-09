'use client'
import tutor from '../../public/tutor.jpg'

import Image from 'next/image';
import React from 'react';
const handleSubmit = () => {
console.log('hello world')
}

const PopularCard = ({data}) => {
  console.log(data)
  const {name, email, id, image, subject} = data;
  
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><Image width={384} height={384} src={image} alt="tutor" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Email: {email}</p>
    <p>Subject:  {subject}</p>

    <div className="card-actions justify-end">
      <button onClick={handleSubmit} className="btn bg-gray-400">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopularCard;