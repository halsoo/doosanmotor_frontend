function Day ({ buttonClass, dayClass, dayOfMonth, dayOfWeek, onClick }) {
    return (
        <button 
            className={`h-3xl2 py-xxs flex flex-col justify-between items-center ${buttonClass}`}
            onClick={onClick}>
            <p className="p3center">{dayOfWeek}</p>
            <p className={dayClass}>{dayOfMonth}</p>
        </button>
    )
}

export default Day