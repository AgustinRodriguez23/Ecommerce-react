import CartWidget from './CartWidget'
import { NavLink } from 'react-router'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="navbar__brand">AllBarberShop</h2>
      <ul className="navbar__links">
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/category/clipper">Clippers</NavLink></li>
        <li><NavLink to="/category/trimmer">Trimmers</NavLink></li>
        <li><NavLink to="/category/shaver">Shavers</NavLink></li>
      </ul>
      <CartWidget />
    </nav>
  )
}
