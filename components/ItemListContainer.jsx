import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import {productsData} from './mock/Products'
import ItemListSelect from './itemlist/ItemListSelect'


function ItemListContainer() {

    const [products, setProducts] =useState([])
  
    useEffect(()=>{
      const fetchProducts = async () => {

        try {    
          const response = await new Promise(resolve => {
            setTimeout(() => {
              resolve(productsData);
            }, 0);
          });

          setProducts(response);
        } catch (error) {
          console.error('Error en fetching de productos:', error);
        }
      };

      fetchProducts();
    }, []);


  return (
  
    <div className={styles.divItemListContainer}>
      <ItemListSelect items={products}/>
    </div>
          
  )
}

export default ItemListContainer