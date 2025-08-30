import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { useState, useEffect } from "react";
import { RightArrowIco3 } from "../../../../data/sharedData/assetsImports";
import Card from "../../../UI/ItemCard/Card";
import "./Discounts.css";
import 'swiper/css/bundle';

const Discounts = ({cardData, onAddToCart}) => {
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
        <section className="stock">
            <div className="stock__container">
                <div className="stock__wrapper">
                    <Swiper 
                        className="swiper-container-discounts" 
                        slidesPerView={itemsToShow} 
                        modules={[Navigation, Pagination, Autoplay]} 
                        loop={true} 
                        autoplay={ {delay: 1500, disableOnInteraction: true} }
                        navigation={{nextEl: '.swiper-button-next'}}
                    >
                        {cardData.map(item => (
                            <SwiperSlide key={item.id}>
                                <Card item={item} onAddToCart={onAddToCart}/>
                            </SwiperSlide>
                        ))}
                        <img className="swiper-button-next swiper-discounts-btn" src={RightArrowIco3}/>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Discounts;