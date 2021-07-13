import { useState, useEffect } from 'react'

import Calendar from '../Calendar'
import Buttons from '../Buttons'

function StepOne({ onChange, stepHandler, step, data }) {
    const [disabled, setDisabled] = useState(true)

    const [values, setValues] = useState(data.reqDate ? data.reqDate : undefined) // object > calendarIndex, month, dateIndex, date, period, time

    const onSelect = (selected) => setValues({ ...selected })

    useEffect(() => {
        if(values && values.time) {
            onChange(values)
            setDisabled(false)
        }
    }, [values])

    return (
        <div className="w-full">
            <h2 className="sm:px-xl lg:desktop-padding my-xl">방문 시간을 선택해주세요</h2>
            {
                data.calendar ? (
                    <Calendar
                        dates={data.calendar}
                        values={values}
                        onChange={onSelect}
                    />
                ) : (
                    <h3 className="text-center">
                        예약 가능한 일정을 로딩 중입니다.
                    </h3>
                )
            }

            <div className="w-full sm:px-xl lg:desktop-padding absolute inset-x-auto bottom-xl">
                <Buttons 
                    className="w-full h-3xl3"
                    name="confirm"
                    text="확인"
                    disabled={disabled}
                    disabledText="일시를 선택해주세요"
                    onClick={stepHandler(true)}
                />
            </div>
        </div>
    )
}

export default StepOne