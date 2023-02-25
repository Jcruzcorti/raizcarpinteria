import React from 'react'
import ButtonLinkHome from '@/components/buttons/ButtonLinkHome'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import ContactForm from '@/components/contactForm/ContactForm'
import Typography from '@mui/material/Typography';

function Contacto() {
  return (
    <>

        <main className={styles.main}>
        <Typography gutterBottom variant="h4" component="div">
          CONTACTO
        </Typography>
          {/* <h1>CONTACTO</h1> */}
          <ContactForm/>
        </main>
        <div className={styles.ButtonLinkHome}>
          <Link href='/'><ButtonLinkHome/></Link>   
        </div>
    </>
  )
}

export default Contacto