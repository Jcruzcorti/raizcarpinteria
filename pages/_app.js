import PageLayOut from '@/components/pagelayout/PageLayOut'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  
  return <>
        <PageLayOut title='Raiz Carpintería'>
          <Component {...pageProps} />
        </PageLayOut>
  </>
  
}


