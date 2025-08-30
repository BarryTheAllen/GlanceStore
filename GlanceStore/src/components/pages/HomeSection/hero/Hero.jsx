
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import "./Hero.css"
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay"
import { rightArrowIco, leftArrowIco } from "../../../../data/sharedData/assetsImports"
import heroData from "../../../../data/hero/heroData";

const Hero = () => {
  return (
    <section className="hero">
        <Swiper className="swiper-container hero-container"
         modules={[Navigation, Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
           navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
           pagination={{
             clickable: true,
              el: '.swiper-pagination',
               type: 'bullets',
            }}
            loop={true}
             autoplay={ {delay: 500, disableOnInteraction: false} }
              effect={'fade'}
              key={heroData.length}
              >
            {heroData.map((item, index) => (
          <SwiperSlide key={index}>
              <div className="swiper-slide">
                <img src={item.imgSrc}/>
              </div>
          </SwiperSlide>
        ))}
          <div className="swiper-pagination"></div>
              <img className="swiper-button-prev swiper-btn-hero-prev" src={leftArrowIco} loading="lazy"/>
              <img className="swiper-button-next swiper-btn-hero-next" src={rightArrowIco} loading="lazy"/>
        </Swiper>
    </section>
  )
}

export default Hero