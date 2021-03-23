import { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="h-screen30 flex justify-center items-center bg-clip-border bg-letter">
                <div className="">
                    <p className="h4centeralert">EVENT</p>
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default Header