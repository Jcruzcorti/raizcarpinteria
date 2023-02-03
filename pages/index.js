
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import PageLayOut from '@/components/pagelayout/PageLayOut'
import NavBar from '@/components/navbar/NavBar'
import Link from 'next/link'
import ButtonLinkHome from '@/components/buttons/ButtonLinkHome'


const inter = Inter({ subsets: ['latin'] })
// <h2 className={inter.className}>


export default function Home() {



  return (
    <>
      <PageLayOut title='Raiz Carpintería'>

        <header className={styles.header}>
          <Image src="/next.svg" alt='logoraizcarpinteria' width={110} height={90} priority/>
          <NavBar />
          <Link href='/'><ButtonLinkHome/></Link>   
        </header>

        <main className={styles.main}>
          
        </main>

        <footer>

        </footer>
      </PageLayOut>
      
    </>
  )
}
