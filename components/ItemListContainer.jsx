import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import {productsData} from './mock/Products'
import ItemListSelect from './itemlist/ItemListSelect'


function ItemListContainer() {

  const [products, setProducts] =useState([])
 
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
      <ItemListSelect items={products}/>
    </div>
          
  )
}

export default ItemListContainer