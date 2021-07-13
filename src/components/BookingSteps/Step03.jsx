import { isMobile } from '../../scripts/UserAgent'

import Buttons from '../Buttons'
import Icons from '../Shared/Icons'

function StepThree({ onChange, data }) {
    const mobile = isMobile()
    
    return (
        <div className="mt-3xl2 w-full flex flex-col items-center">
            <div className="w-5xl2 h-5xl2 flex justify-center items-center bg-light-grey rounded-half">
                <Icons
                    name="msg"
                    svgClass="h-3xl fill-letter opacity-85"
                />
            </div>

            <div className="h2center mt-xl">
                <h2>카카오톡에서</h2>
                <h2>예약을 승인해주세요!</h2>
            </div>

            <div className="p2centerop60 mt-m">
                <p>예약자 본인 확인을 위해</p>
                <p>이전 단계에서 입력하신 전화번호로</p>
                <p>인증 메세지를 전송했습니다.</p>
            </div>

            {
                mobile ? (
                    <a 
                        className="w-6xl h-3xl mt-xl flex flex-row justify-center items-center bg-kakao-yellow rounded-12px"
                        href="kakaotalk://launch"
                    >
                        <p className="h4centerkakao">카카오톡 열기</p>
                    </a>
                ) : null
            }

            <Buttons
                className="w-6xl h-3xl mt-m"
                name="confirm"
                text="승인 완료"
                onClick={() => onChange()}
            />
        </div>
    )
}

export default StepThree