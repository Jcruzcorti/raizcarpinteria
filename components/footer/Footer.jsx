import React from 'react'
import styles from '@/styles/Home.module.css'
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';

function Footer() {

  return (
    <div className={styles.footer}>
        <a href="https://portfoliojcc.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">
          <p className={styles.pFooter}>© 2023 Sitio construido por Juan Cruz Cortiñas</p>
            <MailOutlineTwoToneIcon className={styles.footerImgs}/>
        </a>
    </div>
  )
}

export default Footer