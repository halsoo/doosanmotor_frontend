import Logos from '../src/components/Shared/Logos'
import Buttons from '../src/components/Buttons'

function Parking(props) {

    
    return (
        <div className="w-full h-screen sm:px-xl lg:desktop-padding">
            <div className="w-full h-event-header mt-xl flex justify-center items-center bg-dark-grey bg-opacity-90 rounded-16px">
                <Logos 
                    svgClass="parking-logo"
                    name="doosan_vertical"
                />
            </div>

            <div className="h2center w-full mt-xl">
                <p>대구 수성구에서</p>
                <p>가장 편리한 자동차 검사가</p>
                <p>찾아왔습니다.</p>
            </div>

            <p className="p2centerop60">더 편리한 이용을 위해 카카오 채널을 추가해주세요!</p>

            <Buttons 
                className="sm:w-parking-button lg:w-parking-button-desktop absolute bottom-4xl inset-x-auto"
                name="kakaoChannel" 
            />
        </div>
    )
}

export default Parking