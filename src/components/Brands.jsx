import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.png';
import brand5 from '../assets/brand5.png';
import brand6 from '../assets/brand6.png';
import brand7 from '../assets/brand7.png';
import brand8 from '../assets/brand8.png';

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
];

const Brands = () => {
  const duplicatedBrands = [...brands, ...brands]; 

  return (
    <div className="overflow-hidden bg-white rounded-xl shadow-sm py-6 md:py-8">
      <div className="whitespace-nowrap animate-scroll flex items-center gap-16">
        {duplicatedBrands.map((src, index) => (
          <div key={index} className="inline-block grayscale hover:grayscale-0 transition-all duration-150">
            <img src={src} alt={`Brand ${index + 1}`} className="h-12 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
