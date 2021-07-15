import StepOne from "./Step01"
import StepTwo from "./Step02"
import StepThree from "./Step03"
import StepFour from "./Step04"

const compList = [
    StepOne,
    StepTwo,
    StepThree,
    StepFour
]

function MyPageSteps ({ step, stepHandler, onChange, data}) {
    const RenderElem = compList[step]

    let neededData = undefined

    switch(step + 1) {
        case 1:
            neededData = data.customerInfo
            break;
        case 2:
            neededData = data.bookingInfos
            break;
        case 3:
            neededData = data.selected
            break;
        case 4:
            neededData = null
            break;
    }

    return <RenderElem 
        onChange={onChange(step)}
        stepHandler={stepHandler}
        step={step}
        data={neededData}
    />
}

export default MyPageSteps