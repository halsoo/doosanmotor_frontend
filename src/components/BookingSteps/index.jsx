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

function BookingSteps ({ step, stepHandler, onChange, onSubmit, data}) {
    const RenderElem = compList[step]

    let neededData = undefined

    switch(step + 1) {
        case 1:
            neededData = {
                calendar: data.calendar,
                reqDate: data.reqDate,
            }
            break;
        case 2:
            neededData = { customerInfo: data.customerInfo }
            break;
        case 3:
            neededData = { bookingID: data.bookingID }
            break;
        case 4:
            neededData = { bookingInfo: data.bookingInfo }
            break;
    }

    return <RenderElem 
        onChange={onChange(step)}
        stepHandler={stepHandler}
        onSubmit={onSubmit}
        step={step}
        data={neededData}
    />
}

export default BookingSteps