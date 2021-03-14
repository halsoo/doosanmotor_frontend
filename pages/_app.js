import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <> 
        <Head>
			<meta charset="utf-8" />
			<link rel="icon" href="/favicon.png" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content="Doosan Motor Car Inspection Service" />
        </Head>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
