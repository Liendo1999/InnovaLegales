import * as React from "react"
import { Link } from "gatsby"
import "./header.scss"
import LogoHeader from "../../images/scalablesInnova/logo scalable.svg"

const Header = () => (
  <header>
    <Link id="logoHContainer" to="/">
      <img src={LogoHeader} id="logoHeader" alt="innova"/>
    </Link>
    <nav className="menu">
      <ul>
        <li className="menuItem"><Link to="/">Inicio</Link></li>
        <li className="menuItem"><Link to="/servicios">Servicios</Link></li>
        <li className="menuItem"><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  </header>
)


export default Header
