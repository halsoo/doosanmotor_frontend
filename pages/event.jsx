import { Component } from 'react'

import Nav from '../src/components/Nav'
import Block from '../src/components/Shared/Block'
import EventHeader from '../src/components/Event/EventHeader'
import ContentsBox from '../src/components/Shared/ContentsBox'

class Event extends Component {
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

    render() {
        return (
            <div className="w-full">
                <Nav/>

                <Block />
                <EventHeader
                    title={this.state.eventInfo.title}
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

            </div>
        )
    }
}

export default Event
