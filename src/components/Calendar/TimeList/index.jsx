import { useState, useEffect } from 'react'

import Time from './Time'

function TimeList({ times, onChange, prevValues }) {

    const[selected, setSelected] = useState(prevValues ? prevValues : {
        period: undefined,
        time: undefined
    })

    const onSelect = (period, time) => (e) => {
        e.preventDefault()
        setSelected({ period, time })
    }

    useEffect(() => onChange(selected), [selected])

    return times ? (
        <div className="mt-xl px-xl lg:desktop-padding">
            <div className="mb-xl w-full h-auto flex flex-col">
                <h4>오전</h4>
                <div className="mt-xs basic-grid grid-flow-row">
                    {times.filter(time => time.period === 'am').map(time => {
                        const deco = selected.period === time.period && selected.time === time.time 
                        return <Time
                            className={`col-span-2 ${deco}`}
                            dead={time.dead}
                            selected={deco}
                            time={time.time}
                            onClick={onSelect(time.period, time.time)}
                            key={`${time.period}-${time.time}`}
                        />
                    })}
                </div>
            </div>
            <div className="mb-xl w-full h-auto flex flex-col">
                <h4>오후</h4>
                <div className="mt-xs basic-grid grid-flow-row">
                    {times.filter(time => time.period === 'pm').map(time => {
                        const deco = selected.period === time.period && selected.time === time.time 
                        return <Time 
                            className={`col-span-2`}
                            dead={time.dead}
                            selected={deco}
                            time={time.time}
                            onClick={onSelect(time.period, time.time)}
                            key={`${time.period}-${time.time}`}
                        />
                    })}
                </div>
            </div>
        </div>
    ) : (
        <div className="mt-xl px-xl lg:desktop-padding text-center">
            <h3>
                원하시는 날짜를 <br/> 먼저 선택해주세요
            </h3>
        </div>
    )
}

export default TimeList