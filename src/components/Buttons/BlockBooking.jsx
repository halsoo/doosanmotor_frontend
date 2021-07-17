import Icons from '../Shared/Icons'

function BlockBooking ({ className, text, onClick }) {
    return (
        <button 
            className={`${className} flex justify-center items-center bg-light-alert rounded-10px`}
            onClick={onClick}
        >
            <p className="p2adminalert">{`${text} 예약 막기`}</p>
            <Icons
                svgClass="h-xl ml-xs fill-alert"
                name="block"
                visible={true}
            />
        </button>
    )
}

export default BlockBooking