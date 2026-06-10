import { useParams } from 'react-router'
import ItemCount from './ItemCount'
import { useEffect, useState } from 'react'
import { getItemData } from '../../data/firestore'
import { useContext } from 'react'
import cartContext from '../context/cartContext'
import Swal from 'sweetalert2'
import './ItemDetail.css'

const sweetAlert = () =>
  Swal.fire({
    title: '¡Producto agregado! 🛒',
    icon: 'success',
    timer: 1500,
    showConfirmButton: false,
    background: '#1c1e22',
    color: '#e8e6e1',
    iconColor: '#c9a84c',
  })

export default function ItemDetailContainer() {
  const { itemID } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { addProductToCart } = useContext(cartContext)

  function onAddToCart(count) {
    sweetAlert()
    addProductToCart(product, count)
  }

  useEffect(() => {
    getItemData(itemID)
      .then(res => setProduct(res))
      .finally(() => setLoading(false))
  }, [itemID])

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
      <span className="spinner" />
    </div>
  )

  return (
    <div className="item-detail">
      <div className="item-detail__img-wrap">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="item-detail__info">
        <h2 className="item-detail__title">{product.title}</h2>
        <p className="item-detail__price">{product.price}</p>
        <p className="item-detail__description">{product.description}</p>
        <p className="item-detail__stock">Stock disponible: {product.stock} unidades</p>
        <ItemCount stock={product.stock} onAddToCart={onAddToCart} />
      </div>
    </div>
  )
}
