'use client';
import Image from 'next/image';
import React from 'react';
import { Noto_Serif } from 'next/font/google';
import { useI18n } from '@/locales/client';

const notoSerif = Noto_Serif({ subsets: ['latin'], display: 'swap' });

export const HeroSection = async () => {
  const t = useI18n();
  return (
    <div className='flex flex-wrap gap-20 xl:justify-center xl:gap-8'>
      <div className='flex flex-col gap-8 max-w-[675px] xl:order-2 sm:max-w-[340px]'>
        <h1
          className={`text-4xl text-primary font-semibold xl:text-center ${notoSerif.className} sm:text-xl`}
        >
          {t('heroTitle')}
        </h1>
        <span className='xl:text-center sm:text-sm'>{t('heroSubtitle')}</span>
      </div>
      <Image
        className='xl:w-[600px] xl:h-[330px] sm:w-[340px] sm:h-[275px]'
        src='/hgi_photo.webp'
        alt='HGI photo'
        width={400}
        height={280}
      />
    </div>
  );
};
