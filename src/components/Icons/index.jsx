import { useEffect, useRef } from "react";
import { centerIcon } from "../../../public/scripts/StyleChange.js"
const iconSet = "/icons/icons.svg"

function Icons ({ name, svgClass}) {

    const ref = useRef()

    useEffect(() => {
        centerIcon(ref.current)
    })

    return(
        <svg className={svgClass}>
            <use ref={ref} href={`${iconSet}#${name}`} />
        </svg>
    )
}

export default Icons