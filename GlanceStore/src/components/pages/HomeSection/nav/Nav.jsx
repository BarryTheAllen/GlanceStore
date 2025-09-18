import { Link } from "react-router"
import {basketIcon, profileIcon, favoritesIcon } from "../../../../data/sharedData/assetsImports"
import { useCart }  from "../../../../hooks/cart/useCart"
import { useFavorites } from "../../../../hooks/favorites/useFavorites"
import "./Nav.css"


const Nav = () => {

    const { cart } = useCart()
    const { favorites } = useFavorites()
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
   <>
       <li className="nav__item-icons">
          <Link className="nav__link" to={'/Cart'}>
          {totalQuantity > 0 && <span className={cart.length > 0 ? "cart-badge active" : "cart-badge"}>{totalQuantity}</span>}
          <img src={basketIcon} alt="Корзина" className="icon" loading="lazy"/>
          Корзина
          </Link>
        </li>
        <li className="nav__item-icons">
          <Link className="nav__link" to={'/Login'}>
          <img src={profileIcon} alt="Профиль" className="icon" loading="lazy"/>
          Профиль
          </Link>
        </li>
        <li className="nav__item-icons">
          <Link className="nav__link" to={"/Favorites"}>
          <span className={favorites.length > 0 ? "fav-badge active" : "fav-badge"}>{favorites.length}</span>
          <img src={favoritesIcon} alt="Избранное" className="icon" />
          Избранное
          </Link>
        </li>
   </>
  )
}

export default Nav