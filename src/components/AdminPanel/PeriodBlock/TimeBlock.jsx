import { useState } from 'react'

import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

import Buttons from '../../Buttons'
import InfoCard from './InfoCard'

function TimeBlock({ timePos, date, max, bookingInfos, onBlock }) {
    const bgStyle = timePos === 0 ? '-mx-2xl p-2xl bg-admin-blue' : 'w-full'
    const start = dayjs(new Date(date.start * 1000)).format('hh:mm')
    const end = dayjs(new Date((date.start + date.duration) * 1000)).format('hh:mm')

    const infoList = bookingInfos && bookingInfos.length !== 0 
                        ? bookingInfos.reduce((arr, cur, idx, src) => {
                            arr.push({
                                ...cur.customer,
                                plate: cur.registrationNumber
                            })
                            if(idx === src.length - 1) arr = arr.concat(Array(max - src.length).fill(undefined))
                            return arr
                        }, [])
                        : Array(max).fill(undefined)
    
    const [checked, setChecked] = useState(Array(max).fill(undefined))

    const onCheck = (idx) => () => {
        const newChecked = [...checked]
        if(newChecked[idx]) newChecked[idx] = undefined
        else newChecked[idx] = date.start
        setChecked(newChecked)
    }
                        
    return(
        // 3 cols and gap-xl
        <div className={`h-fit mb-3xl ${bgStyle}`}>
            <div className="col-span-3 mb-m flex justify-between">
                <h1 className={ timePos === 0 || timePos === 1 ? 'h1admin' : 'h1admingrey'}>
                    {`${start} ~ ${end}`}
                </h1>
                <div className="flex items-center">
                    <p className="p2admin mr-s">예약 가능</p>
                    <input
                        className="w-3xl h-2xl2 mr-xl text-center"
                        value={max}
                        onChange={() => null}
                        disabled={true}
                    />
                    <Buttons
                        className="w-5xl3 h-2xl2"
                        name="blockBooking"
                        text=''
                        onClick={onBlock(checked.filter(c => c !== undefined))}
                    />
                </div>
            </div>

            <div className="timeBlock-grid">
                {
                    infoList.map((info, idx) => (
                        <InfoCard
                            className="col-span-1 h-100px"
                            timePos={timePos}
                            customerInfo={info}
                            check={checked[idx] ? true : false}
                            onCheck={onCheck(idx)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TimeBlock