import Buttons from "../../Buttons"

function InfoCard({ className, timePos, customerInfo, check, onCheck }) {
    const borderStyle = timePos === 0
                            ? 'border border-2px border-blue bg-white'
                            : 'bg-light-grey'

    const addHyphen = str => {
        const midDigit = 3 + str.length - 7
        return str.substring(0, 3) + '-' + str.substring(3, midDigit) + '-' + str.substring(midDigit, str.length)
    }

    return (
         <div className={`${className} py-lg pl-lg flex items-center rounded-10px ${borderStyle}`}>
             <Buttons
                className="h-xl mr-lg"
                name="checkbox"
                value={check}
                disabled={timePos}
                onClick={onCheck}
             />
            {
                customerInfo ? (
                    <div className="flex flex-col">
                        <h4 className="h4admin mb-xxs">
                            {customerInfo.plate}
                        </h4>
                        <div className="flex">
                            <p className="p1admin mr-xl">{customerInfo.name}</p>
                            <p className="p1admin">
                                {addHyphen(customerInfo.mobile)}
                            </p>
                        </div>
                    </div>
                ) : null
            }
         </div>
    )
}

export default InfoCard