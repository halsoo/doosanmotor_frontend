import { useRouter } from 'next/router'

import Nav from '../../src/components/Nav'
import Block from '../../src/components/Shared/Block'
import Icons from '../../src/components/Shared/Icons'

function BookingConfirmed(props) {
    const router = useRouter()
    const bookingID = router.query && router.query.id ? router.query.id : null
    
    return (
        <div className="w-full min-h-screen">
            <Nav/>
            <Block />
            
            {
                bookingID ? (
                    <div className="w-full px-xl flex flex-col items-center">
                        <div className="w-5xl2 h-5xl2 mt-2xl2 flex justify-center items-center bg-light-grey rounded-half">
                            <Icons
                                name="done"
                                svgClass="h-3xl fill-blue opacity-85"
                            />
                        </div>

                        <h2 className="h2centerblue mt-xl">예약이 완료되었습니다!</h2>

                        <div className="w-full h-event-header mt-2xl2 py-xl px-m bg-light-grey">
                            <h4 className="h4center">
                                브라우저 창으로 돌아가 <br/>
                                예약 세부정보를 확인해주세요.
                            </h4>
                        </div>
                    </div>
                ) : (
                    <div className="w-full px-xl flex flex-col items-center">
                        <div className="w-5xl2 h-5xl2 mt-2xl2 flex justify-center items-center bg-light-grey rounded-half">
                            <Icons
                                name="tool"
                                svgClass="h-3xl fill-alert opacity-85"
                            />
                        </div>

                        <h2 className="h2center text-alert mt-xl">앗! 무언가 잘못되었습니다!</h2>

                        <div className="w-full h-7xl mt-2xl2 py-xl px-m flex flex-col justify-center bg-light-grey">
                            <h4 className="h4center opacity-60">
                                브라우저 창으로 돌아가 <br/>
                                예약 여부를 확인해주세요. <br/><br/>
                                예약이 정상적으로 이루어지지 않았다면 <br/>
                                관리자에게 연락해주세요.
                            </h4>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BookingConfirmed