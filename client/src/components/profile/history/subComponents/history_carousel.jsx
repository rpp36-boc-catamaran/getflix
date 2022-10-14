import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper";


const Carousel = (props) => {
  console.log('history carousel: ', props.movies)
  return (
    <div className='carousel'>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        slidesPerView={6}
        spaceBetween={50}
        navigation={true}
        modules={[Navigation, Scrollbar]}
        className="mySwiper"
      >
        {
          props.movies.map(movie => {
            return (
            <SwiperSlide  className='main-slide'>
              <div>
                <div>
                  <img
                    src={"https://image.tmdb.org/t/p/w400" + movie.backdrop_path}
                    alt = {movie.original_title}
                  />
                </div>
                <div className="main-card-title">
                  {movie.original_title}
                </div>
                <button className="watched_btn">Watched</button>
              </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Carousel;

