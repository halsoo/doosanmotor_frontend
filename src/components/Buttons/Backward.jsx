import Icons from '../Shared/Icons'

function Backward ({ className, onClick, visible }) {

    return (
        <button 
            className={`h-3xl3 flex flex-row justify-center items-center bg-light-grey rounded-12px ${className}`} 
            onClick={onClick}>
            <Icons 
                svgClass="h-36% mr-xs fill-letter"
                name="back-arrow"
                visible={visible}
            />
        </button>
    )
}

export default Backward