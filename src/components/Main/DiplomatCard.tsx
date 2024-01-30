'use client';
import { Data } from '@/api/types';
import { useI18n } from '@/locales/client';
import { Noto_Serif } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const notoSerif = Noto_Serif({ subsets: ['latin'], display: 'swap' });

type DiplomatCardProps = {
  data: Data;
  handlePlayPause: Function;
  isAudioPlaying: boolean;
  selectedDiplomatId: number;
  playlist: any[];
};

const DiplomatCard = ({
  data,
  handlePlayPause,
  isAudioPlaying,
  selectedDiplomatId,
  playlist,
}: DiplomatCardProps) => {
  const t = useI18n();
  const diplomatsData = data.data.rows.filter(
    (diplomat) => diplomat.key === 'diplomat'
  );
  return (
    <div id='diplomats' className='flex flex-col gap-8 xl:gap-12'>
      <h2 className='text-primary font-bold xl:text-center'>
        {t('diplomats').toUpperCase()}
      </h2>
      {diplomatsData.map((diplomat) => (
        <div key={diplomat.id}>
          <div className='flex gap-8 md:justify-center sm:flex-col sm:items-center sm:gap-4'>
            <Image
              className='rounded-[5px] sm:h-[310px]'
              src={diplomat.imagePath}
              alt='diplomat image'
              width={250}
              height={310}
            />
            <div className='flex flex-col gap-4 max-w-[450px] xl:max-w-[320px] sm:items-center'>
              <h2
                className={`text-primary text-2xl font-semibold ${notoSerif.className} sm:text-xl sm:text-center`}
              >
                {diplomat.langs[0].title}
              </h2>
              <h2 className='sm:text-center'>{diplomat.langs[0].subTitle}</h2>
              <Link
                className='flex gap-2 text-primary font-semibold hover:underline'
                href={`/${diplomat.id}`}
              >
                <span>{t('knowMore')}</span>
                <Image src='/arrow.svg' alt='arrow' width={60} height={1} />
              </Link>
              <hr className='text-[#B3B3B3]' />
              {diplomat.media.length != 0 && (
                <>
                  <span className='text-primary'>{t('listenAudio')}</span>
                  <div className='flex gap-2 items-center'>
                    <button
                      onClick={() =>
                        handlePlayPause(
                          playlist.find((el) => el.id_from_db === diplomat.id)
                            .id
                        )
                      }
                    >
                      {isAudioPlaying &&
                      selectedDiplomatId ===
                        playlist.find((el) => el.id_from_db === diplomat.id)
                          .id ? (
                        <Image
                          src='./pause_icon.svg'
                          alt='pause_icon'
                          width={50}
                          height={50}
                        />
                      ) : (
                        <Image
                          src='./play_icon.svg'
                          alt='play icon'
                          width={50}
                          height={50}
                        />
                      )}
                    </button>
                    <span>{diplomat.langs[0].title}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiplomatCard;
