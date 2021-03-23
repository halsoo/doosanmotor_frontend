import {Component} from 'react'
import Logos from '../Logos'
import Icons from '../Icons'

class Nav extends Component {

    render() {
        const fill = this.transparent ? {
            bg: "bg-transparent",
            icon: "fill-white",
        } : {
            bg: "bg-white",
            icon: "fill-letter",
        }

        return(
            <div className={`h-4xl flex justify-between items-center sm:px-xl lg:desktop-padding py-lg ${fill.bg}`}>
                <Logos 
                    svgClass="w-auto h-full"
                    name={this.props.transparent ? "doosan_white" : "doosan"} 
                />
                <Icons 
                    svgClass={`w-auto h-full ${fill.icon}`}
                    name="menu"
                />
            </div>
        )
    }
}

export default Nav