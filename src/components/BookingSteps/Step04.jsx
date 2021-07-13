import Buttons from '../Buttons'
import Icons from '../Shared/Icons'

import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

function StepFour({ data }) {
    const info = data.bookingInfo
    const start = dayjs(new Date(info.date.start * 1000))
    const end = dayjs(new Date((info.date.start + info.date.duration) * 1000))

    const year = start.year()
    const month = start.month() + 1
    const date = start.date()
    
    const hourStart = start.hour()
    const minStart = start.minute()
    const hourEnd = end.hour()
    const minEnd = end.minute()

    const period = hourStart > 11 ? '오후' : '오전'
    
    return (
        <div className="w-full px-xl flex flex-col items-center">
            <div className="w-5xl2 h-5xl2 mt-2xl2 flex justify-center items-center bg-light-grey rounded-half">
                <Icons
                    name="done"
                    svgClass="h-3xl fill-blue opacity-85"
                />
            </div>

            <h2 className="h2centerblue mt-xl">예약이 완료되었습니다!</h2>

            <div className="w-full h-event-header mt-2xl2 py-xl px-m bg-light-grey">
                <p className="p1centerop30">
                    [<span className="h4center">{info.customer.name}</span> 고객님의 <span className="h4center">{info.registrationNumber}</span> 차량]
                    <br/>
                    <br/>
                    <span className="h4center">{month}월 {date}일 ({year}년)</span>
                    <br/>
                    <span className="h4center">{period} {hourStart}시 {minStart}분 - {hourEnd}시 {minEnd}분</span> 사이
                    <br/>
                    검사 진행합니다.
                    <br/>
                    <br/>
                    검사 종류와 차종 등에 따라 검사 소요시간에 변동이 있을 수 있습니다.
                </p>
            </div>

            <div className="mt-xs">
                <p className="p3centerop60">
                    내용을 잘못 입력하셨나요? &nbsp;
                    <a href="/">
                        바로가기
                    </a>
                </p>
            </div>

            <div className="w-full sm:px-xl lg:desktop-padding absolute inset-x-auto bottom-xl">
                <Buttons
                    className="w-full h-3xl2"
                    name="confirm"
                    text="확인"
                    onClick={() => window.location.replace('/')}
                />
            </div>
        </div>
    )
}

export default StepFour