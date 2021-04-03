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

function Buttons ({ name, className, refer, visible=true }) {

    const RenderElem = components[name]

    return (
        <RenderElem className={className} refer={refer} visible={visible} />
    )
}

export default Buttons