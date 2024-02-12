import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Media } from '@/types/topics';

type PdfSectionProps = {
  pdf: Media[];
  t: Function;
};

const PdfSection: React.FC<PdfSectionProps> = ({ pdf, t }) => (
  <div className='flex flex-col gap-8'>
    {pdf.length !== 0 && (
      <h2 className='uppercase text-primary font-bold text-xl'>{t('pdf')}</h2>
    )}
    <div className='flex flex-wrap justify-start gap-10'>
      {pdf.map((item, index) => (
        <div key={index} className='flex flex-wrap gap-2'>
          <div className='h-[300px] bg-white rounded-xl flex flex-col'>
            <div className='w-[250px] h-[250px] rounded-lg overflow-hidden border-solid border-2 border-[#A4A4A4]'>
              <Image
                src={item.posterPath}
                alt={item.filename}
                width={340}
                height={250}
                className='w-full h-full object-cover object-top '
              />
            </div>
            <div className='px-5 py-3 flex flex-col gap-2'>
              <hr />
              <Link
                target='_blank'
                className='flex gap-2 text-primary font-semibold hover:text-secondary'
                href={item.filePath}
              >
                <span>{t('read')}</span>
                <Image
                  src='/diplomat/arrow.svg'
                  alt='arrow'
                  width={60}
                  height={1}
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    <hr />
  </div>
);

export default PdfSection;
