import Icons from '../Icons'

function Book ({ className }) {

    const handleButton = () => {

    }

    return (
        <button 
            className={`h-3xl3 flex flex-row justify-center items-center bg-blue ${className}`} 
            onClick={handleButton}>
            <Icons 
                svgClass="h-36% mr-xs fill-white"
                name="cal"/>
            <p className="h4white">검사 예약하기</p>
        </button>
    )
}

export default Book