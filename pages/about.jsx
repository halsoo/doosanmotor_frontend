import { Component, createRef } from 'react'
import { throttle } from 'throttle-debounce'

import Nav from '../src/components/Nav'
import ImageHeader from '../src/components/ImageHeader'
import ContentsBox from '../src/components/Shared/ContentsBox'
import MainBanner from '../src/components/Event/MainBanner'

import hero from '../public/img/hero.jpg'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // eventInfo: undefined,
            eventInfo: {
                title: "오픈 기념 이벤트",
                body: "지금 20,000원 쿠폰 받기!"
            },
            contents: [
                {
                    title: null,
                    subtitle: "도심 속의 깔끔한 검사소! 두산 검사소!!",
                    body: "뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽",
                    imagePath: "/img/hero.jpg"
                },
                {
                    title: null,
                    subtitle: "그러니까 여기 오십쇼~!",
                    body: "뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽",
                    imagePath: null
                },
            ],
            buttonRef: createRef(),
            navRef: createRef(),
            navTransparent: true,
        }

        this.loadEvent()
        this.loadContents()
    }

    loadEvent = async () => {
        // some functions that loads event info...
        // setState(eventInfo)
    }

    loadContents = async () => {
        // some functions that loads contents...
        // setState(contents)
    }

    triggerTransition = (e) => {
        const viewport = document.documentElement
        const offset = 5

        if (viewport.scrollTop > offset) {
            this.setState({
                ...this.state,
                navTransparent: false,
            })
            return
        }

        this.setState({
            ...this.state,
            navTransparent: true,
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', throttle(50, this.triggerTransition))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', throttle(50, this.triggerTransition))
    }

    render() {
        return (
            <div className="w-full">
                <Nav 
                    bgTransition="nav-about-background-transition"
                    fillTransition="nav-about-fill-transition"
                    transparent={this.state.navTransparent}
                    divider={!this.state.navTransparent}
                    refer={this.state.navRef}
                />

                <ImageHeader
                    className={`w-full ${this.state.eventInfo === undefined ? "h-screen" : "h-landing-img"}`}
                    src={hero}
                />

                <div className="sm:mx-xl lg:desktop-margin mt-2xl2 mb-3xl">
                {
                    this.state.contents.map((content, idx, arr) => {
                        const last = idx === arr.length - 1 ? true : false
                        return (
                            <ContentsBox
                                contents={content}
                                last={last}
                                key={`${idx}-${content.title}-${content.subtitle}-${content.imagePath}`}
                            />
                        )
                    })
                }
                </div>
                
                {this.state.eventInfo !== undefined ? <MainBanner event={this.state.eventInfo} /> : null }

            </div>
        )
    }
}

export default About
