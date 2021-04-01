import Icons from '../Shared/Icons'

function MainBanner ({ event }) {

    return (
        <div className="w-full h-5xl px-xl lg:desktop-event-padding py-lg basic-grid bg-clip-border bg-letter">
            <div className="h-full event-sq self-start col-span-1 flex justify-center items-center bg-alert rounded-half">
                <img className="w-70% h-auto" src="/icons/icons-thumb.png" alt="추천!" />
            </div>

            <div className="h-full self-start col-span-3 flex justify-between items-center">
                <div className="h-full my-auto">
                    <h6>EVENT</h6>
                    <p className="h4white">{event.title}</p>
                    <p className="h4white">{event.body}</p>
                </div>

                <Icons name="forward" svgClass="w-auto h-1/8 fill-white"/>
            </div>
        </div>
    )
}

export default MainBanner