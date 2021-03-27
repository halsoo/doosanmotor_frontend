import Partition from '../Partition'
import Address from './Address'
import Buttons from '../Buttons'

function Menu({ pathname }) {

    const menuItems = [
        {
            icon: "calendar",
            text: "예약하기",
            path: "booking",
        },
        {
            icon: "todo",
            text: "내 예약 관리하기",
            path: "mybooking",
        },
        {
            icon: "tool",
            text: "검사 종류 알아보기",
            path: "inspections",
        },
        {
            icon: "info",
            text: "두산검사소 소개",
            path: "about",
        },
    ]

    return (
        <div className={`w-full h-menu pt-lg sm:px-xl lg:desktop-padding flex flex-col justify-between bg-white`}>
            <div className="w-full flex flex-col">
                {menuItems.map( (item, index) => {
                    return (
                        <Partition 
                            iconName={item.icon}
                            iconCurr={item.path == pathname ? true : false}
                            text={item.text}
                            border={false}
                            last={null}
                            menu={true}
                            key={`${item.icon}-${item.text}-${index}`}
                        />
                    )
                })}
            </div>

            <div className="w-full mb-xl2 flex flex-col">
                <Address />

                <div className="w-full mt-m basic-grid">
                    <Buttons 
                        className="col-start-1 col-end-3"
                        name="phone" 
                    />
                    <Buttons
                        className="col-start-3 col-end-5"
                        name="kakao" 
                    />
                </div>
            </div>
        </div>
    )

}

export default Menu