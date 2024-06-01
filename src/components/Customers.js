import React from 'react';

import san from '../assests/sandeep.jpg'
import vij from '../assests/viji2.jpg'
import sub from '../assests/subi.jpg'

const Customers = () => {
  return (
    <div id='Customers' className="timeline-container">
      <h1>Forever Wedding's Happy Clients</h1>
      <p className='text-lg md:text-lg lg:text-xl mb-8 '>If like thousands of couples, you too met your one-and-only on <a href="http://" target="_blank" rel="noopener noreferrer">Forever Wedding</a> , we'd love to hear all about it. It's our favorite part of what we do!  </p>

      <ul className="timeline">
        <li style={{ '--accent-color': '#FBCA3E' }}>
          <div className=" flex justify-center timeline-img ">
            <img src={san} alt="couple" className=' rounded-2xl height-[25px] ' />
          </div>
          <div className="title">
            <p>Sandeep & Vidya</p>
          </div>
          <div className="descr">
            First of all, I want to thank the entire <a href="http://" target="_blank" rel="noopener noreferrer">Forever Wedding</a> team for making me meet my soulmate. We both liked each other’s profile on Forever Wedding, and that’s how our conversation started. We both got happily married on 27/11/2022. Credit goes to you guys.
          </div>
        </li>
        {/* ---------------------------------------- */}
        <li style={{ '--accent-color': '#41516C' }}>
          <div className=" flex justify-center timeline-img ">
            <img src={vij} alt="couple" className=' rounded-2xl height-[20px] ' />
          </div>
          <div className="title">
            <p>vijin & sruthi</p>
          </div>
          <div className="descr">
            We met through <a href="http://" target="_blank" rel="noopener noreferrer">Forever Wedding</a>. Recently, we celebrated our 1st anniversary. Both families are also happy and share a special bond. Thanks, <a href="http://" target="_blank" rel="noopener noreferrer">Forever Wedding</a> personalized team.
          </div>
        </li>
        {/* ---------------------------------------- */}
        <li style={{ '--accent-color': '#41516C' }}>
        <div className=" flex justify-center timeline-img ">
            <img src={sub} alt="couple" className=' rounded-2xl height-[20px] ' />
          </div>
          <div className="title">
            <p>Subeesh & Sajina</p>
          </div>
          <div className="descr">
            Since I have been searching for the right match for the last 8 months and I was lucky to find it with the help of <a href="http://" target="_blank" rel="noopener noreferrer">Forever Wedding</a>, I like to thank <a href="http://" target="_blank" rel="noopener noreferrer">Forever Wedding</a> for meeting me with sajina.
          </div>
        </li>
        {/* Add more timeline items as needed */}
      </ul>
      <button
        type='button'
        className='flex justify-center cursor-none m-auto text-[#FFFFFF] bg-[#A20405] px-2 py-2 mt-5 mb-14 rounded'
      >
        Many More
      </button>
    </div>
  );
};

export default Customers;
