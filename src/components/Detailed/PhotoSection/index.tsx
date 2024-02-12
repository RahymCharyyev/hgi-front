import React from 'react';
import ImageGalleryComponent from './ImageGallery';
import { Gallery } from '@/types/topics';

type PhotoSectionProps = {
  photos: Gallery[];
  t: Function;
};

const PhotoSection: React.FC<PhotoSectionProps> = ({ photos, t }) => (
  <div className='flex flex-col gap-8'>
    {photos.length !== 0 && (
      <h2 className='uppercase text-primary font-bold text-xl'>
        {t('photos')}
      </h2>
    )}
    <ImageGalleryComponent gallery={photos} />
    <hr />
  </div>
);

export default PhotoSection;
