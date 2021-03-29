import Icons from '../Icons'

function Backward ({ className, visible }) {

    const handleButton = () => {

    }

    return (
        <button 
            className={`h-3xl3 flex flex-row justify-center items-center bg-light-grey rounded-12px ${className}`} 
            onClick={handleButton}>
            <Icons 
                svgClass="h-36% mr-xs fill-letter"
                name="backward"
                visible={visible}
            />
        </button>
    )
}

export default Backward