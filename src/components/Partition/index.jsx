import Icons from '../Icons'

function Partition ({ iconName, iconCurr, text, border, last, menu }) {

    const borderCss = 
        last ?
            "border-t-px border-b-px"
        :   "border-t-px"
    
    const textTag = 
        menu ?
            (<h2>{text}</h2>)
        :   (<h4>{text}</h4>)
    
    const iconFill = 
        iconCurr ?
            "fill-blue"
        :   "fill-letter"

    return(
        <div className={`${menu ? null : "px-m"} w-full h-3xl3 flex flex-row justify-between items-center ${border ? borderCss : null}`}>
            <div className="h-full flex flex-row items-center">
                <Icons name={iconName} svgClass={`w-auto h-36% ${menu ? "mr-m" : "mr-s"} ${iconFill}`} />
                {textTag}
            </div>

            <Icons name="forward" svgClass="w-auto h-36% fill-letter" />
        </div>
    )
}

export default Partition