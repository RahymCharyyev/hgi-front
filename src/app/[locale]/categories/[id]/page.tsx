import { getCategoriesDetails } from '@/api/routes';
import CarouselItem from '@/components/Main/CarouselItem';
import { getCurrentLocale, getI18n } from '@/locales/server';
import { Categories } from '@/types/categories';

export default async function DiplomatDetails({
  params,
}: {
  params: { id: string };
}) {
  const lang = getCurrentLocale();
  const t = await getI18n();
  const cardsData: { data: Categories } = await getCategoriesDetails(
    params.id,
    lang
  );

  return (
    <main className='flex min-h-screen flex-col gap-[150px] justify-between py-[150px] px-[360px]  xl:px-[350px] lg:px-[200px] md:px-[50px] sm:gap-[80px] sm:py-[80px] xs:px-[10px]'>
      <div className='flex flex-wrap justify-between gap-y-10'>
        {cardsData.data.topics.map((topic) => (
          <div key={topic.id}>
            <CarouselItem t={t} topic={topic} locale={lang} />
          </div>
        ))}
      </div>
    </main>
  );
}
