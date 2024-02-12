'use client';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

type Images = {
  original: string;
  thumbnail: string;
};

const ImageGalleryComponent = ({ gallery }: any) => {
  const images: Images[] = (gallery || []).map((item: any) => ({
    original: item.filePath,
    thumbnail: item.filePath,
  }));

  return <ImageGallery items={images} lazyLoad thumbnailPosition='right' />;
};

export default ImageGalleryComponent;
