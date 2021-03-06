import Icons from '../Shared/Icons'

function KakaoChannel ({ className, visible }) {

    const handleButton = () => {

    }

    return (
        <button 
            className={`h-3xl3 flex flex-row justify-center items-center bg-kakao-yellow rounded-12px ${className}`} 
            onClick={handleButton}
        >
            <Icons 
                svgClass="h-50% mr-xs fill-letter"
                name="kakao"
                visible={visible}
            />
            <p className="h4centerkakao">카카오톡 채널 추가하기</p>
        </button>
    )
}

export default KakaoChannel