import Item from './Item'
import { getCategoryData, getData } from '../../data/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './ItemListContainer.css'

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryID } = useParams()

  useEffect(() => {
    setLoading(true)
    const fetch = categoryID
      ? getCategoryData(categoryID)
      : getData()

    fetch
      .then(res => setProducts(res))
      .catch(err => alert(err))
      .finally(() => setLoading(false))
  }, [categoryID])

  return (
    <div className="catalog">
      <div className="catalog__header">
        <h2 className="catalog__title">
          {categoryID ? categoryID.charAt(0).toUpperCase() + categoryID.slice(1) + 's' : 'Todos los productos'}
        </h2>
        <p className="catalog__subtitle">Equipamiento profesional para barberos</p>
      </div>

      {loading ? (
        <div className="catalog__loading">
          <span className="spinner" />
          <p>Cargando productos...</p>
        </div>
      ) : (
        <div className="catalog__grid">
          {products.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}
