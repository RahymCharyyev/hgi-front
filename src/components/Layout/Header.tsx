import Image from 'next/image';
import { getCurrentLocale, getI18n } from '../../locales/server';
import Link from 'next/link';
import TimesNewRoman from 'next/font/local';

const times = TimesNewRoman({
  src: '../../fonts/times.ttf',
  display: 'swap',
});

export default async function Header() {
  const t = await getI18n();
  const locale = getCurrentLocale();
  return (
    <header className='bg-primary text-white flex justify-between items-center px-[360px] py-7 xl:px-[350px] lg:px-[200px] md:px-[50px] sm:flex-col sm:items-center sm:gap-y-3 xs:px-[10px]'>
      <nav className='flex gap-8 xl:hidden'>
        <Link href='/#diplomats'>{t('diplomats')}</Link>
        <Link href='/#audio'>{t('audiorecords')}</Link>
      </nav>
      <Link href='/' className='flex gap-4 items-center justify-center'>
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
      <div className='flex flex-col items-end xl:gap-y-5 sm:items-center'>
        <div className='flex gap-4 xl:text-sm sm:order-2'>
          <Link
            className={`${locale === 'tk' ? 'font-semibold' : 'font-light'}`}
            href='/tk'
          >
            TKM
          </Link>
          <Link
            className={`${locale === 'ru' ? 'font-semibold' : 'font-light'}`}
            href='/ru'
          >
            РУС
          </Link>
          <Link
            className={`${locale === 'en' ? 'font-semibold' : 'font-light'}`}
            href='/en'
          >
            ENG
          </Link>
        </div>
        <nav className='hidden xl:flex xl:gap-8 '>
          <Link href='/#diplomats'>{t('diplomats')}</Link>
          <Link href='/#audio'>{t('audiorecords')}</Link>
        </nav>
      </div>
    </header>
  );
}
