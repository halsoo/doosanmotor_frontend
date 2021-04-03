import { Component } from 'react'

import Nav from '../src/components/Nav'
import Block from '../src/components/Shared/Block'
import Select from '../src/components/Select'

class Inspections extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contents: [
                {
                    title: "개요",
                    subtitle: "도심 속의 깔끔한 검사소! 두산 검사소!!",
                    body: "뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽",
                    imagePath: "/img/hero.jpg"
                },
                {
                    title: "일반검사1",
                    subtitle: "도심 속의 깔끔한 검사소! 두산 검사소!!",
                    body: "뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽",
                    imagePath: "/img/hero.jpg"
                },
                {
                    title: "일반검사2",
                    subtitle: "도심 속의 깔끔한 검사소! 두산 검사소!!",
                    body: "뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽",
                    imagePath: "/img/hero.jpg"
                },
                {
                    title: "일반검사3",
                    subtitle: "도심 속의 깔끔한 검사소! 두산 검사소!!",
                    body: "뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽",
                    imagePath: "/img/hero.jpg"
                },
                {
                    title: "종합검사",
                    subtitle: "도심 속의 깔끔한 검사소! 두산 검사소!!",
                    body: "뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽",
                    imagePath: "/img/hero.jpg"
                },
            ]
        }

        this.loadContents()
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
                <Select items={this.state.contents}/>
            </div>
        )
    }
}

export default Inspections