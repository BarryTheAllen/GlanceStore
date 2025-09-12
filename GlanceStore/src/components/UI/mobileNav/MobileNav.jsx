import { Link } from "react-router"
import "./MobileNav.css"
import { basketIcon, favoritesIcon, homeIcon, profileIcon } from "../../../data/sharedData/assetsImports"
import { useCart }  from "../../../hooks/cart/useCart"
import { useFavorites } from "../../../hooks/favorites/useFavorites"

const MobileNav = () => {

   const { cart } = useCart()

   const { favorites } = useFavorites()

   const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
   <>
   <div className="link__wrapper-mob">
    <ul className="nav__list-mob">
        <li className="nav__item-ico-mob">
          <Link className="nav__link-mob" to={"/Home"}>
          <img src={homeIcon} alt="catalog" className="icon-mob" loading="lazy"/>
            Главная
          </Link>
        </li>
        <li className="nav__item-ico-mob">
          <Link className="nav__link-mob" to={"/Cart"}>
            <div className="icon-container-mob">
              <span className={cart.length > 0 ? "cart-badge-mob active" : "cart-badge-mob"}>{totalQuantity}</span>
              <img src={basketIcon} alt="catalog" className="icon-mob" loading="lazy"/>
            </div>
            Корзина
          </Link> 
        </li>
        <li className="nav__item-ico-mob">
          <Link className="nav__link-mob" to={"/Login"}>
          <img src={profileIcon} alt="catalog" className="icon-mob" loading="lazy"/>
            Профиль
          </Link>
        </li>
        <li className="nav__item-ico-mob">
          <Link className="nav__link-mob" to={"/Favorites"}>
            <div className="icon-container-mob">
              <span className={favorites.length > 0 ? "fav-badge-mob active" : "fav-badge-mob"}>{favorites.length}</span>
              <img src={favoritesIcon} alt="catalog" className="icon-mob" loading="lazy"/>
            </div>
            Избранное
          </Link>
        </li>
    </ul>
   </div>
   </>
  )
}

export default MobileNav