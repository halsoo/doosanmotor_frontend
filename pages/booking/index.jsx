import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

import { dateToWeekday } from '../../src/scripts/Conversions'

import Nav from '../../src/components/Nav'
import Block from '../../src/components/Shared/Block'
import BookingSteps from '../../src/components/BookingSteps'

function Booking(props) {
    const [state, setState] = useState({
        calendar: undefined,
        reqDate: undefined, // object > calendarIndex, month, dateIndex, date, period, time
        customerInfo: undefined, // object > name, mobile, plate
        bookingID: undefined,
        isApproved: false,
        bookingInfo: undefined,
    })

    const [step, setStep] = useState(0)

    useEffect(() => loadCalendar(), [])

    const loadCalendar = () => {
        const date = dayjs()
        setState({
            ...state,
            calendar: listMaker(date)
        })
        // should add api calls functions that loads contents...
    }

    const onChange = (step) => (payload) => {
        let newState = { ...state }
        let newStep = step

        switch(step + 1) {
            case 1:
                newState = {
                    ...newState,
                    reqDate: payload
                }
                break;
            case 2:
                newState = { 
                    ...newState, 
                    customerInfo: {
                        name: payload[0],
                        mobile: payload[1],
                        plate: payload[2]
                    }
                }
                break;
            case 3:
                // get/state.bookingID request to api 
                // check for reservation status
                let status = 'approved'

                if(status === 'approved') {
                    newState = {
                        ...newState,
                        isApproved: true,
                        bookingInfo: { // res.data
                            date: {
                                start: 1626231600,
                                duration: 1800
                            },
                            customer: {
                                name: '김동민',
                                mobile: '01073452068'
                            },
                            registrationNumber: '123가1234'
                        }
                    }
                    newStep = newStep + 1
                }
                break;
            case 4:
                break;
        }
        setState(newState)
        if(newStep !== step) setStep(newStep)
    }

    const handleSteps = (isIncrease) => (e) => {
        e.preventDefault()
        const newStep = isIncrease
                    ? step + 1 
                    : step > 0
                        ? step - 1
                        : step
        setStep(newStep)
    }

    const onSubmit = (e) => {
        // send post request to api
        // get 'id' from response
        // then update state.bookingID

        setState({
            ...state,
            bookingID: 'something-long-hash'
        })
        setStep(step + 1)
    }

    return (
        <div className="w-full min-h-screen">
            <Nav/>
            <Block />
            
            <BookingSteps 
                step={step}
                stepHandler={handleSteps}
                onChange={onChange}
                onSubmit={onSubmit}
                data={state}
            />
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

    list.forEach(elem => {
        const obj = elem[0] // for year calculation
        const dateRange = elem.slice(1, 3)
        const month = obj.month() + 1 // .month() => 0~11

        let subList = {}
        subList["month"] = month
        subList["dates"] = []

        for (let d = dateRange[0]; d < dateRange[1] + 1; d ++) {
            const weekday = dateToWeekday(obj, d)
            const times = [
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
            ]

            let dayNWeekday = []
            dayNWeekday.push(d, weekday, times)
            subList["dates"].push(dayNWeekday)
        }

        result.push(subList)
    })

    return result
}

export default Booking