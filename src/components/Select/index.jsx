import TitlesBar from "./TitlesBar"
import ContentsBox from '../Shared/ContentsBox'

import { scrollTo } from '../../scripts/Scroll'

function Select({ className }) {

    const selectItems = [
        {
            title: "개요",
            subtitle: "도심 속의 깔끔한 검사소! 두산 검사소!!",
            body: "뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽",
            imagePath: "/img/hero.jpg"
        },
        {
            title: "일반검사1",
            subtitle: "도심 속의 깔끔한 검사소! 두산 검사소!!",
            body: "뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽",
            imagePath: "/img/hero.jpg"
        },
        {
            title: "일반검사2",
            subtitle: "도심 속의 깔끔한 검사소! 두산 검사소!!",
            body: "뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽",
            imagePath: "/img/hero.jpg"
        },
        {
            title: "일반검사3",
            subtitle: "도심 속의 깔끔한 검사소! 두산 검사소!!",
            body: "뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽",
            imagePath: "/img/hero.jpg"
        },
        {
            title: "종합검사",
            subtitle: "도심 속의 깔끔한 검사소! 두산 검사소!!",
            body: "뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽 뭐시깽뭐시깽",
            imagePath: "/img/hero.jpg"
        },
    ]

    const titles = selectItems.reduce((acc, curr) => {
        acc.push(curr.title)
        return acc
    }, [])

    const handleClick = (title) => (e) => {
        e.preventDefault()
        const target = document.querySelector(`#select-${title}`)
        scrollTo(target)
    }

    return (
        <div className={`w-full px-xl lg:desktop-padding ${className}`}>
            <h2 className="">검사 알아보기</h2>
            <TitlesBar titles={titles} onClick={handleClick}/>
            {selectItems.map( (item, idx) => {
                return (
                    <ContentsBox
                        id={`select-${item.title}`}
                        contents={item} 
                        last={idx === selectItems.length - 1 ? true : false}
                        key={`${item.title}-${item.subtitle}`}
                    />
                )
            })}
        </div>
    )

}

export default Select