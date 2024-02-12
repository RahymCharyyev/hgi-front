import { getCategories, getContent } from '@/api/routes';
import { CategoriesResponse } from '@/types/categories';
import { ContentResponse } from '@/types/content';
import TimesNewRoman from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import { getCurrentLocale } from '../../locales/server';
import HamburgerMenu from '../HamburgerMenu';

const times = TimesNewRoman({
  src: '../../fonts/times.ttf',
  display: 'swap',
});

export default async function Header() {
  const locale = getCurrentLocale();
  const data: ContentResponse = await getContent(locale);
  const categories: CategoriesResponse = await getCategories(locale);
  const headerContent = data.data.find((item) => item.key === 'header');
  const categoriesContent = categories.data.map((cat) => ({
    id: cat.id,
    name: cat.langs[0].name,
  }));

  return (
    <header className='bg-headerBg bg-contain text-white flex justify-between items-center px-[360px] py-7 xl:px-[350px] lg:px-[200px] md:px-[50px] sm:flex-col sm:items-center sm:gap-y-3 xs:px-[10px]'>
      <div className='sm:hidden'>
        <HamburgerMenu categories={categoriesContent} />
      </div>
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
          <span className='max-w-[350px] xl:text-base xl:max-w-[275px]'>
            {headerContent?.langs[0].text}
          </span>
        </div>
      </Link>
      <div className='flex gap-4 items-center xl:text-sm sm:order-2'>
        <div className='hidden sm:block'>
          <HamburgerMenu categories={categoriesContent} />
        </div>
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
    </header>
  );
}
