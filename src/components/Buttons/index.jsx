import Confirm from './Confirm'
import Cancel from './Cancel'
import Book from './Book'
import Phone from './Phone'
import Kakao from './Kakao'
import Backward from './Backward'

const components = {
    confirm: Confirm,
    cancel: Cancel,
    book: Book,
    phone: Phone,
    kakao: Kakao,
    backward: Backward,
}

function Buttons ({ name, className }) {

    const RenderElem = components[name]

    return (
        <RenderElem className={className} />
    )
}

export default Buttons