function EventHeader ({ title }) {

    return (
        <div className="h-5xl flex justify-center items-center bg-clip-border bg-letter">
            <div className="">
                <p className="h4centeralert">EVENT</p>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default EventHeader