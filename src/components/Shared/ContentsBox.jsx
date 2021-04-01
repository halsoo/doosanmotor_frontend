function ContentsBox({ contents, last, id }) {

    const margin = !last ? 'mb-2xl' : null
    const isContentsObject = Object.keys(contents).length > 0 ? true : false

    return isContentsObject 
        ? (
            <div 
                id={id}
                className={`w-full flex flex-col ${margin}`}
            >
                {contents.title 
                    ?   <h2 className="mb-m">{contents.title}</h2>
                    :   null
                }
                
                {contents.subtitle
                    ?   <h4 className="mb-2xl">{contents.subtitle}</h4>
                    :   null
                }
                
                {contents.body
                    ?   <p className="p1 mb-2xl">{contents.body}</p>
                    :   null
                }
                
                {contents.imagePath
                    ?   <img 
                            className="w-full h-6xl object-cover object-center overflow-hidden"
                            src={contents.imagePath} 
                            alt={`${contents.title}'s image`}
                        />
                    :   null
                }
            </div>
        ) 
        : null
}

export default ContentsBox