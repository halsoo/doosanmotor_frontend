import { useState, useEffect } from "react"

import Input from '../Input'
import Buttons from '../Buttons'
import Icons from '../Shared/Icons'

function StepOne ({ onChange, step, data }) {
    const infoPlaceHolder = {
        name: "차번호",
        placeholder: "123가4567",
    }

    const [infoValue, setInfoValue] = useState(data && data.customerInfo ? {
        value: data.customerInfo.plate,
        valid: true
    } : {
        value: "",
        valid: undefined,
    })

    const [disabled, setDisabled] = useState(true)

    const handleInput = e => {
        e.preventDefault()

        const newInfoValue = {
            value: e.target.value,
            valid: isValidPlate(e.target.value)
        }

        setInfoValue(newInfoValue)
    }

    const isValidPlate = (value) => /[0-9]{2,3}[가-힣][0-9]{4}/g.exec(value) ? true : false

    const handleButton = () => onChange(infoValue.value)

    useEffect(() => {
        if(infoValue.valid) setDisabled(false)
        else if (!infoValue.valid && !disabled) setDisabled(true)
    }, [infoValue, disabled])

    return (
        <div className="w-full px-xl lg:desktop-padding">
            <div className="h-2xl2 -mx-xl px-xl flex items-center bg-light-grey">
                <a href="/" className="flex flex-row items-center">
                    <Icons
                        name="backward"
                        svgClass="h-xl fill-blue"
                    />
                    <p className="p1">
                        돌아가기
                    </p>
                </a>
            </div>
            <h2 className="mt-xl">예약 정보를 입력해주세요.</h2>
            <p className="p2op60 mt-xs">
                예약을 안하셨다면 &nbsp;
                <a 
                    href="/booking"
                    className="underline"
                >
                    클릭하여 예약하러 가기
                </a>
            </p>
            <Input
                className="mt-2xl"
                name={infoPlaceHolder.name} 
                placeholder={infoPlaceHolder.placeholder} 
                value={infoValue.value}
                valid={infoValue.valid}
                onChange={handleInput}
                key={`mypage-stpe-${step}-${infoPlaceHolder.name}`} 
            />
            
            <div className="w-full sm:px-xl lg:desktop-padding absolute left-0 bottom-xl">
                <Buttons 
                    className="w-full h-3xl3" 
                    name="confirm"
                    text="확인"
                    disabled={disabled}
                    disabledText="차번호를 입력해주세요"
                    onClick={handleButton}
                />
            </div>
        </div>
    )
}

export default StepOne