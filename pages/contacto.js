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
        <Typography 
          gutterBottom variant="h7" 
          component="div"  
          className={styles.textContact} 
          >
          A continuación podrás enviar tu consulta sobre cualquiera de nuestros diseños en la web o alguna idea personalizada, y nuestro equipo te contestará a la brevedad
        </Typography>
          <ContactForm/>
        </main>
        <div className={styles.ButtonLinkHome}>
          <Link href='/'><ButtonLinkHome/></Link>   
        </div>
    </>
  )
}

export default Contacto