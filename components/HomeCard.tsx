import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface homeCardProps {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
  className?: string;
}

const HomeCard = (props: homeCardProps) => {
  return (
    <div
      className={cn(
        'bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
        props.className
      )}
      onClick={props.handleClick}
    >
      <div className='flex-center glassmorphism size-12 rounded-[10px]'>
        <Image src={props.img} width={27} height={27} alt='add' />
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>{props.title}</h1>
        <p className='text-lg font-normal'>{props.description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
