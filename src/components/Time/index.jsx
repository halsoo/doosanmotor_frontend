import { useEffect, useState } from 'react'
import Button from './Button'

import dayjs from 'dayjs' 
import 'dayjs/locale/ko'

dayjs.locale('ko')

function Time({ date }) {
        
    const[times, setTimes] = useState([
        {   
            period: "am",
            time: "09:00 - 09:30",
            dead: true,
        },
        {
            period: "am",
            time: "09:30 - 10:00",
            dead: false,
        },
        {
            period: "am",
            time: "10:00 - 10:30",
            dead: false,
        },
        {
            period: "pm",
            time: "01:00 - 01:30",
            dead: false,
        },
        {
            period: "pm",
            time: "01:30 - 02:00",
            dead: true,
        },
        {
            period: "pm",
            time: "02:00 - 02:30",
            dead: false,
        },
    ])
    
    const [selected, setSelected] = useState({
        period: undefined,
        time: undefined,
    })

    useEffect( () => {
        setSelected({
            period: undefined,
            time: undefined,
        })
    }, [date])
    

    const handleButton = (period, time) => (e) => {
        e.preventDefault()
        
        setSelected({
                period,
                time,
        })
    }

    
    const amTimes = times.reduce( (acc, cur) => {
        cur.period == 'am' ? acc.push(cur) : null
        return acc
    }, [])

    const pmTimes = times.reduce( (acc, cur) => {
        cur.period == 'pm' ? acc.push(cur) : null
        return acc
    }, [])

    return (
        <form className="mt-xl mb-4xl2 px-xl lg:desktop-padding">
            <div className="mb-xl w-full h-auto flex flex-col">
                <h4>오전</h4>
                <div className="mt-xs basic-grid grid-flow-row">
                    {amTimes.map(time => {
                        const deco = selected.period === time.period && selected.time === time.time 
                        return <Button 
                            className={`col-span-2 ${deco}`}
                            dead={time.dead}
                            selected={deco}
                            time={time.time}
                            onClick={handleButton(time.period, time.time)}
                            key={`${time.period}-${time.time}`}
                        />
                    })}
                </div>
            </div>
            <div>
                <h4>오후</h4>
                <div className="mt-xs basic-grid grid-flow-row">
                    {pmTimes.map(time => {
                        const deco = selected.period === time.period && selected.time === time.time 
                        return <Button 
                            className={`col-span-2`}
                            dead={time.dead}
                            selected={deco}
                            time={time.time}
                            onClick={handleButton(time.period, time.time)}
                            key={`${time.period}-${time.time}`}
                        />
                    })}
                </div>
            </div>
        </form>
    )
}

export default Time