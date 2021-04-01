import Icons from './Icons'

function Partition ({ iconName, iconCurr, text, border, last, menu, visible=true }) {

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
        <div className={`${menu ? 'h-2xl2 mb-m' : "h-3xl3 px-m"} flex flex-row justify-between items-center ${border ? borderCss : ''}`}>
            <div className="h-full flex flex-row items-center">
                <Icons 
                    name={iconName} 
                    svgClass={`w-auto h-36% ${menu ? "mr-m" : "mr-s"} ${iconFill}`} 
                    visible={visible}
                />
                {textTag}
            </div>

            <Icons 
                name="forward" 
                svgClass="w-auto h-36% fill-letter" 
                visible={visible}
            />
        </div>
    )
}

export default Partition