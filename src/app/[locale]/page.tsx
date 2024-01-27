import { getData } from '@/api';
import { Data } from '@/api/types';
import { HeroSection } from '@/components/Main/HeroSection';
import PlayerContent from '@/components/Main/PlayerContent';
import { getCurrentLocale } from '@/locales/server';

export default async function Home() {
  const lang = getCurrentLocale();
  const data: Data = await getData(lang);

  const playList = data?.data?.rows?.map((element) => ({
    name: element?.langs[0]?.title,
    img: element?.imagePath,
    src: element?.media[0]?.filePath,
    id: element?.id,
  }));

  return (
    <main className='flex min-h-screen flex-col gap-[150px] justify-between py-[150px] px-[360px] xl:px-[350px] lg:px-[200px] md:px-[50px] sm:gap-[80px] sm:py-[80px] xs:px-[10px]'>
      <HeroSection />
      <PlayerContent data={data} playList={playList} />
    </main>
  );
}
