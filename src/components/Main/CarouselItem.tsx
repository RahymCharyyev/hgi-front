import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Topic } from '@/types/categories';
import { Noto_Serif } from 'next/font/google';
import { Image as AntdImage } from 'antd';
const notoSerif = Noto_Serif({ subsets: ['latin'], display: 'swap' });

interface CarouselItemProps {
  topic: Topic;
  t: Function;
  locale: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ topic, t, locale }) => {
  return (
    <div
      key={topic.id}
      className='max-w-[340px] h-[500px] bg-white rounded-xl flex flex-col items-end cursor-grab md:max-w-[240px] md:h-[400px]'
    >
      <div className='w-[340px] h-[250px] rounded-lg overflow-hidden md:w-[240px] md:h-[200px]'>
        <AntdImage
          preview={false}
          src={topic.imagePath}
          alt={topic.langs[0].title}
          width={340}
          height={250}
          className='w-full h-full object-cover object-top'
        />
      </div>
      <div className='px-2 py-2 h-[250px] flex flex-col justify-between md:h-[200px]'>
        <h2
          className={`font-semibold text-primary text-lg ${notoSerif.className} md:text-base`}
        >
          {topic.langs[0].title}
        </h2>
        <span className='font-medium text-xs'>{topic.langs[0].subTitle}</span>
        <div className='flex flex-col gap-2'>
          <hr />
          <Link
            className='flex gap-2 text-primary font-semibold'
            href={`/${locale}/topic/${topic.id}`}
          >
            <span className='text-xs'>{t('knowMore')}</span>
            <Image
              className='md:w-[40px]'
              src='/diplomat/arrow.svg'
              alt='arrow'
              width={60}
              height={1}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
