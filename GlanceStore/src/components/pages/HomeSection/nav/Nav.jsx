
import { Link } from "react-router"
import headerNavInfo from "../../../../data/header/headerNavInfo"
import "./Nav.css"

const Nav = () => {
  return (
   <>
    {headerNavInfo .map((item) => (
        <li className="nav__item-icons" key={item.id}><Link to={item.href} className="nav__link"><img src={item.icon} alt="catalog" className="icon" loading="lazy"/>{item.title}</Link></li>
        ))}
   </>
  )
}

export default Nav