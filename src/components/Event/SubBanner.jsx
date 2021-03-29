function SubBanner ({ className, event }) {

    return (
        <div className={`basic-grid h-4xl mx-xl py-s sm:p-0 lg:desktop-event-padding bg-clip-border bg-letter rounded-12px ${className}`}>
            <img className="col-start-1 col-end-2 ml-m event-icon place-self-center" src="/icons/icons-thumb.png" alt="추천!" />

            <div className="col-start-2 col-end-5 self-center">
                <p className="h4white">{event.title}</p>
                <p className="h4white">{event.body}</p>
            </div>
        </div>
    )
}

export default SubBanner