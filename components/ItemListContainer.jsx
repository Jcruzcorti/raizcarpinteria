import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import ItemList from '@/components/itemlist/ItemList'
import {productsData} from './mock/Products'


function ItemListContainer(props) {

  const [products, setProducts] =useState([])



  useEffect(()=>{

    const bringProduct = new Promise((resolve)=> {
      setTimeout(()=>{
        resolve(productsData)
      },1000)
    });
    bringProduct
    .then((resolve)=> setProducts(resolve))
  }
  ,[])

  return (
    <>

        <main className={styles.main}>
          {/* <h1>CATEGORIAS</h1> */}
          <ItemList items={products}/>
        </main>
        {/* <div className={styles.ButtonLinkHome}>
          <Link href='/'><ButtonLinkHome/></Link>   
        </div> */}
    </>
  )
}

export default ItemListContainer