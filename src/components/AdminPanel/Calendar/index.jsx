import { Calendar as AntCalendar } from 'antd'
import locale from './locale.json'

import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

import CustomHeader from './CustomHeader'
import Buttons from '../../Buttons'
import { weekdays } from '../../../scripts/Conversions'

function Calendar({ className, totalBooking, selected, onSelect, onBlock }) {
    return (
        <div className={`${className} h-full`}>
            <h2 className="h2admin">{`${selected.format('MM')}월 ${selected.format('DD')}일 ${weekdays[selected.format('d')]}요일`}</h2>
            <h3 className="h3admin">{`${totalBooking}건 예약됨`}</h3>

            <Buttons
                className="w-full h-3xl mt-xl"
                name="blockBooking"
                text="전체"
                onClick={onBlock(null)}
            />

            <div className="w-full mt-xl p-xs text-center bg-white">
                <AntCalendar
                    value={selected}
                    onSelect={onSelect}
                    headerRender={CustomHeader}
                    locale={locale}
                    fullscreen={false}
                />
            </div>
        </div>
    )
}

export default Calendar
