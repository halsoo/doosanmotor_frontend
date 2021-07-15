import Icons from '../Shared/Icons'

function Edit ({ className, onClick, type='icon' }) {
    const whichType = {
        icon: {
            style: className,
            render: <Icons svgClass="h-full" name="edit"/>
        },
        text: {
            style: `${className} flex justify-center items-center bg-blue h4centerwhite`,
            render: <p>예약 수정하기</p>
        }
    }

    return (
        <button 
            className={whichType[type].style}
            onClick={onClick}
        >
            { whichType[type].render }
        </button>
    )
}

export default Edit