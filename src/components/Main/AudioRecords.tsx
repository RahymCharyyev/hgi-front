'use client';
import { Data } from '@/api/types';
import { useI18n } from '@/locales/client';
import Image from 'next/image';

type AudioRecordsProps = {
  data: Data;
  handlePlayPause: Function;
  isAudioPlaying: boolean;
  selectedDiplomatId: number;
};

const AudioRecords = ({
  data,
  handlePlayPause,
  isAudioPlaying,
  selectedDiplomatId,
}: AudioRecordsProps) => {
  const t = useI18n();

  const renderPlayPauseIcon = (diplomatId: number) => {
    return (
      <Image
        src={
          isAudioPlaying && selectedDiplomatId === diplomatId
            ? './pause_icon.svg'
            : './play_icon.svg'
        }
        alt={
          isAudioPlaying && selectedDiplomatId === diplomatId
            ? 'pause_icon'
            : 'play_icon'
        }
        width={50}
        height={50}
        className='absolute top-[70%] left-[70%]'
      />
    );
  };

  return (
    <div id='audio' className='flex flex-col gap-8'>
      <h2 className='text-primary font-bold xl:text-center'>
        {t('audiorecords').toUpperCase()}
      </h2>
      <div className='flex flex-wrap justify-between xl:gap-y-14 sm:items-center sm:flex-col'>
        {data.data.rows?.map((diplomat) => (
          <div key={diplomat.id}>
            {diplomat?.media?.[0] && (
              <button
                onClick={() => handlePlayPause(diplomat.id)}
                className='relative flex flex-col gap-3 items-center'
              >
                <div className='relative'>
                  <Image
                    className={`rounded-[5px] w-[250px] h-[250px]`}
                    src={diplomat.imagePath}
                    alt='diplomat image'
                    width={250}
                    height={250}
                  />
                  {renderPlayPauseIcon(diplomat.id)}
                </div>
                <h2 className={`text-xl font-semibold`}>
                  {diplomat.langs[0].title}
                </h2>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioRecords;
