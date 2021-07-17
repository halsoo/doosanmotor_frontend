import Buttons from '../../Buttons'

function PeriodLabel({ className, period, totalBooking, onBlock}) {
    return(
        <div className={`${className} flex justify-between items-center`}>
            <h2 className="h2admin">{`${period} 예약`}</h2>
            <div className="flex items-center">
                <h3 className="h3admin mr-m">{`${totalBooking}건 예약됨`}</h3>
                <Buttons
                    className="w-6xl2 h-2xl2"
                    name="blockBooking"
                    text={period}
                    onClick={onBlock}
                />
            </div>
        </div>
    )
}

export default PeriodLabel