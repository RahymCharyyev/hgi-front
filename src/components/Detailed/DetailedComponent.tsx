import React from 'react';
import Image from 'next/image';
import { Noto_Serif } from 'next/font/google';
import { Topic } from '@/types/topics';

const notoSerif = Noto_Serif({ subsets: ['latin'], display: 'swap' });

interface DetailedComponentProps {
  topic: Topic;
}

const DetailedComponent: React.FC<DetailedComponentProps> = ({ topic }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <Image
        className='mb-10 sm:w-[250px] sm:h-[350px] rounded-md'
        src={topic.imagePath}
        alt={topic.title}
        width={385}
        height={490}
      />
      <h1
        className={`mb-5 ${notoSerif.className} text-3xl text-primary font-semibold md:text-2xl sm:text-xl`}
      >
        {topic.langs[0].title}
      </h1>
      <span
        className='xs:text-sm'
        dangerouslySetInnerHTML={{
          __html: `${topic.langs[0].description}`,
        }}
      />
      <hr />
    </div>
  );
};

export default DetailedComponent;
