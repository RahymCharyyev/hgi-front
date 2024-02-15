import { Carousel } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArrowRight from '@/assets/right_arrow.svg';
import { CategoriesResponse } from '@/types/categories';
import CarouselItem from './CarouselItem';

const carouselSettings = {
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface CardsCarouselProps {
  categories: CategoriesResponse;
  t: Function;
  locale: string;
}

const CardsCarousel = ({ categories, t, locale }: CardsCarouselProps) => {
  return (
    <>
      {categories.data.map((item) => (
        <div key={item.id}>
          <Link
            href={`${locale}/categories/${item.id}`}
            className='flex justify-start items-start mb-8'
          >
            <h2 className='uppercase text-primary font-bold hover:text-secondary'>
              {item.langs[0].name}
            </h2>
            <Image src={ArrowRight} alt='arrow right' width={23} height={23} />
          </Link>
          {item.topics.length > 2 ? (
            <Carousel {...carouselSettings}>
              {item.topics.map((topic) => (
                <CarouselItem
                  key={topic.id}
                  topic={topic}
                  t={t}
                  locale={locale}
                />
              ))}
            </Carousel>
          ) : (
            <div className='flex gap-20'>
              {item.topics.map((topic) => (
                <CarouselItem
                  key={topic.id}
                  topic={topic}
                  t={t}
                  locale={locale}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CardsCarousel;
