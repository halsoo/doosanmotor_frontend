import { Component, createRef } from 'react'
import { throttle } from 'throttle-debounce'

import Nav from '../src/components/Nav'
import MainBanner from '../src/components/Event/MainBanner'
import ImageHeader from '../src/components/ImageHeader'
import LgAddress from '../src/components/Address/LgAddress'
import More from '../src/components/More'
import SubBanner from '../src/components/Event/SubBanner'
import Buttons from '../src/components/Buttons'

import hero from '../public/img/hero.jpg'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // eventInfo: undefined,
            eventInfo: {
                title: "오픈 기념 이벤트",
                body: "지금 20,000원 쿠폰 받기!"
            },
            buttonRef: createRef(),
            navRef: createRef(),
        }

        this.loadEvent()
    }

    loadEvent = async () => {
        // some functions that loads event info...
        // setState(eventInfo)
    }

    triggerTransition = (e) => {
        const button = this.state.buttonRef.current ? this.state.buttonRef.current : null
        const nav = this.state.navRef.current ? this.state.navRef.current : null

        const viewport = document.documentElement
        const offset = 5
        
        const buttonBefore = ["w-87%", "bottom-5%", "rounded-12px"]
        const buttonAfter = ["w-full", "bottom-0", "rounded-0"]

        const navBefore = ["opacity-0", "-top-4xl"]
        const navAfter = ["opacity-100", "top-0"]

        if(button !== null && nav !== null) {

            if (viewport.scrollTop > offset) {

                button.classList.remove(...buttonBefore)
                button.classList.add(...buttonAfter)
                nav.classList.remove(...navBefore)
                nav.classList.add(...navAfter)
                return
            }

            button.classList.remove(...buttonAfter)
            button.classList.add(...buttonBefore)
            nav.classList.remove(...navAfter)
            nav.classList.add(...navBefore)
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', throttle(50, this.triggerTransition))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', throttle(50, this.triggerTransition))
    }

    render() {
        return (
            <div className="w-full h-full">
                <Nav className="opacity-0 -top-4xl nav-transition" refer={this.state.navRef}/>
                {this.state.eventInfo !== undefined ? <MainBanner event={this.state.eventInfo} /> : null }
                <ImageHeader
                    className={`w-full ${this.state.eventInfo === undefined ? "h-screen" : "h-landing-img"}`}
                    src={hero}
                />

                
                <LgAddress className="mt-3xl" />

                <More className="mt-3xl3" />

                <SubBanner 
                    className="mt-xl mb-3xl"
                    event={this.state.eventInfo}
                />

                <Buttons
                    refer={this.state.buttonRef}
                    name="book"
                    className="w-87% mx-auto button-transition fixed bottom-5% inset-x-0 rounded-12px z-10"
                />
            </div>
        )
    }
}

export default Home
