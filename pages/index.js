
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
// import PageLayOut from '@/components/pagelayout/PageLayOut'
import NavBar from '@/components/navbar/NavBar'
import Link from 'next/link'
import ButtonLinkHome from '@/components/buttons/ButtonLinkHome'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './categorias'
import Carousel from '@/components/carousel/CarouselImg'
import CarouselImg from '@/components/carousel/CarouselImg'
import InformationIndex from '@/components/information/InformationHome'
import InformationHome from '@/components/information/InformationHome'
import AboutUs from '@/components/information/AboutUs'




const inter = Inter({ subsets: ['latin'] })
// <h2 className={inter.className}>


export default function Home() {



  return (
    <>
      {/* <PageLayOut title='Raiz Carpintería'> */}



        <main className={styles.main}>
          {/* <Category/> */}
          <h1 className={styles.TextHome}>INICIO</h1>
          <CarouselImg/> 
          
        </main>
        <AboutUs/>
        <InformationHome/>

        <div className={styles.ButtonLinkHome}>
          <Link href='/'><ButtonLinkHome/></Link>   
        </div>

      {/* </PageLayOut> */}
      
    </>
  )
}
