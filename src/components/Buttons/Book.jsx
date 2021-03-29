import Icons from '../Icons'

function Book ({ className, refer, visible }) {

    const handleButton = () => {

    }

    return (
        <button 
            ref={refer}
            className={`h-3xl3 flex flex-row justify-center items-center bg-blue ${className}`} 
            onClick={handleButton}>
            <Icons 
                svgClass="h-36% mr-xs fill-white"
                name="calendar"
                visible={visible}
            />
            <p className="h4white">검사 예약하기</p>
        </button>
    )
}

export default Book