import Head from 'next/head'
import '../public/styles/tailwind.css'

import Footer from '../src/components/Footer'


function MyApp({ Component, pageProps }) {
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
            <Footer/>
        </main>
    )
}

export default MyApp
