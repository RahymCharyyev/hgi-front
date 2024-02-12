import { getTopicsDetails } from '@/api/routes';
import AudioSection from '@/components/Detailed/AudioSection';
import DetailedComponent from '@/components/Detailed/DetailedComponent';
import PdfSection from '@/components/Detailed/PdfSection';
import PhotoSection from '@/components/Detailed/PhotoSection';
import VideoSection from '@/components/Detailed/VideoSection';
import { getCurrentLocale, getI18n } from '@/locales/server';
import { Topic } from '@/types/topics';

export default async function DiplomatDetails({
  params,
}: {
  params: { id: number };
}) {
  const lang = getCurrentLocale();
  const t = await getI18n();
  const data: { data: Topic } = await getTopicsDetails(params.id, lang);
  const videos = data.data.media.filter((type) => type.type === 'video');
  const audios = data.data.media.filter((type) => type.type === 'audio');
  const pdf = data.data.media.filter((type) => type.type === 'pdf');
  const photos = data.data.gallery.filter((type) => type.type === 'photo');

  return (
    <main className='flex min-h-screen flex-col gap-16 py-[150px] px-[360px] xl:px-[350px] lg:px-[200px] md:px-[50px] sm:gap-[80px] sm:py-[80px] xs:px-[10px]'>
      <>
        {data?.data !== undefined && <DetailedComponent topic={data.data} />}
        {data?.data?.media?.length !== 0 && (
          <VideoSection videos={videos} t={t} />
        )}
        {data?.data?.gallery?.length !== 0 && (
          <PhotoSection photos={photos} t={t} />
        )}
        {data?.data?.media?.length !== 0 && <PdfSection pdf={pdf} t={t} />}
        {data?.data?.media?.length !== 0 && (
          <AudioSection audios={audios} t={t} />
        )}
      </>
    </main>
  );
}
