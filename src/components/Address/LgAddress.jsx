import { useState, useEffect, useRef } from 'react'
import { whatOS } from '../../scripts/UserAgent'

import Buttons from '../Buttons'

import hero from '../../../public/img/hero.jpg'
import mapUrls from './MapLinks'

function LgAddress({ className }) {
    const [refs, setRefs] = useState(parseRef(mapUrls))

    useEffect(() => {
        insertHrefToA()
    }, [])

    function parseRef(arrObj) {
        const codes = arrObj.map(obj => {
            return obj.code
        })

        const refs = {}

        codes.forEach(code => {
            refs[code] = useRef()
        })

        return refs
    }

    function insertHrefToA() {
        const os = whatOS()

        const hrefs = {}
        mapUrls.forEach(url => {
            const path = pathCheck(os, url.paths)
            hrefs[url.code] = path
        })

        for(let code in refs) {
            const ref = refs[code]
            const href = hrefs[code]

            if(href == -1) {
                ref.current.style.display = "hidden"
                continue
            }

            ref.current.href = href
        }
    }
    
    function pathCheck (os, paths) {

        const link = paths.mobile === undefined 
                    ?   paths.web
                    :   paths.mobile.common !== undefined
                        ?   paths.mobile.common
                        :   os === 'ios'
                            ?   paths.mobile.ios
                            :   os === 'android'
                                ?   paths.mobile.android
                                :   paths.web !== undefined
                                    ?   paths.web
                                    :   -1

        
        return link
    }

    return (
        <section className={`mx-xl lg:margin-desktop ${className}`}>
            {/* title */}
            <h2 className="mb-s">
                연락 닿기
            </h2>

            {/* Address */}
            <article className="w-full h-auto pb-xl rounded-12px bg-light-grey">
                <img
                    className="w-full h-7xl mb-2xl object-cover object-center overflow-hidden rounded-t-12px" 
                    src={hero} 
                    alt="picture of Doosan Motors"
                />
                
                <p className="h4center mb-xxs">대구 수성구 지범로 39 (두산동)</p>

                <div className="p2center flex flex-row justify-center">
                    {
                        mapUrls.map((item, idx) => {
                            const trail = idx !== mapUrls.length - 1 ? ( <span>&nbsp;·&nbsp;</span> ) : null
                            return (
                                <span key={`${idx}-${item.code}-${item.name}`}>
                                    <a 
                                        className="underline"
                                        href={undefined}
                                        ref={refs[item.code]}
                                        target="_blank"
                                    >
                                        {item.name}
                                    </a>
                                    {trail}
                                </span>
                            )
                        })
                    }
                </div>

                <hr className="mt-2xl mb-xl mx-m border border-solid border-letter20"/>

                <div className="mx-m flex flex-col">
                    <p className="p1"> 평일 | 오전 9:00 - 오후 6:00 </p>
                    <p className="p1"> 토요일 | 오전 9:00 - 오후 1:00 </p>
                    <p className="p3 mt-xxs">
                        * 일요일 및 공휴일은 정부 전산 관계로 영업하지 않습니다
                    </p>
                </div>

            </article>

            <Buttons 
                name="phone"
                className="w-full mt-xs"
            />
            <Buttons
                name="kakao"
                className="w-full mt-xs"
            />
        </section>
    )
}

export default LgAddress