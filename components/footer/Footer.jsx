import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';

function Footer() {

  return (
    <div className={styles.footer}>
        {/* <a href="https://www.instagram.com/raizcarpinteriadediseno/?hl=es-la"
            target="_blank"
            rel="noopener noreferrer">
            <p className={styles.pFooter}>@raizcarpinteriadediseno</p>
              <Image src="/instagram.png" alt="Instagram Logo" width={72} height={16} className={styles.footerImgs}/>
        </a> */}

        <a href="https://portfoliojcc.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">
          <p className={styles.pFooter}>© 2023 Sitio construido por Juan Cruz Cortiñas</p>
            {/* <Image src="/mail.png" alt="Mail Logo" width={72} height={16} className={styles.footerImgs}/> */}
            <MailOutlineTwoToneIcon className={styles.footerImgs}/>
        </a>
    </div>
  )
}

export default Footer