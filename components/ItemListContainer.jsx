import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import ItemList from '@/components/itemlist/ItemList'
import {productsData} from './mock/Products'
import AutoComplete from '../components/item/AutoComplete'


function ItemListContainer() {

  const [products, setProducts] =useState([])


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
      
      <ItemList items={products}/>
    </div>
          
  )
}

export default ItemListContainer