// _components/footer.tsx
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export const Footer = () => {
  const images = ['/images/a.jpg', '/images/b.jpg', '/images/c.jpg', '/images/d.jpg']; // Update paths accordingly

  return (
    <footer className=" text-white py-4">
      <div className="container mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </footer>
  );
};
