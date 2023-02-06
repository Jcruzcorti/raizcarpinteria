
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import PageLayOut from '@/components/pagelayout/PageLayOut'
import NavBar from '@/components/navbar/NavBar'
import Link from 'next/link'
import ButtonLinkHome from '@/components/buttons/ButtonLinkHome'
import 'bootstrap/dist/css/bootstrap.min.css';




const inter = Inter({ subsets: ['latin'] })
// <h2 className={inter.className}>


export default function Home() {



  return (
    <div className={styles.body}>
      <PageLayOut title='Raiz Carpintería'>

        <header className={styles.header}>
          {/* <Image src="/raizlogo.png" alt='logoraizcarpinteria' width={190} height={110} priority className={styles.imglogo}/> */}
          <NavBar />
          {/* <Link href='/'><ButtonLinkHome/></Link>    */}
        </header>

        <main className={styles.main}>
          
          
        </main>

        <div className={styles.ButtonLinkHome}>
          <Link href='/'><ButtonLinkHome/></Link>   
        </div>
        
        <footer>

        </footer>
      </PageLayOut>
      
    </div>
  )
}
