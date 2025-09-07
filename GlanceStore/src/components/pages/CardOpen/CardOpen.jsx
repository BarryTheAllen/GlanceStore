import { useLocation, useNavigate } from 'react-router';
import { useCartActions } from '../../../hooks/cart/useCartActions';
import styles from "./cardOpen.module.css"
import AddToCartBtn from '../../UI/AddToCartBtn/AddToCartBtn';

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