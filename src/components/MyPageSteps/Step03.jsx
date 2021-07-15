import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

import Icons from '../Shared/Icons'
import Buttons from '../Buttons'

function StepThree ({ onChange, data }) {

    const onEditClick = () => null
    const onCancelClick = () => onChange(null)

    const today = dayjs()
    const bookedDateStart = dayjs(new Date(data.date.start * 1000))
    const bookedDateEnd = dayjs(new Date((data.date.start + data.date.duration) * 1000))
    const customerInfo = {
        ...data.customer,
        plate: data.registrationNumber
    }        
    const timeInfo = {
        diff: parseInt(bookedDateStart.diff(today) / (1000 * 60 * 60 * 24)), // toSeconds, toMinutes, toHours, toDays
        month: bookedDateStart.month() + 1,
        date: bookedDateStart.date(),
        year: bookedDateStart.year(),
        start: {
            period: bookedDateStart.format('a') === 'am' ? '오전' : '오후',
            hour: bookedDateStart.format('hh'),
            minute: bookedDateStart.format('mm')
        },
        end: {
            period: (
                bookedDateEnd.format('a') === bookedDateStart.format('a')
                    ? ''
                    : 'am'
                        ? '오전 ' 
                        : '오후 '
            ),
            hour: bookedDateEnd.format('hh'),
            minute: bookedDateEnd.format('mm')
        }
    }

    return (
        <div className="w-full px-xl lg:desktop-padding">
            <div className="h-2xl2 -mx-xl px-xl flex items-center bg-light-grey">
                <a href="/" className="flex flex-row items-center">
                    <Icons
                        name="backward"
                        svgClass="h-xl fill-blue"
                    />
                    <p className="p1">
                        돌아가기
                    </p>
                </a>
            </div>
            <h2 className="mt-xl">
                다가오는 예약을 <br/>
                취소하거나 수정하시겠어요?
            </h2>
            <p className="p2op60 mt-xs">
                취소를 결정하면 돌이킬 수 없습니다.
            </p>

            <div className="w-full mt-2xl p-m bg-light-grey">
                <h4 className="mb-xs">
                    {`${timeInfo.diff}일 후, ${timeInfo.month}월 ${timeInfo.date}일 (${timeInfo.year})`}
                </h4>

                <p className="p1">
                    {`${timeInfo.start.period} ${timeInfo.start.hour}시 ${timeInfo.start.minute}분`}
                    &nbsp; - &nbsp;
                    {`${timeInfo.end.period}${timeInfo.end.hour}시 ${timeInfo.end.minute}분`}
                </p>
                <p className="p1">
                    {`${customerInfo.plate} (${customerInfo.name} 고객님)`}
                </p>
            </div>
            
            <Buttons
                className="w-full mt-xs"
                name="cancel"
                onClick={onCancelClick}
            />
            
            <div className="w-full sm:px-xl lg:desktop-padding absolute left-0 bottom-xl hidden">
                <Buttons 
                    className="w-full" 
                    name="edit"
                    onClick={onEditClick}
                />
            </div>
        </div>
    )
}

export default StepThree