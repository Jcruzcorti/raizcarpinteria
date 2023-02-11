import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import AOS from 'aos';
import 'aos/dist/aos.css'; 



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
        <h2 className={styles.prueba}>Raiz Carpintería de diseño</h2>
        <h4 className={styles.prueba}>aaaaaaaaaaaaaaaaaaaaaaa</h4>
        <h5 className={styles.prueba}>aaaaaaaaaaaaaaaaaaaaaaa</h5>
        <h5 className={styles.prueba}>aaaaaaaaaaaaaaaaaaaaaaa</h5>
        <h5 className={styles.prueba}>aaaaaaaaaaaaaaaaaaaaaaa</h5>

      </div>

          <div className={styles.informationImg} data-aos="fade-left">
        {/* <div className={styles.informationImg1}> */}
          <Image src="/raizlogo.png" alt='logoraizcarpinteria' width={340} height={200} priority />
        {/* </div> */}
        
        <div className={styles.informationImg2}>
          <a href="https://portfoliojcc.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            {/* <Image src="/instagram.png" alt="Mail Logo" width={72} height={16} className={styles.imgSocialMedia}/> */}
            <InstagramIcon className={styles.imgSocialMedia}/>
          </a>
          <a href="https://portfoliojcc.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            {/* <Image src="/instagram.png" alt="Mail Logo" width={72} height={16} className={styles.imgSocialMedia}/> */}
            <InstagramIcon className={styles.imgSocialMedia2}/>
          </a>
          <a href="https://portfoliojcc.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            <Image src="/instagram.png" alt="Mail Logo" width={72} height={16} className={styles.imgSocialMedia} priority/>
          </a>
        </div>
      </div>
        
    </div>
  )
}

export default InformationHome