import React from 'react'
import ButtonLinkHome from '@/components/buttons/ButtonLinkHome'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import ItemListContainer from '@/components/ItemListContainer'


function Categorias() {


  return (
    <>

        <main className={styles.main}>
          <h1>CATEGORIAS</h1>
          <ItemListContainer/>
        </main>
        <div className={styles.ButtonLinkHome}>
          <Link href='/'><ButtonLinkHome/></Link>   
        </div>
    </>
  )
}

export default Categorias