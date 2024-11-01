import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import NowPlaying from "./NowPlaying"; // Pastikan path ini benar
import Upcoming from "./Upcoming";
import "../styles/index.css";


function Home() {
  const [selectedCity, setSelectedCity] = useState("Jakarta");

  const slides = [
    { id: 1, imageUrl: "https://media.21cineplex.com/webcontent/gallery/pictures/173025680662092_925x527.jpg", caption: "Bioskop Baru" },
    { id: 2, imageUrl: "https://media.21cineplex.com/webcontent/gallery/pictures/173027207787056_925x527.jpg", caption: "Film Aku Jati Aku Asperger" },
    { id: 3, imageUrl: "https://media.21cineplex.com/webcontent/gallery/pictures/173027213714895_925x527.jpg", caption: "Film Dosa Musyrik" },
    { id: 4, imageUrl: "https://media.21cineplex.com/webcontent/gallery/pictures/172947888759377_925x527.jpg", caption: "Film Venom" },
    { id: 5, imageUrl: "https://media.21cineplex.com/webcontent/gallery/pictures/173017455517388_925x527.jpg", caption: "" },
  ];

  return (
    <div className="home">
      {/* Swiper slider for featured movies */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img src={slide.imageUrl} alt={slide.caption} className="slide-image" />
              <div className="slide-caption">
                <h2>{slide.caption}</h2>
                <p>14 November 2024 di Bioskop</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Now Playing Section */}
      <section id="now-playing-section">
        <NowPlaying selectedCity={selectedCity} onCityChange={setSelectedCity} />
      </section>
      <Upcoming />
    </div>
  );
}

export default Home;
