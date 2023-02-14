import React from 'react'
import Item from '../item/Item'
import styles from '@/styles/Home.module.css'
import { Grid } from '@mui/material'
import ItemListSelect from './ItemListSelect'


function ItemList({items}) {

  
  return (

    
    <div className={styles.divItemList}>
      {/* <ItemListSelect items={items}/> */}
      <Grid container spacing={2} justifyContent='center' gap={5} my={1}>
       
        {items.map((item)=>(
              <Item key={item.id} item={item}/>
          ))}


      </Grid>
    </div>
  )
}

export default ItemList