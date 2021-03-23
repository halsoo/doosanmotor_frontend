import { useState } from "react"
import Input from '../Input'
import Buttons from '../Buttons'

function Booking (props) {

    const [inputs, setInputs] = useState([
        {
            name: "오시는 고객님 성함",
            placeholder: "홍길동",
            value: "",
        }, 
        {
            name: "차번호",
            placeholder: "123가 4567",
            value: "",
        }, 
        {   
            name: "오시는 고객님 휴대전화번호",
            placeholder: "01012341234",
            value: "",
        }
    ])

    const handleInput = index => e => {
        e.preventDefault()

        let newInputs = [... inputs]
        newInputs[index].value = e.target.value
        setInputs([... newInputs])
    }

    return (
        <form className="mt-xl w-full px-xl lg:desktop-padding " action="">
            <h2 className="">예약 정보를 입력해주세요.</h2>
            {inputs.map( (input, index) => {
                return (
                    <Input 
                        className="mt-2xl"
                        name={input.name} 
                        placeholder={input.placeholder} 
                        text={input.value}
                        handleInput={handleInput(index)}
                        key={input.name} />
                )
            })}

            <div className="w-full mt-bigGap flex flex-row justify-between items-center">
                <Buttons className="w-24%" name="backward"/>
                <Buttons className="w-3/4" name="confirm"/>
            </div>
        </form>
    )
}

export default Booking