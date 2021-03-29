import { useEffect, useRef } from "react";
import { centerIcon } from "../../scripts/StyleChange"
const iconSet = "/icons/icons.svg"

function Icons ({ name, svgClass, visible=true}) {

    const ref = useRef()

    useEffect(() => {
        centerIcon(ref.current)
    }, [visible])

    return(
        <svg className={svgClass}>
            <use ref={ref} href={`${iconSet}#${name}`} />
        </svg>
    )
}

export default Icons