import React from 'react'
import ButtonLinkHome from '@/components/buttons/ButtonLinkHome'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import ItemListContainer from '@/components/ItemListContainer'
import { Typography } from '@mui/material'


function Categorias() {


  return (
    <>
      <main className={styles.main}>
      <Typography gutterBottom variant="h4" component="div" className={styles.sectionTittle}>
          CATEGORÍAS
        </Typography>
        <ItemListContainer/>
      </main>
      <div className={styles.ButtonLinkHome}>
        <Link href='/'><ButtonLinkHome/></Link>   
      </div>
    </>
  )
}

export default Categorias