'use client';
import Image from 'next/image';
import Link from 'next/link';
import TimesNewRoman from 'next/font/local';
import { useI18n } from '@/locales/client';

const times = TimesNewRoman({
  src: '../../fonts/times.ttf',
  display: 'swap',
});

export default function Footer() {
  const t = useI18n();
  const date = new Date();
  date.getFullYear();
  return (
    <footer className='bg-primary text-white flex justify-between items-end px-[360px] py-7 mb-10 lg:px-[200px] md:px-[50px] sm:flex-col sm:items-center sm:gap-y-3 xs:px-[10px]'>
      <Link
        href='https://iirmfa.edu.tm/diplomat/tm'
        className='flex gap-4 items-center justify-center'
      >
        <Image
          className='xl:w-[80px] xl:h-[80px]'
          src='/logo.webp'
          alt='logo of the university'
          width={85}
          height={85}
        />
        <div className={`${times.className} text-xl flex flex-col`}>
          <span className='font-bold xl:text-base'>{t('universityName')}</span>
          <hr className='text-white' />
          <span className='xl:text-base xl:max-w-[175px]'>{t('siteName')}</span>
        </div>
      </Link>
      <span className='md:text-sm'>
        © {date.getFullYear()}. {t('allRighstReserved')} Turkmenportal HJ
      </span>
    </footer>
  );
}
