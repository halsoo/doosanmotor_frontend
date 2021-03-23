import { Component } from 'react'

class SubBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event_title: "오픈 기념 이벤트",
            event_body: "지금 20,000원 쿠폰 받기!",
        };
    }

    render() {
        return (
            <div className="basic-grid h-4xl mx-xl py-s sm:p-0 lg:desktop-event-padding bg-clip-border bg-letter rounded-12px">
                <img className="col-start-1 col-end-2 ml-m event-icon place-self-center" src="/icons/icons-thumb.png" alt="추천!" />

                <div className="col-start-2 col-end-5 self-center">
                    <p className="h4white">{this.state.event_title}</p>
                    <p className="h4white">{this.state.event_body}</p>
                </div>
            </div>
        )
    }
}

export default SubBanner