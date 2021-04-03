import TitlesBar from "./TitlesBar"
import ContentsBox from '../Shared/ContentsBox'

import { scrollTo } from '../../scripts/Scroll'

function Select({ className, items }) {

    const titles = items.reduce((acc, curr) => {
        acc.push(curr.title)
        return acc
    }, [])

    const handleClick = (title) => (e) => {
        e.preventDefault()
        const target = document.querySelector(`#select-${title}`)
        scrollTo(target)
    }

    return (
        <div className={`w-full mt-xl px-xl lg:desktop-padding ${className}`}>
            <h2 className="">검사 알아보기</h2>
            <TitlesBar titles={titles} onClick={handleClick}/>
            {items.map( (item, idx, arr) => {
                return (
                    <ContentsBox
                        id={`select-${item.title}`}
                        contents={item} 
                        last={idx === arr.length - 1 ? true : false}
                        key={`${item.title}-${item.subtitle}`}
                    />
                )
            })}
        </div>
    )

}

export default Select