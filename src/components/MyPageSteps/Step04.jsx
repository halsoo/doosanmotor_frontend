import { isMobile } from '../../scripts/UserAgent'

import Buttons from '../Buttons'
import Icons from '../Shared/Icons'

function StepFour({ onChange, data }) {
    const mobile = isMobile()
    
    return (
        <div className="mt-3xl2 w-full flex flex-col items-center">
            <div className="w-5xl2 h-5xl2 flex justify-center items-center bg-light-grey rounded-half">
                <p className="mypage-emoji">
                    π₯
                </p>
            </div>

            <div className="h2center mt-xl">
                <h2>μμ½μ΄ μ·¨μλμμ΅λλ€.</h2>
                <h2>λ€μμ κΌ­ λ€λ¬μ£ΌμΈμ!</h2>
            </div>

            <div className="p2centerop60 mt-m">
                <p>μμ½μ λ³ΈμΈ νμΈμ μν΄</p>
                <p>μμ½μ μλ ₯νμ  μ νλ²νΈλ‘</p>
                <p>μΈμ¦ λ©μΈμ§λ₯Ό μ μ‘νμ΅λλ€.</p>
            </div>

            {
                mobile ? (
                    <a 
                        className="w-6xl h-3xl3 mt-xl flex flex-row justify-center items-center bg-kakao-yellow rounded-12px"
                        href="kakaotalk://launch"
                    >
                        <p className="h4centerkakao">
                            λ€μ μμ½μ μν΄ <br/>
                            μ±λ μΆκ°νκΈ°
                        </p>
                    </a>
                ) : null
            }

            <div className="w-full sm:px-xl lg:desktop-padding absolute left-0 bottom-xl">
                <a href="/">
                    <Buttons
                        className="w-full h-3xl3"
                        name="confirm"
                        text="νμΈ"
                        onClick={null}
                    />
                </a>
            </div>
        </div>
    )
}

export default StepFour