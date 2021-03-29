import Icons from '../Icons'

function Phone ({ className, visible }) {

    const handleButton = () => {

    }

    return (
        <button 
            className={`h-3xl flex flex-row justify-center items-center bg-letter rounded-12px ${className}`} 
            onClick={handleButton}>
            <Icons 
                svgClass="h-50% mr-xs fill-white"
                name="phone"
                visible={visible}
            />
            <p className="h4centerwhite">전화하기</p>
        </button>
    )
}

export default Phone