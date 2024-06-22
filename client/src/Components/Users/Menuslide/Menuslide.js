import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the entire Swiper CSS bundle
import 'swiper/css/free-mode'; // Import FreeMode module CSS (optional)
import Card1 from './Card1';
import "./Menuslide.css"
// import { FreeMode } from 'swiper/modules/free-mode'; // Correct import path

//Import images
import Soupe1 from "./img/Soupe1.jpg";
import Soupe2 from "./img/Soupe2.jpg";
import Sakafo1 from "./img/Sakafo1.jpg";
import Sakafo2 from "./img/Sakafo2.jpg";
import Sakafo3 from "./img/Sakafo3.jpg";

const MyComponent = () => {
  return (
    <div>
    <div className='' style={{padding:"1%"}}>
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
          <Card1 data={{imgSrc: Sakafo1 , price: "2500 Ar", title: "pate a choux"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card1 data={{imgSrc: Sakafo2 , price: "6000 Ar", title: "Pain perdu salé"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card1 data={{imgSrc: Sakafo3 , price: "2500 Ar", title: "Fritte avec oeuf"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card1 data={{imgSrc: Soupe1 , price: "12000 Ar", title: "Soupe Spécial"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card1 data={{imgSrc: Soupe2 , price: "10000 Ar", title: "Soupe Tamatave"}}/>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default MyComponent;

// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'; // Import the entire Swiper CSS bundle
// import 'swiper/css/free-mode'; // Import FreeMode module CSS (optional)
// import Card1 from './Card1'; // Assuming Card1 is a component for rendering your slide content
// import "./Menuslide.css";

// // Import images
// import Soupe1 from "./img/Soupe1.jpg";
// import Soupe2 from "./img/Soupe2.jpg";
// import Sakafo1 from "./img/Sakafo1.jpg";
// import Sakafo2 from "./img/Sakafo2.jpg";
// import Sakafo3 from "./img/Sakafo3.jpg";

// const MyComponent = () => {
//   // Define slide data
//   const slideData = [
//     { imgSrc: Sakafo1, price: "$10", title: "Juicy Grapes" },
//     { imgSrc: Sakafo2, price: "$10", title: "Juicy Grapes" },
//     { imgSrc: Sakafo3, price: "$10", title: "Juicy Grapes" },
//     { imgSrc: Soupe1, price: "$10", title: "Juicy Grapes" },
//     { imgSrc: Soupe2, price: "$10", title: "Juicy Grapes" },
//   ];

//   // State variable to track current slide index
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to switch to the next slide
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
//   };

//   // Use useEffect to set up automatic slide switching
//   useEffect(() => {
//     const intervalId = setInterval(nextSlide, 1500); // Change slide every 1.5 seconds

//     return () => clearInterval(intervalId); // Clear interval when component unmounts
//   }, [slideData]); // Dependency to recalculate interval based on slideData changes

//   return (
//     <div className='container py-4 px-4 justify-content-center bg-dark'>
//       <Swiper
//         freeMode={true} // Enable FreeMode for smooth scrolling
//         grabCursor={true} // Show grab cursor on hover
//         // modules={[FreeMode]} // Register the FreeMode module (not needed here)
//         breakpoints={{
//           0: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           480: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 15,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 15,
//           },
//           1280: {
//             slidesPerView: 4,
//             spaceBetween: 15,
//           },
//         }}
//         className='mySwiper'
//         initialSlide={currentIndex} // Start from initial index (optional)
//       >
//         {slideData.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Card1 data={item} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default MyComponent;
