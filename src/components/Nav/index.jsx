import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import Divider from './Divider'
import Menu from './Menu'
import Logos from '../Shared/Logos'
import Icons from '../Shared/Icons'

function Nav({ className, posTransition, bgTransition, fillTransition , transparent = false, divider = true, refer = null }) {
    const router = useRouter()

    const [pop, setPop] = useState(false)
    const dividerRef = useRef()
    const navRef = refer !== null ? refer : useRef()

    useEffect(() => {
        const elem = navRef.current

        const eventTypes = ['scroll', 'touchmove', 'mousewheel', 'wheel', 'DOMMouseScroll']

        eventTypes.forEach(type => {
            elem.addEventListener(type, preventScroll, { capture: true, passive : false })
        })

        return () => {
            eventTypes.forEach(type => {
                elem.removeEventListener(type, preventScroll)
            })
        }
    }, [])

    useEffect(() => {
        const dividerElem = dividerRef.current

        if(dividerElem !== null && dividerElem !== undefined) {
            if (transparent) {
                dividerElem.classList.remove('border-divider')
                dividerElem.classList.add('border-transparent')
                return
            }

            dividerElem.classList.remove('border-transparent')
            dividerElem.classList.add('border-divider')
        }

    }, [transparent, pop])

    function preventScroll(e) {
        e.preventDefault()
        e.stopPropagation()
    }

    const fill = pop && transparent
        ?   {
                bg: "bg-white",
                icon: "fill-letter",
            }
        :   transparent && !pop
            ?   {
                    bg: "bg-transparent",
                    icon: "fill-white",
                } 
            :   {
                    bg: "bg-white",
                    icon: "fill-letter",
                }

    const transition = pop 
        ?   {
                pos: '',
                bg: '',
                fill: '',
            }
        :   {
                pos: posTransition,
                bg: bgTransition,
                fill: fillTransition,
            }

    return(
        <nav className={`w-screen fixed z-30 ${className} ${transition.pos}`} ref={navRef}>
            <div className={`h-4xl sm:px-xl lg:desktop-padding py-lg flex justify-between items-center ${fill.bg} ${transition.bg}`}>
                <Logos 
                    svgClass="w-auto h-full"
                    name={transparent  && !pop ? "doosan_white" : "doosan"} 
                />
                <button
                    className="h-full"
                    onClick={() => setPop(!pop)}
                >
                    <Icons 
                        svgClass={`w-auto h-full ${fill.icon} ${transition.fill}`}
                        name="menu"
                        visible={true}
                    />
                </button>
            </div>

            {
                pop 
                    ?   <Divider menu={true}/> 
                    :   divider && !pop
                        ?   <Divider menu={false} refer={dividerRef}/>
                        :   !divider
                            ?   null
                            :   <Divider menu={false} refer={dividerRef}/>
            }

            <Menu pathname={router.pathname} visible={pop}/>
        </nav>
    )
}

export default Nav