import { useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

import Month from './Month'
import Day from './Day'

import { dateToWeekday } from './Conversions'

dayjs.locale('ko')

// date debugging
// import customParseFormat from 'dayjs/plugin/customParseFormat'
// dayjs.extend(customParseFormat)

function Calendar ({ className }) {
    //const date = dayjs("2020-12-01", "YYYY-MM-DD")
    const [selected, setSelected] = useState({
        month: undefined,
        date: undefined,
    })

    const handleButton = (month, date) => e => {   
        e.preventDefault()

        const target = e.currentTarget.lastChild
        const targetHeight = target.clientHeight
        
        target.style.height = `${targetHeight}px`
        target.style.width = `${targetHeight}px`

        setSelected({
            month,
            date
        })
    }

    const date = dayjs()
    const dateList = listMaker(date)

    return (
        <div className={`w-full h-4xl2 px-xl lg:desktop-padding flex items-center bg-light-grey ${className}`}>
            <div className="w-full h-full flex flex-row justify-start items-center overflow-x-auto overscroll-x-auto">
                {dateList.map((elem) => {
                    let result = []

                    const MonthComp = 
                        <Month 
                            className="min-w-10% mr-xs"
                            month={elem.month} 
                            key={`${elem.month}월`}/>

                    const DaysComp = []
                    elem.days.forEach((day, idx) => {
                        const deco = 
                            selected.month === elem.month && selected.date === day[0]
                            ? "h4centerwhite bg-blue rounded-half text-white"
                            : "p1center bg-transparent rounded-none text-letter"
                        DaysComp.push(
                            <Day 
                                buttonClass="min-w-10% mr-xs"
                                dayClass={deco}
                                dayOfMonth={day[0]} 
                                dayOfWeek={day[1]}
                                onClick={handleButton(elem.month, day[0])}
                                key={`${elem.month}월-${day}일`}/>)
                    })

                    result.push(MonthComp)
                    result = result.concat(DaysComp)

                    return result
                })}
            </div>
        </div>
    )
}

const listMaker = (dayObj) => {
    const thisMonthObj = dayObj
    const nextMonthObj = dayObj.month(thisMonthObj.month() + 1) // .month() => 0~11

    //all number
    const thisMonthCurrent = thisMonthObj.date()
    const thisMonthEnd = thisMonthObj.endOf('month').date()

    const nextMonthStart = nextMonthObj.startOf('month').date()
    const nextMonthEnd = nextMonthObj.endOf('month').date()

    let list = [
        [thisMonthObj, thisMonthCurrent, thisMonthEnd],
        [nextMonthObj, nextMonthStart, nextMonthEnd],
    ]

    let result = []

    list.forEach( (elem) => {
        const obj = elem[0] // for year calculation
        const dateRange = elem.slice(1, 3)
        const month = obj.month() + 1 // .month() => 0~11

        let subList = {}
        subList["month"] = month
        subList["days"] = []

        for (let d = dateRange[0]; d < dateRange[1] + 1; d ++) {
            let dayNWeekday = []

            const weekday = dateToWeekday(obj, d)
            
            dayNWeekday.push(d, weekday)
            subList["days"].push(dayNWeekday)
        }

        result.push(subList)
    })

    return result
}

export default Calendar