import catalogData from "../../../../data/catalog/catalogData"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react";
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from "react-router";
import { rightArrowIco2 } from "../../../../data/sharedData/assetsImports"
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay"
import "./Catalog.css"

const Catalog = () => {
const [itemsToShow, setItemsToShow] = useState(9);

  useEffect(() => {
    const checkIfMobile = () => {
        const isMobileXL = window.innerWidth < 1030;
        const isMobile = window.innerWidth < 768;
        const isMobileXS = window.innerWidth < 540;

      setItemsToShow(   isMobileXS ? 2 : 
                        isMobile ? 3 :
                        isMobileXL ? 4 :
                        6);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  return (
    <section className="catalog">
      <div className="catalog__container">
        <Swiper
        className="swiper-container catalog-swiper-container"
        slidesPerView={itemsToShow}
        modules={[Navigation, Autoplay]}
        loop={true}
        navigation={{nextEl: '.swiper-button-next'}}
        autoplay={ {delay: 1500, disableOnInteraction: true} }
        >
              {catalogData.map(item => (
            <SwiperSlide key={item.id} className="swiper-slide-catalog">
              <div className="inner__catalog-wrapper">
                <Link to={item.href} className="catalog__item-link">
                    <img src={item.img} loading="lazy" />
                </Link>
               <p className="card__desc">{item.title}</p>
              </div>
             </SwiperSlide>
          ))}
        <img className="swiper-button-next swiper-catalog-btn" src={rightArrowIco2}/>
        </Swiper>
      </div>
    </section>
  );
}


export default Catalog