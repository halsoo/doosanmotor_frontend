import Icons from '../Icons'

function MainBanner ({ event }) {

    return (
        <div className="w-full h-5xl px-xl lg:desktop-event-padding py-lg flex flex-row justify-between items-center bg-clip-border bg-letter">
            <div className="event-sq flex justify-center items-center bg-alert rounded-half">
                <img className="w-70% h-auto" src="/icons/icons-thumb.png" alt="추천!" />
            </div>

            <div className="">
                <h6>EVENT</h6>
                <p className="h4white">{event.title}</p>
                <p className="h4white">{event.body}</p>
            </div>

            <Icons name="forward" svgClass="w-auto h-1/3 fill-white"/>
        </div>
    )
}

export default MainBanner