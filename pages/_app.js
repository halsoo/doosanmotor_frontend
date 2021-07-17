import Head from 'next/head'
import { useRouter } from 'next/router'

import '../public/styles/tailwind.css'

import Footer from '../src/components/Footer'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const isAdmin = router.pathname && router.pathname === '/admin' ? true : false
    
    return (
        <main> 
            <Head>
                <meta charSet="utf-8" />
                {/* <link rel="icon" href="/favicon.png" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Doosan Motor Car Inspection Service" />
                <title>Doosan Motor</title>
            </Head>
            <Component {...pageProps} />
            { !isAdmin ? <Footer/> : null }
        </main>
    )
}

export default MyApp
