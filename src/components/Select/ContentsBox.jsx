function ContentsBox({ contents, last, id }) {

    const margin = !last ? 'mb-2xl' : null

    return (
        <div 
            id={id}
            className={`w-full flex flex-col ${margin}`}
        >
            
            <h2 className="mb-m">{contents.title}</h2>
            
            <h4 className="mb-2xl">{contents.subtitle}</h4>
            
            <p className="p1 mb-2xl">{contents.contents}</p>
            
            <img 
                className="w-full h-6xl object-cover object-center overflow-hidden"
                src={contents.imagePath} 
                alt={`${contents.title}'s image`}
            />
        </div>
    )


}

export default ContentsBox