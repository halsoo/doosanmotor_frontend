function Cancel ({ className }) {

    const handleButton = () => {

    }

    return (
        <button 
            className={`h-3xl3 flex flex-row justify-center items-center bg-alert rounded-12px ${className}`} 
            onClick={handleButton}>
            <p className="h4white">예약 취소하기</p>
        </button>
    )
}

export default Cancel