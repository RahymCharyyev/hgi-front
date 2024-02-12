import { getContent } from '@/api/routes';
import { ContentResponse } from '@/types/content';
import TimesNewRoman from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import { getCurrentLocale, getI18n } from '../../locales/server';

const times = TimesNewRoman({
  src: '../../fonts/times.ttf',
  display: 'swap',
});

export default async function Footer() {
  const t = await getI18n();
  const locale = getCurrentLocale();
  const date = new Date();
  date.getFullYear();
  const data: ContentResponse = await getContent(locale);
  const headerContent = data.data.find((item) => item.key === 'header');

  return (
    <footer className='bg-headerBg bg-contain text-white flex justify-between items-end px-[360px] py-7  lg:px-[200px] md:px-[50px] sm:flex-col sm:items-center sm:gap-y-3 xs:px-[10px]'>
      <Link
        href={`/${locale}`}
        className='flex gap-4 items-center justify-center'
      >
        {headerContent?.imagePath !== undefined && (
          <Image
            className='xl:w-[80px] xl:h-[80px]'
            src={headerContent?.imagePath}
            alt='logo of the university'
            width={85}
            height={85}
          />
        )}
        <div className={`${times.className} text-xl flex flex-col`}>
          <span className='font-bold xl:text-base'>
            {headerContent?.langs[0].title}
          </span>
          <hr className='text-white' />
          <span className='max-w-[350px] xl:text-base xl:max-w-[175px]'>
            {headerContent?.langs[0].text}
          </span>
        </div>
      </Link>
      <span className='md:text-sm'>
        © {date.getFullYear()}. {t('allRighstReserved')}
      </span>
    </footer>
  );
}
