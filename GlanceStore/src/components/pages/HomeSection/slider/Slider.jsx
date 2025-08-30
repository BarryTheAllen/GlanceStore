import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
const Slider = ({ images }) => {


  return (
    <Swiper
    modules={[ EffectFade, Pagination, Autoplay]}
    slidesPerView={1} 
    effect={'fade'}
    loop={true}
    autoplay={ {delay: 3000, disableOnInteraction: false} }
    className="product-slider"
    pagination={{
    el: '.swiper-pagination-catalog',
    clickable: true,
    disableOnInteraction: true,
    bulletClass: '.swiper-pagination-bullet catalog-bullet',
    bulletActiveClass: '.swiper-pagination-bullet-active catalog-bullet-active'
    }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className="discount-swiper-slide">
          <img src={img} className="slider-image"/>
        </SwiperSlide>
      ))}
      <div className='swiper-pagination swiper-pagination-catalog'></div>
    </Swiper>
  )
}

export default Slider;