import Confirm from './Confirm'
import Cancel from './Cancel'
import Book from './Book'
import Phone from './Phone'
import Kakao from './Kakao'
import KakaoChannel from './KakaoChannel'
import Backward from './Backward'

const components = {
    confirm: Confirm,
    cancel: Cancel,
    book: Book,
    phone: Phone,
    kakao: Kakao,
    kakaoChannel: KakaoChannel,
    backward: Backward,
}

function Buttons ({ className, name, text=null, disabled=false, disabledText=null, onClick=null, refer=null, visible=true }) {

    const RenderElem = components[name]

    return <RenderElem 
        className={className} 
        text={text}
        disabled={disabled}
        disabledText={disabledText}
        onClick={onClick} 
        refer={refer} 
        visible={visible} 
    />
}

export default Buttons