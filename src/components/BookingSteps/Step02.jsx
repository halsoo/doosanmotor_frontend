import { useState, useEffect } from "react"

import Input from '../Input'
import Buttons from '../Buttons'

function StepTwo ({ onChange, onSubmit, stepHandler, step, data }) {
    const infoList = [
        {
            name: "오시는 고객님 성함",
            placeholder: "홍길동",
        },
        {
            name: "차번호",
            placeholder: "123가 4567",
        },
        {
            name: "오시는 고객님 휴대전화번호",
            placeholder: "01012341234",
        }
    ]

    const [valueList, setValueList] = useState(data.customerInfo ? [
        {
            value: data.customerInfo.name,
            valid: true
        },
        {
            value: data.customerInfo.mobile,
            valid: true
        },
        {
            value: data.customerInfo.plate,
            valid: true
        },
    ] : [
        {
            value: "",
            valid: undefined,
        }, 
        {
            value: "",
            valid: undefined,
        }, 
        {      
            value: "",
            valid: undefined,
        }
    ])

    const [disabled, setDisabled] = useState(true)

    const handleInput = index => e => {
        e.preventDefault()

        const newState = {
            value: e.target.value,
            valid: isValid(index, e.target.value)
        }

        let newValueList = [...valueList]
        newValueList[index] = newState
        setValueList([...newValueList])
    }

    const isValid = (idx, value) => {
        let result = false

        switch(idx + 1) {
            case 1:
                result = value ? true : false
                break;
            case 2:
                const isPlate = /[0-9]{2,3}[가-힣][0-9]{4}/g.exec(value)
                result = isPlate ? true : false
                break;
            case 3:
                const stripped = value.replaceAll('-', '')
                const isPhoneNumber = /^01(?:0|1|[6-9])([0-9]{3}|[0-9]{4})[0-9]{4}$/g.exec(stripped)
                result = isPhoneNumber ? true : false
                break;
        }

        return result
    }

    useEffect(() => {
        const isAllValid = valueList.map(v => v.valid).reduce((arr, cur) => arr && cur, true)

        if(valueList.map(v => v.valid).reduce((arr, cur) => arr && cur, true)) {
            onChange(valueList.map(v => v.value))
            setDisabled(false)
        } 
        else if (!isAllValid && !disabled) setDisabled(true)

    }, [valueList, disabled])

    return (
        <form className="mt-xl w-full px-xl lg:desktop-padding">
            <h2 className="">예약 정보를 입력해주세요.</h2>
            {infoList.map((info, index) => {
                return (
                    <Input 
                        className="mt-2xl"
                        name={info.name} 
                        placeholder={info.placeholder} 
                        value={valueList[index].value}
                        valid={valueList[index].valid}
                        onChange={handleInput(index)}
                        key={info.name} />
                )
            })}

            <div className="w-full sm:px-xl lg:desktop-padding basic-grid items-center absolute left-0 bottom-xl">
                <Buttons className="col-span-1" name="backward" onClick={stepHandler(false)}/>
                <Buttons 
                    className="col-span-3 h-3xl3" 
                    name="confirm"
                    text="확인"
                    disabled={disabled}
                    disabledText="값을 입력해주세요"
                    onClick={onSubmit}
                />
            </div>
        </form>
    )
}

export default StepTwo