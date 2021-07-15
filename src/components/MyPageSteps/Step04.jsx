import { isMobile } from '../../scripts/UserAgent'

import Buttons from '../Buttons'
import Icons from '../Shared/Icons'

function StepFour({ onChange, data }) {
    const mobile = isMobile()
    
    return (
        <div className="mt-3xl2 w-full flex flex-col items-center">
            <div className="w-5xl2 h-5xl2 flex justify-center items-center bg-light-grey rounded-half">
                <p className="mypage-emoji">
                    😥
                </p>
            </div>

            <div className="h2center mt-xl">
                <h2>예약이 취소되었습니다.</h2>
                <h2>다음에 꼭 들러주세요!</h2>
            </div>

            <div className="p2centerop60 mt-m">
                <p>예약자 본인 확인을 위해</p>
                <p>예약시 입력하신 전화번호로</p>
                <p>인증 메세지를 전송했습니다.</p>
            </div>

            {
                mobile ? (
                    <a 
                        className="w-6xl h-3xl3 mt-xl flex flex-row justify-center items-center bg-kakao-yellow rounded-12px"
                        href="kakaotalk://launch"
                    >
                        <p className="h4centerkakao">
                            다음 예약을 위해 <br/>
                            채널 추가하기
                        </p>
                    </a>
                ) : null
            }

            <div className="w-full sm:px-xl lg:desktop-padding absolute left-0 bottom-xl">
                <a href="/">
                    <Buttons
                        className="w-full h-3xl3"
                        name="confirm"
                        text="확인"
                        onClick={null}
                    />
                </a>
            </div>
        </div>
    )
}

export default StepFour