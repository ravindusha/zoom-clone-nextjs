'use client';
import MeetingTypeList from '@/components/MeetingTypeList';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [dateTime, setDateTime] = useState({ date: '', time: '' });

  const updateTime = () => {
    const now = new Date();

    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      timeStyle: 'short',
    });
    const formattedTime = timeFormatter.format(now);
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full',
    });
    const formattedDate = dateFormatter.format(now);

    setDateTime({
      time: formattedTime,
      date: formattedDate,
    });
  };

  useEffect(() => {
    setInterval(() => {
      updateTime();
    }, 60000);
    updateTime();
  }, []);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>
            Upcoming Meeting at: 12:30pm
          </h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>
              {dateTime.time}
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
              Sunday, May 26, 2024
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
