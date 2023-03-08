import Head from 'next/head'
import React from 'react'
import NavBar from '../navbar/NavBar'
import styles from '@/styles/Home.module.css'
import Footer from '../footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function PageLayOut({children,title}) {


  return (
    <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/raizlogo3.png" />
            </Head>
            <header className={styles.header}>
              <NavBar />
            </header>

            <div >
                {children}
            </div>

            <footer >
              <Footer/>
            </footer>
        
    </>
  )
}

export default PageLayOut