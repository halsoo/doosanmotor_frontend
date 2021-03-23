import { useEffect, useRef } from "react";
import { goIcon } from "../../../public/scripts/StyleChange.js"
const iconSet = "/icons/icons.svg"

function Icons ({ name, svgClass}) {

    const ref = useRef()

    useEffect(() => {
        goIcon(ref)
    })

    return(
        <svg className={svgClass}>
            <use ref={ref} href={`${iconSet}#${name}`} />
        </svg>
    )
}

export default Icons