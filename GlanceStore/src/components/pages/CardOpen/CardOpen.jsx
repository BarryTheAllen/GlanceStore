import { useLocation, useNavigate } from 'react-router';
import { useCartActions } from '../../../hooks/cart/useCartActions';
import styles from "./cardOpen.module.css"

const CardOpen = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const { handleCart } = useCartActions();
    
    const { product} = location.state;

    return (
              <div className={styles.container}>
                <div className={styles.block}>
                  <button onClick={() => navigate(-1)} className={styles.backlink}>
                      ← Назад
                  </button>
                      <img 
                          src={product.techImg[0]} 
                          alt={product.title}
                          className={styles.img}
                      />
                </div>
                <div className={styles.block2}>
                <h1 className={styles.title}>{product.title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa provident est accusamus facere vitae id sit qui, voluptatibus error vel odio harum quasi delectus quibusdam sequi repellat sed et veniam!</p>
                </div>
                <div className={styles.wrapper}>
                    <p className={styles.price}>
                        {product.price.toLocaleString("ru-Ru")} руб.
                    </p>
                <button className="addtocart__btn" onClick={() => handleCart(product)}>
                    В корзину
                </button>
                </div>
        </div>
    );
};

export default CardOpen;