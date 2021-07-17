import { useState, useEffect } from 'react'

import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

import PeriodLabel from './PeriodLabel'
import TimeBlock from './TimeBlock'

function PeriodBlock({ className, period, data, onBlock }) {
    const periodStr = period === 'am' ? '오전' : '오후'
    const totalPeriodBooking = data.bookingInfos.length
    const now = data.selectedDate.hour(10).minute(30).unix()

    const hours = data.settings.operatingHours

    // sort data.bookingInfo by time
    const sortedBookingInfos = data.bookingInfos.reduce((arr, cur) => {
        const key = cur.date.start
        arr[key] = arr[key] ? [...arr[key], cur] : [cur]
        return arr
    }, {})

    return (
        <div className={className}>
            <PeriodLabel
                className="w-full mb-2xl"
                period={periodStr}
                totalBooking={totalPeriodBooking}
                onBlock={onBlock(period)}
            />
            {
                hours.map(h => (
                    <TimeBlock
                        timePos={ 
                            now < h + data.settings.duration && now >= h 
                                ? 0
                                : now < h + data.settings.duration
                                    ? 1
                                    : -1
                        }
                        date={{
                            start: h,
                            duration: data.settings.duration
                        }}
                        max={data.settings.maxBooking}
                        bookingInfos={sortedBookingInfos[String(h)]}
                        onBlock={onBlock('checked')}
                    />
                )) 
            }
        </div>
    )
}

export default PeriodBlock