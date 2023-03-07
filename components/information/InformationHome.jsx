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
        <Typography  variant="h4" component="div" className={styles.informationTextTittle}>
          Raiz Carpintería de diseño
        </Typography>
        <Typography  variant="h6" component="div" className={styles.textInformationHome}>
          Córdoba Capital, Argentina
        </Typography>
        <Typography  variant="h6" component="div" className={styles.textInformationHome}>
          +543517635430
        </Typography>
        <Typography  variant="h6" component="div" className={styles.textInformationHome}>
          <Link href='/contacto' className={styles.linkContact}>raizcarpinteriadediseno@gmail.com</Link>
        </Typography>

      </div>

          <div className={styles.informationImg} data-aos="fade-left">
          <Image src="/raizlogo.png" alt='logoraizcarpinteria' width={340} height={200} priority className={styles.imgLogoInformation}/>
        
        <div className={styles.informationImg2}>
          <a href="https://www.instagram.com/raizcarpinteriadediseno/"
            target="_blank"
            rel="noopener noreferrer">
            <Image src="/instagram.png" alt="Mail Logo" width={72} height={16} className={styles.imgSocialMedia} priority/>
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