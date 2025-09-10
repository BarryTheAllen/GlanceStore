import { useCart } from "../../../hooks/cart/useCart";
import { useCartActions } from "../../../hooks/cart/useCartActions";
import "./AddToCartBtn.css";

const AddToCartBtn = ({item}) => {

    const { cart } = useCart();
    const { handleCart } = useCartActions();
    const isInCart = cart?.some(cartItem => cartItem.id === item.id) || false;

    return (
        <>
        <button 
        className={`addtocart__btn ${isInCart ? 'active' : ''}`}
        onClick={() => handleCart(item)}
        >
        {isInCart ? 'Удалить из корзины' : 'В корзину'}
        </button>
        </>
    )
}

export default AddToCartBtn