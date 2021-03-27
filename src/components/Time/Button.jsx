function Button ({ className, dead, selected, time, onClick}) {
    const deco = 
        dead ?
            "p1centerop30 bg-dark-grey" :
        selected ? 
            "h4centerblue border-blue border-2px bg-white"
        :   "p1center bg-light-grey"

    return (
        <button 
            className={`h-3xl px-m py-s flex justify-center items-center rounded-8px ${className} ${deco}`}
            onClick={onClick}>
            {time}
        </button>
    )
}

export default Button