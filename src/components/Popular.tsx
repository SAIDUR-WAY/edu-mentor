import React from 'react';
import PopularCard from './PopularCard';
import mentorData from '../../public/data.json';

interface Mentor {
    id: number | string;
    name: string;
    email: string;
    subject: string;
    image: string;
  }
//   interface PopularCardProps {
//     data: Mentor; // Specify the type of the 'data' prop
//   }
// const mentorData: Mentor[] = [
//     {
//         id: 1,
//         name: "John Doe",
//         email: "john@example.com",
//         subject: "Inquiry about Product",
//         image: "https://media.licdn.com/dms/image/D5603AQH7UvYjg5_I2g/profile-displayphoto-shrink_800_800/0/1675703344008?e=2147483647&v=beta&t=woaG6O9ZCfYk4ieU0M-PCJ-3yAUSqvHV_SH6GMZHgRA"
//       },
//       {
//         id: 2,
//         name: "Jane Smith",
//         email: "jane@example.com",
//         subject: "Meeting Request",
//         image: "https://media.licdn.com/dms/image/D5603AQH7UvYjg5_I2g/profile-displayphoto-shrink_800_800/0/1675703344008?e=2147483647&v=beta&t=woaG6O9ZCfYk4ieU0M-PCJ-3yAUSqvHV_SH6GMZHgRA"
//       },
//       {
//         id: 3,
//         name: "Alice Johnson",
//         email: "alice@example.com",
//         subject: "Feedback on Service",
//         image: "https://media.licdn.com/dms/image/D5603AQH7UvYjg5_I2g/profile-displayphoto-shrink_800_800/0/1675703344008?e=2147483647&v=beta&t=woaG6O9ZCfYk4ieU0M-PCJ-3yAUSqvHV_SH6GMZHgRA"
//       }
//   ];
  
  
  

const Popular = () => {


    return (
        <div>
                  <h1 className='text-center text-3xl font-bold py-10 '>Popular Mentor</h1>
                  <div className='grid grid-cols-3 gap-4'>
                    {
                        mentorData.map((data: Mentor) => (<PopularCard
                        key={data.id}
                        data ={data}
                        ></PopularCard>)) 
                    }
                  </div>
        </div>
    );
};

export default Popular;