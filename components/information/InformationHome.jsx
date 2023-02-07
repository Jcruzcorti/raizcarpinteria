import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';

function InformationHome() {


  return (
    <div className={styles.informationHome}>
      <div className={styles.informationImg}>
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
            <Image src="/instagram.png" alt="Mail Logo" width={72} height={16} className={styles.imgSocialMedia}/>
          </a>
        </div>
      </div>

      <div className={styles.informationText}>
        <h2>Raiz Carpintería de diseño</h2>
        <h4>assssssssssssssssssssss</h4>
        <h5>aaaaaaaaaaaaaaaaaaaaaaa</h5>
        <h5>aaaaaaaaaaaaaaaaaaaaaaa</h5>
        <h5>aaaaaaaaaaaaaaaaaaaaaaa</h5>

      </div>
        
    </div>
  )
}

export default InformationHome