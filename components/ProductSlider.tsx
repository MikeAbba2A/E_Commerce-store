"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useParams } from 'next/navigation';

interface SliderImage {
  id: string;
  url: string;
}

const ProductSlider: React.FC = () => {
  const params = useParams();
  const [images, setImages] = useState<SliderImage[]>([]);

  useEffect(() => {
    console.log('Fetching images for storeId:', params.storeId);
    if (params.storeId) {
      axios.get(`/api/${params.storeId}/slider-images`).then((response) => {
        console.log('Images fetched:', response.data);  // Debug message
        setImages(response.data);
      }).catch((error) => {
        console.error('Error fetching slider images:', error);
      });
    }
  }, [params.storeId]);

  if (images.length === 0) {
    return <div>No images found</div>;  // Message to show if no images are found
  }

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.url} alt="Slider Image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;