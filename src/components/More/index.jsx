import {Component} from 'react'
import Partition from '../Partition'

class More extends Component {

    render() {
        return(
            <div className="mx-xl lg:desktop-margin flex flex-col">
                <h2>더 알아보기</h2>
                <Partition iconName="todo" text="내 예약 관리하기" last={false}/>
                <Partition iconName="tool" text="검사 종류 알아보기" last={false}/>
                <Partition iconName="info" text="두산 검사소 소개" last={true}/>
            </div>
        )
    }
}

export default More