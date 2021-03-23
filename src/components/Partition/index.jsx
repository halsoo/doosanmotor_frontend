import {Component} from 'react'
import Icons from '../Icons'

class More extends Component {

    render() {
        return(
            <div className={`px-m w-full h-3xl3 flex flex-row justify-between items-center border-t-px ${this.props.last ? "border-b-px" : ""}`}>
                <div className="h-full flex flex-row items-center">
                    <Icons name={this.props.iconName} svgClass="w-auto h-36% mr-s fill-letter" />
                    <h4>{this.props.text}</h4>
                </div>

                <Icons name="forward" svgClass="w-auto h-50% fill-letter" />
            </div>
        )
    }
}

export default More