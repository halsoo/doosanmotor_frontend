import { useEffect, useRef } from "react";
import { centerLogo } from "../../../public/scripts/StyleChange.js"
const logoSet = "/logos/logos.svg"

function Logos ({ name, svgClass}) {

    const ref = useRef()

    useEffect(() => {
        centerLogo(ref.current)
    })

    return (
        <svg className={svgClass}>
            <use ref={ref} href={`${logoSet}#${name}`}/>
        </svg>
    )
}

export default Logos