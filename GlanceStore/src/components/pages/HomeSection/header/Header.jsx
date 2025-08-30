import "./Header.css"
import Nav from "../nav/Nav"
import { Link } from 'react-router'
import Search from "../../../../features/search/Search"
const Header = () => {
  return (
    <div className="wrapper">
    <header className="header">
    <div className="container header__container">
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><Link to="/Home" className="logo">GLANCE</Link></li>
                <li className="nav__item">
                    <div className="search__form">
                    <Search />
                    </div>
                </li>
                 <div className="link__wrapper">
                    <Nav/>
                 </div>
            </ul>
        </nav>
    </div>
    </header>
    </div>

  )
}

export default Header