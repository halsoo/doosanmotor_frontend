import Partition from '../Shared/Partition'
import SmAddress from '../Address/SmAddress'
import Buttons from '../Buttons'

function Menu({ pathname, visible=false }) {

    const menuItems = [
        {
            icon: "calendar",
            text: "예약하기",
            path: "/booking",
        },
        {
            icon: "todo",
            text: "내 예약 관리하기",
            path: "/mypage",
        },
        {
            icon: "tool",
            text: "검사 종류 알아보기",
            path: "/inspections",
        },
        {
            icon: "info",
            text: "두산검사소 소개",
            path: "/about",
        },
    ]

    const show = visible ? "block" : "hidden"

    return (
        <div className={`w-full h-menu bg-white ${show}`}>
            <div className="w-auto flex flex-col fixed top-menu sm:inset-x-xl lg:inset-x-desktop">
                {menuItems.map( (item, index) => {
                    return (
                        <a 
                            href={item.path}
                            key={`${item.icon}-${item.text}-${index}`}
                        >
                            <Partition 
                                iconName={item.icon}
                                iconCurr={item.path == pathname ? true : false}
                                text={item.text}
                                border={false}
                                last={null}
                                menu={true}
                                visible={visible}
                            />
                        </a>
                    )
                })}
            </div>

            <div className="w-auto flex flex-col fixed bottom-xl2 sm:inset-x-xl lg:inset-x-desktop">
                <SmAddress />

                <div className="w-full mt-m basic-grid">
                    <Buttons 
                        className="col-start-1 col-end-3"
                        name="phone"
                        visible={visible}
                    />
                    <Buttons
                        className="col-start-3 col-end-5"
                        name="kakao"
                        visible={visible}
                    />
                </div>
            </div>
        </div>
    )

}

export default Menu