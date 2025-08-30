import "./Cart.css"
import { useCart }  from "../../hooks/cart/useCart"
import { Link } from "react-router"
import { cartIsEmpty, trashcan, minusIco, plus } from "../../../data/sharedData/assetsImports"
import { useCartActions } from "../../hooks/cart/useCartActions"
import { useFavActions } from "../../hooks/favorites/useFavActions"
import { useFavorites } from "../../hooks/favorites/useFavorites"

const Cart = () => {
    const { toggleLike } = useFavActions()
    const { favorites } = useFavorites()
    const { cart } = useCart()
    const { incrementQuantity, decrementQuantity, removeFromCart } = useCartActions()

    const total = cart.reduce((sum, item) => {
        const price = Number(item.price.toString().replace(/\D/g, ''));
        return sum + (price * item.quantity);
    }, 0);

    return (
        <div className="cart__container">
            <div className="cart__title">
                <Link to={"/Home"} className="back__to-home">Главная</Link>
                <span>/</span>
                <h1>Корзина</h1>
            </div>
            {cart.length === 0 ? (
                <div className="cart__is-empty">
                    <p>Корзина пуста</p>
                    <img src={cartIsEmpty} alt="Пустая корзина" />
                    <Link to={"/Home"} className="back-to-catalog" >Перейти в каталог</Link>
                </div>
                
            ) : (
            <>
                <ul className="cart__list">
                    {cart.map((item, index) => {
                        const isLiked = favorites.some(favItem => favItem.id === item.id);
                        
                        return (
                            <div key={index}>
                                <li className="cart__list-item">
                                    <img src={item.techImg[0]} className="cart__list-img" alt={item.title}/>
                                    <div className="inner__container">
                                        <div className="wrapper__iner-item">
                                            <p>{item.title}</p>
                                            <p className="item__price-cart">{item.price.toLocaleString('ru-RU')} ₽</p>
                                        </div>
                                        <div className="wrapper__iner-features">
                                            <div className="set-like-btn" onClick={() => toggleLike(item)}>
                                                <img 
                                                    src={isLiked ? item.likeSetsImg : item.setLikeImg} 
                                                    alt="Лайк"
                                                />
                                            </div>
                                            <img 
                                                src={trashcan} 
                                                onClick={() => removeFromCart(item.id)} 
                                                className="trashcan"
                                                alt="Удалить"
                                            />
                                            <div className="quantity">
                                                <div className="minus__from-cart" onClick={() => decrementQuantity(item.id)}>
                                                    <img src={minusIco}/>
                                                </div>
                                                <span>{item.quantity}</span>
                                                <div className="plus__to-cart" onClick={() => incrementQuantity(item.id)}>
                                                    <img src={plus}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        )
                    })}
                </ul>
                <p>Сумма заказа: {total.toLocaleString('ru-RU')} ₽</p>
            </>
        )}
    </div>
)
}

export default Cart