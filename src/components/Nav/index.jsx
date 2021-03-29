import { useState } from 'react'
import { useRouter } from 'next/router'

import Divider from '../Divider'
import Menu from './Menu'
import Logos from '../Logos'
import Icons from '../Icons'


function Nav( {className, transparent = false, divider = true, refer = null}) {
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
        <nav className={`w-screen fixed z-30 ${className}`} ref={refer}>
            <div className={`h-4xl flex justify-between items-center sm:px-xl lg:desktop-padding py-lg ${fill.bg}`}>
                <Logos 
                    svgClass="w-auto h-full"
                    name={transparent ? "doosan_white" : "doosan"} 
                    visible={refer.current}
                />
                <button
                    className="h-full"
                    onClick={() => setPop(!pop)}
                >
                    <Icons 
                        svgClass={`w-auto h-full ${fill.icon}`}
                        name="menu"
                        visible={refer.current}
                    />
                </button>
            </div>

            {
                divider && pop 
                    ?   <Divider menu={true} /> 
                    :   divider && !pop
                        ?   <Divider menu={false} />
                        :   <Divider menu={false} />
            }

            <Menu pathname={router.pathname} visible={pop}/>
        </nav>
    )
}

export default Nav