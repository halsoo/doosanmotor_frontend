import { useState, useEffect } from 'react'

import Month from './Month'
import Day from './Day'
import TimeList from './TimeList'

function Calendar ({ className, dates, values, onChange }) {
    const [selected, setSelected] = useState(values ? values : {
        calendarIndex: undefined,
        month: undefined,
        dateIndex: undefined,
        date: undefined,
        period: undefined,
        time: undefined,
    })

    const onDateSelect = (calendarIndex, month, dateIndex, date) => (e) => {
        e.preventDefault()

        const target = e.currentTarget.lastChild
        const targetHeight = target.clientHeight
        
        target.style.height = `${targetHeight}px`
        target.style.width = `${targetHeight}px`

        setSelected({ 
            calendarIndex, 
            month,
            dateIndex,
            date,
            period: undefined,
            time: undefined
        })
    }

    const onTimeSelect = ({ period, time}) => {
        setSelected({
            ...selected,
            period,
            time
        })
    }

    useEffect(() => onChange(selected), [selected])

    return (
        <div>
            <div className="w-full h-4xl2 px-xl lg:desktop-padding flex items-center bg-light-grey">
                <div className="w-full h-full flex flex-row justify-start items-center overflow-x-auto overscroll-x-auto">
                    {dates.map((elem, calIdx) => {
                        let result = []

                        const MonthComp = 
                            <Month 
                                className="min-w-10% mr-xs"
                                month={elem.month} 
                                key={`${elem.month}월`}/>

                        const DaysComp = []
                        elem.dates.forEach((date, dIdx) => {
                            const deco = 
                                selected.month === elem.month && selected.date === date[0]
                                ? "h4centerwhite bg-blue rounded-half text-white"
                                : "p1center bg-transparent rounded-none text-letter"
                            DaysComp.push(
                                <Day 
                                    buttonClass="min-w-10% mr-xs"
                                    dayClass={deco}
                                    dayOfMonth={date[0]} 
                                    dayOfWeek={date[1]}
                                    onClick={onDateSelect(calIdx, elem.month, dIdx, date[0])}
                                    key={`${elem.month}월-${date[0]}일`}/>)
                        })

                        result.push(MonthComp)
                        result = result.concat(DaysComp)

                        return result
                    })}
                </div>
            </div>

            <TimeList
                times={selected.date ? dates[selected.calendarIndex].dates[selected.dateIndex][2] : undefined}
                onChange={onTimeSelect}
                prevValues={ selected.period && selected.time ? {
                    period: selected.period,
                    time: selected.time
                } : undefined}
            />

        </div>
    )
}

export default Calendar