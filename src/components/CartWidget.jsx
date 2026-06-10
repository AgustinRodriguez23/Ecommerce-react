import { useContext } from 'react'
import cartContext from '../context/cartContext'
import { Link } from 'react-router'
import './CartWidget.css'

export default function CartWidget() {
  const { countItemsInCart } = useContext(cartContext)
  const count = countItemsInCart()

  return (
    <Link to="/cart" className="cart-widget">
      <span className="cart-widget__icon">🛒</span>
      {count > 0 && (
        <span className="cart-widget__badge">{count}</span>
      )}
    </Link>
  )
}
