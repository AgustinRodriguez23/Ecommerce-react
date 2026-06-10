import { useState } from 'react'
import './ItemCount.css'

export default function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1)

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button
          className="item-count__btn"
          onClick={() => setCount(c => Math.max(1, c - 1))}
          disabled={count <= 1}
        >−</button>
        <span className="item-count__value">{count}</span>
        <button
          className="item-count__btn"
          onClick={() => setCount(c => Math.min(stock, c + 1))}
          disabled={count >= stock}
        >+</button>
      </div>

      <button
        className="btn-primary item-count__add"
        onClick={() => onAddToCart(count)}
        disabled={stock === 0}
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  )
}
