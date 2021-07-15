import { useState, useEffect } from 'react'

import Nav from '../../src/components/Nav'
import Block from '../../src/components/Shared/Block'
import MyPageSteps from '../../src/components/MyPageSteps'

function MyPage(props) {
    const [state, setState] = useState({
        customerInfo: undefined, // object > name, mobile, plate
        bookingInfos: undefined,
        selected: undefined
    })

    const [step, setStep] = useState(0)

    const onChange = (step) => async (payload) => {
        let newState = { ...state }
        let newStep = step

        switch(step + 1) {
            case 1:
                // POST /schedules/search { registrationNumber: payload }
                const bookingInfos = [{
                    id: 'upcoming-001',
                    date: {
                        start: 1626593400, // 21-07-18-16-30
                        duration: 1800
                    },
                    customer: {
                        name: '김동민',
                        mobile: '01073452068'
                    },
                    registrationNumber: '123가1234'
                },
                {
                    id: 'upcoming-002',
                    date: {
                        start: 1629090000, // 21-08-16-14-00
                        duration: 1800
                    },
                    customer: {
                        name: '김동민',
                        mobile: '01073452068'
                    },
                    registrationNumber: '123가1234'
                },
                {
                    id: 'past-001',
                    date: {
                        start: 1623200400, // 21-06-09-10-00
                        duration: 1800
                    },
                    customer: {
                        name: '김동민',
                        mobile: '01073452068'
                    },
                    registrationNumber: '123가1234'
                },{
                    id: 'past-002',
                    date: {
                        start: 1617849000, // 21-04-08-11-30
                        duration: 1800
                    },
                    customer: {
                        name: '김동민',
                        mobile: '01073452068'
                    },
                    registrationNumber: '123가1234'
                }] 
                newState = {
                    ...newState,
                    customerInfo: payload,
                    bookingInfos
                }
                newStep = newStep + 1
                break;
            case 2:
                newState = { 
                    ...newState,
                    selected: state.bookingInfos[payload]
                }
                newStep = newStep + 1
                break;
            case 3:
                // DELETE /schedules/<ID> selected.id
                const status = 'pendingCancellation' // res.data.status
                newStep = newStep + 1
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

    return (
        <div className="w-full min-h-screen">
            <Nav/>
            <Block />
            
            <MyPageSteps 
                step={step}
                stepHandler={handleSteps}
                onChange={onChange}
                data={state}
            />
        </div>
    )
}

export default MyPage