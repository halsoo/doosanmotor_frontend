import Book from './Book'
import BlockBooking from './BlockBooking'
import Confirm from './Confirm'
import Cancel from './Cancel'
import CheckBox from './CheckBox'
import Edit from './Edit'
import Phone from './Phone'
import Kakao from './Kakao'
import KakaoChannel from './KakaoChannel'
import Backward from './Backward'

const components = {
    book: Book,
    blockBooking: BlockBooking,
    confirm: Confirm,
    cancel: Cancel,
    checkbox: CheckBox,
    edit: Edit,
    phone: Phone,
    kakao: Kakao,
    kakaoChannel: KakaoChannel,
    backward: Backward,
}

function Buttons ({ className, name, text=null, value=false, disabled=false, disabledText=null, onClick=null, refer=null, visible=true }) {

    const RenderElem = components[name]

    return <RenderElem 
        className={className} 
        text={text}
        value={value}
        disabled={disabled}
        disabledText={disabledText}
        onClick={onClick} 
        refer={refer} 
        visible={visible} 
    />
}

export default Buttons