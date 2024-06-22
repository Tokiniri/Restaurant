import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the entire Swiper CSS bundle
import 'swiper/css/free-mode'; // Import FreeMode module CSS (optional)
import Card1 from './Card2';
import "./Differentplats.css"
// import { FreeMode } from 'swiper/modules/free-mode'; // Correct import path

//Import images
import Sakafo1 from "./img/Sakafo1.jpg";
import Platsvary from "./img/Platsvary.jpg";
import Pizza1 from "./img/Pizza1.jpg";
import Dessert1 from "./img/Dessert1.jpg";
import Boissons1 from "./img/Boissons1.jpg";

const MyComponent = () => {
  return (
    <div className='container py-4 px-4 justify-content-center'>
      <Swiper
        freeMode={true} // Enable FreeMode for smooth scrolling
        grabCursor={true} // Show grab cursor on hover
        // modules={[FreeMode]} // Register the FreeMode module
        breakpoints={{
          0:{
            slidesPerView: 1,
            spaceBetween:10,
          },
          480:{
            slidesPerView: 2,
            spaceBetween:10,
          },
          768:{
            slidesPerView: 3,
            spaceBetween:15,
          },
          1024:{
            slidesPerView: 4,
            spaceBetween:15,
          },
          1280:{
            slidesPerView: 4,
            spaceBetween:15,
          }
        }}
        className='mySwiper'
      >
        <SwiperSlide>
          <Card1 data={{imgSrc: Sakafo1 , price: "ENTRE", }}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card1 data={{imgSrc: Platsvary , price: "PLATS", }}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card1 data={{imgSrc: Pizza1 , price: "PIZZA", }}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card1 data={{imgSrc: Dessert1 , price: "DESSERTS", }}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card1 data={{imgSrc: Boissons1 , price: "BOISSONS", }}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyComponent;
