import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.png';
import brand5 from '../assets/brand5.png';
import brand6 from '../assets/brand6.png';
import brand7 from '../assets/brand7.png';
import brand8 from '../assets/brand8.png';

const brands = [
  { src: brand1, alt: "Brand 1" },
  { src: brand2, alt: "Brand 2" },
  { src: brand3, alt: "Brand 3" },
  { src: brand4, alt: "Brand 4" },
  { src: brand5, alt: "Brand 5" },
  { src: brand6, alt: "Brand 6" },
  { src: brand7, alt: "Brand 7" },
  { src: brand8, alt: "Brand 8" },
];

const Brands = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        speed={10000} 
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true}
        grabCursor={true}
      >
        {brands.concat(brands).map((brand, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img src={brand.src} alt={brand.alt} className="h-12 object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
