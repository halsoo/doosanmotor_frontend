import Icons from '../Icons'

function Confirm ({ className, visible }) {

    const handleButton = () => {

    }

    return (
        <button 
            className={`h-3xl3 flex flex-row justify-center items-center bg-blue rounded-12px ${className}`} 
            onClick={handleButton}>
            <Icons 
                svgClass="h-36% mr-xs fill-white"
                name="check"
                visible={visible}
            />
            <p className="h4white">확인</p>
        </button>
    )
}

export default Confirm