import { useContext, useState } from 'react'
import cartContext from '../context/cartContext'
import { createBuyOrder } from '../../data/firestore'
import './CartContainer.css'
import Swal from 'sweetalert2'

const alertCheckout = (orderId) =>
  Swal.fire({
    title: '¡Compra realizada! 🎉',
    icon: 'success',
    text: `Tu número de orden es: ${orderId}`,
    footer: 'Recibirás los detalles en tu email',
    background: '#1c1e22',
    color: '#e8e6e1',
    iconColor: '#c9a84c',
    confirmButtonColor: '#c9a84c',
  })

export default function CartContainer() {
  const { cart, removeCartProduct, getTotalPrice, clearCart } = useContext(cartContext)
  const [formData, setFormData] = useState({ username: '', phone: '', email: '' })

  async function handleCheckout() {
    const buyOrder = {
      buyer: formData,
      total: getTotalPrice(),
      date: new Date(),
    }
    const orderId = await createBuyOrder(buyOrder)
    clearCart()
    alertCheckout(orderId)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleReset() {
    setFormData({ username: '', phone: '', email: '' })
  }

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <span className="cart-empty__icon">🛒</span>
        <h2>Tu carrito está vacío</h2>
        <p>Agregá productos para comenzar tu compra</p>
      </div>
    )
  }

  return (
    <div className="cart-layout">

      {/* Lista de productos */}
      <div className="cart-items">
        <h2 className="cart-section-title">Tu carrito</h2>
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.title} className="cart-item__img" />
            <div className="cart-item__info">
              <p className="cart-item__title">{item.title}</p>
              <p className="cart-item__price">{item.price}</p>
              <p className="cart-item__qty">Cantidad: {item.count}</p>
            </div>
            <button
              className="cart-item__remove"
              onClick={() => removeCartProduct(item.id)}
              title="Eliminar"
            >✕</button>
          </div>
        ))}
        <div className="cart-total">
          <span>Total</span>
          <span className="cart-total__amount">${getTotalPrice().toLocaleString('es-AR')}</span>
        </div>
      </div>

      {/* Formulario de checkout */}
      <div className="cart-checkout">
        <h2 className="cart-section-title">Datos de contacto</h2>
        <div className="checkout-form">
          <label className="form-field">
            <span>Nombre completo</span>
            <input
              type="text"
              name="username"
              placeholder="Juan Pérez"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label className="form-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="form-field">
            <span>Teléfono</span>
            <input
              type="text"
              name="phone"
              placeholder="11 1234-5678"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <div className="checkout-form__actions">
            <button className="btn-primary" onClick={handleCheckout}>
              Confirmar compra
            </button>
            <button className="btn-danger" onClick={handleReset}>
              Cancelar
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
