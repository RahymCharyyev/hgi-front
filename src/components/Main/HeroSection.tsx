import Image from 'next/image';
import React from 'react';
import { Noto_Serif } from 'next/font/google';
import { Content } from '@/types/content';

const notoSerif = Noto_Serif({ subsets: ['latin'], display: 'swap' });

interface HeroContentProps {
  heroContent?: Content;
}

export const HeroSection = async ({ heroContent }: HeroContentProps) => {
  return (
    <div className='flex flex-wrap justify-between 2xl:justify-center 2xl:gap-8 max-w-[1130px]'>
      <div className='flex flex-col gap-8 w-[60%] xl:order-2 sm:max-w-[340px]'>
        <h1
          className={`text-4xl leading-[50px] text-primary font-semibold 2xl:text-center ${notoSerif.className} sm:text-xl`}
        >
          {heroContent?.langs[0].title}
        </h1>
        <span className='2xl:text-center sm:text-sm'>
          {heroContent?.langs[0].text}
        </span>
      </div>
      {heroContent?.imagePath !== undefined && (
        <Image
          className='xl:w-[600px] xl:h-[330px] sm:w-[340px] sm:h-[275px]'
          src={heroContent?.imagePath}
          alt='HGI photo'
          width={400}
          height={280}
          priority
        />
      )}
    </div>
  );
};
