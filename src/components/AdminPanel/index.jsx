import { useState, useEffect } from 'react'

import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

import Calendar from './Calendar'
import PeriodBlock from './PeriodBlock'

import dummyBookingInfos from './dummy_data.json'
import dummySettings from './dummy_settings.json'

function AdminPanel({ token }) {
    const [hours, setHours] = useState({
        openingHours: undefined,
        unavailableHours: undefined
    })

    const [state, setState] = useState({
        settings: undefined, // operatingHours, maxBooking, duration
        totalBooking: undefined,
        selectedDate: dayjs().hour(0).minute(0).second(0),
        bookingInfos: undefined
    })

    const onCalendarSelect = (dateObj) => {
        const normalizedDate = dateObj.hour(0).minute(0).second(0)

        const newOperatingHours = calcOperatingHours(hours.openingHours, hours.unavailableHours, normalizedDate, state.settings.duration)

        const timestamp = String(normalizedDate.unix())
        const newBookingInfos = dummyBookingInfos[timestamp] ? dummyBookingInfos[timestamp] : []
        const newTotalBooking = newBookingInfos ? newBookingInfos.filter(d => d.type === 'reservation').length : 0

        setState({
            ...state,
            settings: {
                ...state.settings,
                operatingHours: newOperatingHours
            },
            totalBooking: newTotalBooking,
            selectedDate: normalizedDate,
            bookingInfos: newBookingInfos
        })
    }

    const onBlock = (flag) => (checkedList) => () => {
        switch(flag) {
            case 'day':
                break;
            case 'am':
                break;
            case 'pm':
                break;
            case 'checked':
                break;
        }
    }

    useEffect(() => {
        // initializing
        // GET /settings
        const newMaxBooking = dummySettings.data.filter(s => s.name === 'maxBooking')[0].value
        const newDuration = dummySettings.data.filter(s => s.name === 'reservationInterval')[0].value

        const openingHours = dummySettings.data.filter(s => s.name === 'openingHours')[0].value
        const unavailableHours = dummySettings.data.filter(s => s.name === 'unavailableHours')[0].value
        const newOperatingHours = calcOperatingHours(openingHours, unavailableHours, state.selectedDate, newDuration)

        // GET /schedules?something
        const newBookingInfos = dummyBookingInfos[String(state.selectedDate.unix())]
        const newTotalBooking = newBookingInfos.filter(d => d.type === 'reservation').length

        setState({
            ...state,
            settings: {
                operatingHours: newOperatingHours,
                maxBooking: newMaxBooking,
                duration: newDuration
            },
            totalBooking: newTotalBooking,
            bookingInfos: newBookingInfos
        })

        setHours({
            openingHours,
            unavailableHours
        })
    }, [])

    // need to removed from client script
    // should moved to SSR logic
    const calcOperatingHours = (openingHours, unavailableHours, date, duration) => {
        // make a list of operating hours
        const open = openingHours.start / 3600
        const close = openingHours.end / 3600
        const hours = unavailableHours.reduce((arr, cur, idx) => {
            if(idx === 0) arr.push(open)
            arr.push(cur.start / 3600)
            arr.push(cur.end / 3600)
            if(idx === unavailableHours.length - 1) arr.push(close)
            return arr
        }, []).reduce((arr, cur, idx, src) => {
            if(idx % 2 !== 0) return arr
    
            for(let offset = 0 ; offset < src[idx + 1] - cur; offset ++) {
                const hourUnix = date.hour(cur + offset).unix()
                arr.push(hourUnix)
                arr.push(hourUnix + duration)
            }
            
            return arr
        }, [])
        return hours
    }
    console.log(state.bookingInfo ? dayjs(new Date(state.bookingInfos[0].date.start * 1000)).format('YYYY-MM-DD H:m') : null)
    return (
        <div className="w-full h-fit min-h-full flex justify-center">
            <div className="h-fit admin-grid pb-xl px-xl">
                <Calendar
                    className="col-span-3 -ml-xl pt-3xl px-xl bg-admin-medium-grey"
                    totalBooking={state.totalBooking}
                    selected={state.selectedDate}
                    onSelect={onCalendarSelect}
                    onBlock={onBlock('day')}
                />

                { 
                    state.settings ? (
                        <div className="col-span-9 h-fit pt-3xl">
                            <PeriodBlock 
                                className="w-full h-fit mb-80px"
                                period="am"
                                data={{
                                    ...state,
                                    settings: {
                                        ...state.settings,
                                        operatingHours: state.settings.operatingHours.filter(h => h < state.selectedDate.hour(12).unix())
                                    },
                                    bookingInfos: state.bookingInfos.filter(d => d.date.start < state.selectedDate.hour(12).unix())
                                }}
                                onBlock={onBlock}
                            />
                            <PeriodBlock 
                                className="w-full h-fit"
                                period="pm"
                                data={{
                                    ...state,
                                    settings: {
                                        ...state.settings,
                                        operatingHours: state.settings.operatingHours.filter(h => h >= state.selectedDate.hour(12).unix())
                                    },
                                    bookingInfos: state.bookingInfos.filter(d => d.date.start >= state.selectedDate.hour(12).unix())
                                }}
                                onBlock={onBlock}
                            />
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default AdminPanel