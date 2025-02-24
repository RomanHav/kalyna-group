'use client';

import { nanoid } from 'nanoid';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { formatRelativeDate } from '@/app/utils/formatRelativeDate';
import { FaLinkedin } from 'react-icons/fa';
import { TbExternalLink } from 'react-icons/tb';

const truncateDescription = (text: string, maxLength: number) => {
  return text.length > maxLength ? (
    <>
      {text.slice(0, maxLength)}
      <span className={'text-sm text-gray-400'}> ...more</span>
    </>
  ) : (
    text
  );
};
interface BlogPostCardProps {
  link: string;
  description: string;
  images: string[];
  createdAt?: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  link,
  description,
  images,
  createdAt,
}) => {
  return (
    <div className={'relative w-full flex flex-col gap-5'}>
      <Swiper
        modules={[Autoplay]}
        className={'relative w-full'}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        speed={1000}
        loop
      >
        {images.map(image => (
          <SwiperSlide key={nanoid()}>
            <Image
              className={'h-80 rounded-md object-cover object-center'}
              src={image}
              alt={description}
              width={1000}
              height={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className={'text-sm text-white/50'}>{formatRelativeDate(createdAt)}</p>
      <a
        className={'hover:underline transition-all duration-500 ease-linear'}
        href={link}
      >
        {truncateDescription(description, 100)}
      </a>
      <div className={'flex justify-between'}>
        <div className={'relative flex gap-2 justify-center items-center'}>
          <FaLinkedin href={link} size={30} color={'#FFFFFF85'} />
          <a href="https://linkedin.com/company/kalyna-group">
            <Image
              className={'w-10 h-10 rounded '}
              src={'/logo-with-gr.png'}
              alt={'logo kalyna'}
              width={100}
              height={100}
            />
          </a>
        </div>
        <a
          href={link}
          target="_blank"
          className={
            'flex items-center gap-4 py-2 px-4 group-hover:opacity-100 transition-all duration-100 rounded ease-in bg-white text-black opacity-0'
          }
        >
          <span>Read more</span>
          <TbExternalLink size={25} color={'#000000'} />
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
