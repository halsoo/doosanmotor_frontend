import Buttons from "../../Buttons"

function Edit({ className, timeInfo, customerInfo, onButtonClick }) {
    return (
         <div className={`w-full py-xl px-m flex justify-between items-center ${className}`}>
             <div>
                <h4 className="h4blue">
                    {`${timeInfo.diff}일 후, ${timeInfo.month}월 ${timeInfo.date}일 (${timeInfo.year})`}
                </h4>

                <p className="p1">
                    {`${timeInfo.start.period} ${timeInfo.start.hour}시 ${timeInfo.start.minute}분`}
                    &nbsp; - &nbsp;
                    {`${timeInfo.end.period}${timeInfo.end.hour}시 ${timeInfo.end.minute}분`}
                </p>
                <p className="p1">
                    {`${customerInfo.plate} (${customerInfo.name} 고객님)`}
                </p>
             </div>

             <Buttons
                className="h-xl fill-black"
                name="edit"
                onClick={onButtonClick}
                visible={true} 
             />
         </div>
    )
}

export default Edit