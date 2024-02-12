import Image from 'next/image';
import React from 'react';
import { AudioPlayer } from './AudioPlayer';
import { Media } from '@/types/topics';

type AudioSectionProps = {
  audios: Media[];
  t: Function;
};

const AudioSection: React.FC<AudioSectionProps> = ({ audios, t }) => (
  <div className='flex flex-col gap-8'>
    {audios.length !== 0 && (
      <h2 className='uppercase text-primary font-bold text-xl'>
        {t('audios')}
      </h2>
    )}
    <div className='flex flex-wrap justify-start gap-10'>
      {audios.map((audio, index) => (
        <div key={index} className='flex flex-wrap gap-2'>
          <div className='max-w-[250px] h-[300px] bg-white rounded-xl flex flex-col'>
            <div className='w-[250px] h-[350px] rounded-lg overflow-hidden border-solid border-2 border-[#A4A4A4]'>
              <Image
                src={audio.posterPath}
                alt={audio.filename}
                width={340}
                height={250}
                className='w-full h-full object-cover object-top'
              />
            </div>
            <div className='py-3 flex flex-col gap-2'>
              <hr />
              <AudioPlayer
                selectorId={audio.filename}
                autoPlay={false}
                audioSource={audio.filePath}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    <hr />
  </div>
);

export default AudioSection;
