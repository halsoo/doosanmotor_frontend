import Logos from "../Logos"

function Footer (props) {
    return (
        <footer className="p3 flex flex-col text-opacity-60 px-xl lg:desktop-padding pt-2xl2 pb-3xl bg-dark-grey bg-clip-border -z-10">
            
            <div className="mb-2xl2">
                <p>© 2021 (주)성심 두산자동차검사소</p>
                <p>dm@doosanmotor.com · 대구광역시 수성구 지범로 39 · 053-716-7766</p>
                <p>종합검사지정정비사업자 제 88호</p>
            </div>

            <hr className="mb-2xl border border-solid border-letter20"/>

            <div className="w-full h-2xl flex flex-row justify-between items-center self-center">
                <p>관련 기관</p>

                <Logos
                    svgClass="h-full"
                    name="daegu"
                />

                <Logos
                    svgClass="h-full"
                    name="suseong"
                />
            </div>
        </footer>
    )
}

export default Footer