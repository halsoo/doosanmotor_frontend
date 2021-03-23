import Head from 'next/head'
import '../public/styles/tailwind.css'
import Header from '../src/components/Event/Header'
import MainBanner from '../src/components/Event/MainBanner'
import SubBanner from '../src/components/Event/SubBanner'
import Nav from '../src/components/Nav'
import Calendar from '../src/components/Calendar'
import Time from '../src/components/Time'
import Booking from '../src/components/Booking'
import More from '../src/components/More'
import Footer from '../src/components/Footer'


function MyApp({ Component, pageProps }) {
    return (
        <> 
            <Head>
                <meta charset="utf-8" />
                {/* <link rel="icon" href="/favicon.png" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Doosan Motor Car Inspection Service" />
                <title>Doosan Motor</title>
            </Head>

            <Component {...pageProps} />
            <Nav transparent={false}/>
            <Header title="오픈 기념 이벤트" />
            <Calendar />
            <Time />
            <Booking />
            <More />
            <MainBanner />
            <SubBanner />
            <Footer/>
        </>
    )
}

export default MyApp