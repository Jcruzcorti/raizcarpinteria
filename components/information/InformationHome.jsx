import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
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
        <Typography gutterBottom variant="h4" component="div" className={styles.textInformationHome}>
          Raiz Carpintería de diseño
        </Typography>
        <Typography gutterBottom variant="h6" component="div" className={styles.textInformationHome}>
          Córdoba Capital, Argentina
        </Typography>
        <Typography gutterBottom variant="h6" component="div" className={styles.textInformationHome}>
          +543510000000
        </Typography>
        <Typography gutterBottom variant="h6" component="div" className={styles.textInformationHome}>
          <Link href='/contacto' className={styles.linkContact}>raizcarpinteriadediseno@gmail.com</Link>
        </Typography>
        {/* <h2 className={styles.textInformationHome}>Raiz Carpintería de diseño</h2> */}
        {/* <h4 className={styles.textInformationHome}>aaaaaaaaaaaaaaaaaaaaaaa</h4> */}
        {/* <h4 className={styles.textInformationHome}>Córdoba Capital, Argentina</h4>
        <h4 className={styles.textInformationHome}>+543510000000</h4>
        <h4 className={styles.textInformationHome}>raizcarpinteriadediseno@gmail.com</h4> */}

      </div>

          <div className={styles.informationImg} data-aos="fade-left">
        {/* <div className={styles.informationImg1}> */}
          <Image src="/raizlogo.png" alt='logoraizcarpinteria' width={340} height={200} priority />
        {/* </div> */}
        
        <div className={styles.informationImg2}>
          {/* <a href="https://portfoliojcc.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
           
            <InstagramIcon className={styles.imgSocialMedia}/>
          </a>
          <a href="https://portfoliojcc.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            
            <InstagramIcon className={styles.imgSocialMedia2}/>
          </a> */}
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