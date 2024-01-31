import { getData } from '@/api/routes';
import { Data } from '@/api/types';
import { HeroSection } from '@/components/Main/HeroSection';
import PlayerContent from '@/components/Main/PlayerContent';

export default async function Home() {
  const data: Data = await getData('en');

  const filteredPlaylist = data?.data?.rows?.filter(
    (item) => item?.media?.length !== 0
  );

  const playList = filteredPlaylist?.map((element, index) => ({
    name: element?.langs[0]?.title,
    img: element?.imagePath,
    src: element?.media[0]?.filePath,
    id: index + 1,
    id_from_db: element.id,
  }));

  return (
    <main className='flex min-h-screen flex-col gap-[150px] justify-between py-[150px] px-[360px] xl:px-[350px] lg:px-[200px] md:px-[50px] sm:gap-[80px] sm:py-[80px] xs:px-[10px]'>
      <HeroSection />
      {data.data.rows.length !== 0 && playList.length !== 0 && (
        <PlayerContent data={data} playList={playList} />
      )}
    </main>
  );
}
