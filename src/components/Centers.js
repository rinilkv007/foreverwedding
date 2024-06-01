import React from 'react';
import backgroundPage from '../assests/backgroundPage.jpg';
import aryasamaj from '../assests/aryasamaj.jpeg';
import shivMandir from '../assests/shivmandir.jpeg';
import audit from '../assests/sreepraba.jpg';
import sree from '../assests/Auditorium.jpg';

const Centers = () => {
  return (
    <section
      id='Centers'
      className='flex flex-col items-center justify-center min-h-screen'
      style={{
        backgroundImage: `url(${backgroundPage})`, // Replace with your image URL
        backgroundSize: 'cover',
      }}
    >
      <h2 className='text-2xl font-bold mt-2 text-[#383838] text-center title'>
        Our Centers
      </h2>

      {/* Images with Captions */}
      <div className='flex flex-wrap justify-center'>
        <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
          <img
            src={sree}
            alt='Center 1'
            className='w-full h-auto md:max-w-full rounded-md mb-2'
          />
          <p className='text-center text-[#383838] font-semibold'>
            Sree prabha auditorium, kannur,kerala
          </p>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
          <img
            src={audit}
            alt='Center 2'
            className='w-full h-auto md:max-w-full rounded-md mb-2'
          />
          <p className='text-center text-[#383838] font-semibold'>
            Kairali convention center, kozhikode , kerala
          </p>
        </div>
      </div>
    </section>
  );
};

export default Centers;
