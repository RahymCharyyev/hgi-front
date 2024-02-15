import { getCategories, getContent } from '@/api/routes';
import CardsCarousel from '@/components/Main/CardsCarousel';
import { HeroSection } from '@/components/Main/HeroSection';
import { getCurrentLocale, getI18n } from '@/locales/server';
import { CategoriesResponse } from '@/types/categories';
import { ContentResponse } from '@/types/content';

export default async function Home() {
  const t = await getI18n();
  const locale = getCurrentLocale();
  const data: ContentResponse = await getContent(locale);
  const heroContent = data.data.find((item) => item.key === 'hero');
  const categories: CategoriesResponse = await getCategories(locale);

  return (
    <main className='flex min-h-screen flex-col gap-[150px] justify-between py-[150px] px-[360px] xl:px-[350px] lg:px-[200px] md:px-[50px] sm:gap-[80px] sm:py-[80px] xs:px-[10px]'>
      <HeroSection heroContent={heroContent} />

      <CardsCarousel categories={categories} t={t} locale={locale} />
    </main>
  );
}
