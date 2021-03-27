function TitlesBar({ titles, onClick }) {
    return(
        <div className="w-full py-m flex flex-row justify-between items-center sticky top-block bg-white">
            {titles.map((title, idx) => {
                return (
                    <button onClick={onClick(title)} key={`${idx}-${title}`}>
                        <p className="p1centerop30">{title}</p>
                    </button>
                )
            })}
        </div>
    )
}

export default TitlesBar