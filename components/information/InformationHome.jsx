import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Typography } from '@mui/material';
import Link from 'next/link';



function InformationHome() {
  
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 400,
    });
  });


  return (
    <div className={styles.informationHome} >


      <div className={styles.informationText}  data-aos="fade-right">
        <h3 className={styles.informationTextTittle}>
          Raiz Carpintería de diseño
        </h3>
        <h4 className={styles.textInformationHome}>
          Córdoba Capital, Argentina
        </h4>
        <h4 className={styles.textInformationHome}>
          +543517635430
        </h4>
        <h4 className={styles.textInformationHome}>
          <Link href='/contacto' className={styles.linkContact}>raizcarpinteriadediseno@gmail.com</Link>
        </h4>

      </div>

          <div className={styles.informationImg} data-aos="fade-left">
          <Image src="/raizlogo.png" alt='logoraizcarpinteria' width={340} height={200} priority className={styles.imgLogoInformation}/>
        
        <div className={styles.informationImg2}>
          <a href="https://www.instagram.com/raizcarpinteriadediseno/"
            target="_blank"
            rel="noopener noreferrer">
            <Image src="/instagram.png" alt="Mail Logo" width={72} height={16} className={styles.imgSocialMedia} priority/>
          </a>
          <a href="https://wa.me/543517635430?text=Hola!%20Necesito%un%20presupuesto%20para%20realizar%20un%20mueble%20de:%20"
          // https://api.whatsapp.com/send?phone=543517635430  
          target="_blank"
            rel="noopener noreferrer">
            <Image src="/wp5.png" alt="Mail Logo" width={72} height={16} className={styles.imgSocialMedia} priority/>
          </a>
          <a href="https://www.facebook.com/raizcarpinteriadediseno?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer">
            <Image src="/fb4.png" alt="Mail Logo" width={72} height={16} className={styles.imgSocialMedia} priority/>
          </a>
        </div>
      </div>
  
    </div>
  )
}

export default InformationHome