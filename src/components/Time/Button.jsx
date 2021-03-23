// import dayjs from 'dayjs' 
// import 'dayjs/locale/ko'

// dayjs.locale('ko')

function Button ({ className, period, time, onClick}) {
    return (
        <button 
            className={`h-3xl px-m py-s flex justify-center items-center rounded-8px ${className}`}
            onClick={onClick}>
            {time}
        </button>
    )
}

export default Button