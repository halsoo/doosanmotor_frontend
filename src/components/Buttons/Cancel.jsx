function Cancel ({ className, onClick }) {
    return (
        <button 
            className={`h-3xl flex flex-row justify-center items-center bg-light-grey ${className}`} 
            onClick={onClick}>
            <p className="h4centeralert">예약 취소하기</p>
        </button>
    )
}

export default Cancel