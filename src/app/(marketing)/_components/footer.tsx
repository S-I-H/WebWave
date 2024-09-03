// _components/footer.tsx
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export const Footer = () => {
  const images = ['/apple.png', '/ball.png', '/car.png', '/duck.png']; // Update paths accordingly

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
              <img src={src} alt={`Slide ${index + 1}`} className="w-1px h-1px" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </footer>
  );
};
