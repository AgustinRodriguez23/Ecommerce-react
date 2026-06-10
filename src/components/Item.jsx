import { Link } from 'react-router'
import './Item.css'

export default function Item({ title, img, price, id }) {
  return (
    <div className="product-card">
      <div className="product-card__img-wrap">
        <img src={img} alt={title} />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">{price}</p>
        <Link to={`/product/${id}`}>
          <button className="btn-primary">Ver producto</button>
        </Link>
      </div>
    </div>
  )
}
