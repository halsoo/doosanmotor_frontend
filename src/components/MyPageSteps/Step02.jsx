import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

import Edit from './Edit'
import Past from './Past'

function StepTwo ({ onChange, step, data }) {
    const handleButton = (idx) => () => onChange(idx)

    const today = dayjs()
    const processedData = data.reduce((arr, cur, index) => {
        const customerInfo = {
            ...cur.customer,
            plate: cur.registrationNumber
        }

        const bookedDateStart = dayjs(new Date(cur.date.start * 1000))
        const bookedDateEnd = dayjs(new Date((cur.date.start + cur.date.duration) * 1000))
        const timeInfo = {
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
        if(bookedDateStart.isAfter(today)) arr.upcoming.push({
            index,
            timeInfo: {
                ...timeInfo,
                diff: parseInt(bookedDateStart.diff(today) / (1000 * 60 * 60 * 24)) // toSeconds, toMinutes, toHours, toDays
            },
            customerInfo
        })
        else arr.past.push({ index, timeInfo, customerInfo })

        return arr
    }, {
        upcoming: [], 
        past: []
    })

    return (
        <div className="w-full mt-xl px-xl pb-xl lg:desktop-padding">
            <h2>다가오는 예약</h2>

            <div className="mt-xl flex flex-col">
                { processedData.upcoming.map((pd, idx) => (
                    <Edit
                        className={`h-5xl3 ${idx !== 0 ? 'mt-m' : ''} bg-light-grey`}
                        timeInfo={pd.timeInfo}
                        customerInfo={pd.customerInfo}
                        onButtonClick={handleButton(pd.index)}
                        key={`mypage-step-${step + 1}-upcoming-${idx}`}
                    />
                ))}
            </div>

            <div className="mt-3xl -mx-xl p-xl flex flex-col bg-light-grey">
                <h4> 지난 예약 </h4>
                { processedData.past.map((pd, idx) => (
                    <Past
                        className="mt-s"
                        timeInfo={pd.timeInfo}
                        customerInfo={pd.customerInfo}
                        needBottomBorder={idx === processedData.past.length - 1 ? true : false}
                        key={`mypage-step-${step + 1}-past-${idx}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default StepTwo