import { useLocation, useNavigate } from 'react-router';
import styles from "./cardOpen.module.css"
import AddToCartBtn from '../../UI/AddToCartBtn/AddToCartBtn';
import { useState } from 'react';

const CardOpen = () => {

    const [activeImg, setActiveImg] = useState(0);
    const [fading, setFading] = useState(false);

    const handleImgChange = (newIndex) => {
    if (newIndex === activeImg) return;

    setActiveImg(newIndex);
    
    setFading(true);

    setTimeout(() => {
        setActiveImg(newIndex);
        setFading(false);
    }, 100);
    };

    const location = useLocation();

    const navigate = useNavigate();
    
    const { product} = location.state;



    return (
        <div className={styles.container}>
                <div className={styles.block}>
                  <button onClick={() => navigate(-1)} className={styles.backlink}>
                      ← Назад
                  </button>
                  <div className={styles.img__wrapper}>
                   <div className={styles.img__iner__wrapper}>
                    {product.techImg.map((imgSrc, index) => (
                        <img
                        key={index}
                        src={imgSrc}
                        alt={product.title}
                        className={styles.img__prewatch}
                        onClick={() => handleImgChange(index)}
                        />
                    ))}
                    </div>
                    <img 
                          src={product.techImg[activeImg]} 
                          alt={product.title}
                          className={`${styles.img} ${fading ? styles.imgFade : ''}`}
                      />
                  </div>
                </div>
                <div className={styles.block2}>
                <h1 className={styles.title}>{product.title}</h1>
                <p>{product.description}</p>
                </div>
                <div className={styles.wrapper}>
                    <p className={styles.price}>
                        {product.price.toLocaleString("ru-Ru")} руб.
                    </p>
                <AddToCartBtn item={product} />
                </div>
        </div>
    );
};

export default CardOpen;