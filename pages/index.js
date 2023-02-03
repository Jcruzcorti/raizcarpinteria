
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import PageLayOut from '@/components/pagelayout/PageLayOut'
import NavBar from '@/components/navbar/NavBar'


const inter = Inter({ subsets: ['latin'] })
// <h2 className={inter.className}>


export default function Home() {



  return (
    <>
      <PageLayOut title='Raiz Carpintería'>

        <header>
          <NavBar />
        </header>

        <main className={styles.main}>
          
        </main>

        <footer>

        </footer>
      </PageLayOut>
      
    </>
  )
}
