import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import ButtonLinkHome from '@/components/buttons/ButtonLinkHome'
import InformationHome from '@/components/information/InformationHome'
import AboutUs from '@/components/information/AboutUs'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react'



const inter = Inter({ subsets: ['latin'] })


export default function Home() {


  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 400,
    });
  });


  return (
    <>

      <main className={styles.main2} data-aos="zoom-out" >

      </main>

      <div className={styles.divAboutUs}>
        <AboutUs/>
      </div>
      <InformationHome/>

      <div className={styles.ButtonLinkHome}>
        <Link href='/'><ButtonLinkHome/></Link>   
      </div>
      
    </>
  )
}
