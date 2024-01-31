'use client';
import { Data } from '@/api/types';
import { useI18n } from '@/locales/client';
import Image from 'next/image';
import Link from 'next/link';

type AudioRecordsProps = {
  data: Data;
  handlePlayPause: Function;
  isAudioPlaying: boolean;
  selectedDiplomatId: number;
  playlist: any[];
};

const AudioRecords = ({
  data,
  handlePlayPause,
  isAudioPlaying,
  selectedDiplomatId,
  playlist,
}: AudioRecordsProps) => {
  const t = useI18n();

  const renderPlayPauseIcon = (diplomatId: number) => {
    return (
      <Image
        src={
          isAudioPlaying &&
          selectedDiplomatId ===
            playlist.find((el) => el.id_from_db === diplomatId).id
            ? '/pause_icon.svg'
            : '/play_icon.svg'
        }
        alt={
          isAudioPlaying &&
          selectedDiplomatId ===
            playlist.find((el) => el.id_from_db === diplomatId).id
            ? 'pause_icon'
            : 'play_icon'
        }
        width={50}
        height={50}
        className='absolute top-[70%] left-[65%]'
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
              <>
                <div className='relative'>
                  <Link href={`/${diplomat.id}`}>
                    <Image
                      className={`rounded-[5px] w-[250px] h-[250px] hover:scale-105`}
                      src={diplomat.imagePath}
                      alt='diplomat image'
                      width={250}
                      height={250}
                    />
                  </Link>
                  <button
                    onClick={() =>
                      handlePlayPause(
                        playlist.find((el) => el.id_from_db === diplomat.id).id
                      )
                    }
                  >
                    {renderPlayPauseIcon(diplomat.id)}
                  </button>
                </div>
                <h2 className={`text-xl font-semibold`}>
                  {diplomat.langs[0].title}
                </h2>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioRecords;
