import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import ItemList from '@/components/itemlist/ItemList'
import {productsData} from './mock/Products'
import AutoComplete from '../components/item/AutoComplete'
import ItemListSelect from './itemlist/ItemListSelect'


function ItemListContainer() {

  // const allCategories = ['all', ...new set(productsData.map(product => product.category))]

  // const [showProducts, setShowProducts] =useState(true)
  const [products, setProducts] =useState([])
  // const [categories, setCategories] = useState(allCategories)
  // const [products, setProducts] =useState(productsData)


// cambiar promesa por async await, filtrar productos por categoria que se desplieguen en 3 modales.
  useEffect(()=>{

    const bringProduct = new Promise((resolve)=> {
      setTimeout(()=>{
        resolve(productsData)
      },0)
    });
    bringProduct
    .then((resolve)=> setProducts(resolve))
  }
  ,[])

  return (
  
    <div className={styles.divItemListContainer}>
      {/* <AutoComplete /> */}
      
      <ItemListSelect items={products}/>
      {/* {
        showProducts
        ?<ItemList items={products}/>
        :null
      } */}
      {/* <ItemList items={products}/> */}
    </div>
          
  )
}

export default ItemListContainer