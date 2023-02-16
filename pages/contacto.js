import React from 'react'
import ButtonLinkHome from '@/components/buttons/ButtonLinkHome'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import ContactForm from '@/components/contactForm/ContactForm'


function Contacto() {
  return (
    <>

        <main className={styles.main}>
          <h1>CONTACTO</h1>
          <ContactForm/>
        </main>
        <div className={styles.ButtonLinkHome}>
          <Link href='/'><ButtonLinkHome/></Link>   
        </div>
    </>
  )
}

export default Contacto