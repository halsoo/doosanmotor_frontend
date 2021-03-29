import Partition from '../Partition'

function More ({ className }) {

    const items = [
        {
            icon: "todo",
            text: "내 예약 관리하기",
        },
        {
            icon: "tool",
            text: "검사 종류 알아보기",
        },
        {
            icon: "info",
            text: "두산 검사소 소개",
        },
    ]

    
    return(
        <div className={`mx-xl lg:desktop-margin flex flex-col ${className}`}>
            <h2>더 알아보기</h2>
            {items.map( (item, index) => {
                return (
                    <Partition 
                        iconName={item.icon} 
                        iconCurr={null}
                        text={item.text}
                        border={true}
                        last={index === items.length - 1 ? true : false}
                        menu={false}
                        key={`${item.icon}-${item.text}-${index}`}
                    />
                )
            })}
        </div>
    )
}

export default More