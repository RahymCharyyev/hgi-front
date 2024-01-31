import { getDataDetails } from '@/api/routes';
import { Details } from '@/api/types';
import Player from '@/components/Main/Player';
import { Noto_Serif } from 'next/font/google';
import Image from 'next/image';

const notoSerif = Noto_Serif({ subsets: ['latin'], display: 'swap' });

export default async function DiplomatDetails({
  params,
}: {
  params: { id: string };
}) {
  const data: Details = await getDataDetails(params.id, 'en');

  return (
    <main className='flex min-h-screen flex-col gap-[150px] justify-between py-[150px] px-[360px]  xl:px-[350px] lg:px-[200px] md:px-[50px] sm:gap-[80px] sm:py-[80px] xs:px-[10px]'>
      {data.data !== undefined && (
        <>
          <div className='flex flex-col items-center text-center'>
            <Image
              className='mb-10 sm:w-[250px] sm:h-[350px]'
              src={data.data.imagePath}
              alt={data.data.title}
              width={385}
              height={490}
            />
            <h1
              className={`mb-5 ${notoSerif.className} text-3xl text-primary font-semibold md:text-2xl sm:text-xl`}
            >
              {data.data.title}
            </h1>
            <h2 className='mb-10 text-2xl font-semibold max-w-[650px] sm:text-lg'>
              {data.data.subTitle}
            </h2>
            <span
              className='xs:text-sm'
              dangerouslySetInnerHTML={{
                __html: `${data.data.langs[0].description}`,
              }}
            />
          </div>
          <Player
            playList={[
              {
                name: data.data.title,
                img: data.data.imagePath,
                src: data.data.media[0].filePath,
                id: 1,
              },
            ]}
            activeUI={{
              artwork: true,
              playButton: true,
              prevNnext: true,
              repeatType: true,
              trackInfo: false,
              trackTime: true,
              volume: true,
              volumeSlider: true,
              progress: 'bar',
            }}
            rootContainerProps={{
              colorScheme: 'light',
              width: '100%',
            }}
          />
        </>
      )}
    </main>
  );
}
