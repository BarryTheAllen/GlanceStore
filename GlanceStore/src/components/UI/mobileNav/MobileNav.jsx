import mobNav from "../../../data/mobileNav/mobNav"
import { Link } from "react-router"
import "./MobileNav.css"

const MobileNav = () => {
  return (
   <>
   <div className="link__wrapper-mob">
    <ul className="nav__list-mob">
         {mobNav.map((item) => (
        <li className="nav__item-ico-mob" key={item.id}><Link className="nav__link-mob" to={item.href}><img src={item.icon} alt="catalog" className="icon-mob" loading="lazy"/>{item.title}</Link></li>
        ))}
    </ul>
   </div>
   </>
  )
}

export default MobileNav