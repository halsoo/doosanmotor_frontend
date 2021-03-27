import { useState } from 'react'
import { useRouter } from 'next/router'

import Divider from '../Divider'
import Menu from './Menu'
import Logos from '../Logos'
import Icons from '../Icons'


function Nav( {transparent, divider}) {
    const router = useRouter()

    const [pop, setPop] = useState(false)

    const fill = transparent ? {
        bg: "bg-transparent",
        icon: "fill-white",
    } : {
        bg: "bg-white",
        icon: "fill-letter",
    }

    return(
        <div className="w-screen fixed z-10">
            <div className={`h-4xl flex justify-between items-center sm:px-xl lg:desktop-padding py-lg ${fill.bg}`}>
                <Logos 
                    svgClass="w-auto h-full"
                    name={transparent ? "doosan_white" : "doosan"} 
                />
                <button
                    className="h-full"
                    onClick={() => setPop(!pop)}
                >
                    <Icons 
                        svgClass={`w-auto h-full ${fill.icon}`}
                        name="menu"
                    />
                </button>
            </div>

            {
                divider && pop 
                    ?   <Divider menu={true} />
                    :   <Divider menu={false} />
            }

            { pop ? <Menu pathname={router.pathname} /> : null }
        </div>
    )
}

export default Nav