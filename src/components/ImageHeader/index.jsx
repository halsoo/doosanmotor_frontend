function ImageHeader({ className, src }) {
    return(
        <header className={`${className} relative`}>
            <img 
                className="w-full h-full absolute top-0 left-0 object-cover object-center overflow-hidden"
                src={src} 
                alt="ImageHeader"
            />
            <div className="h1centershadow mx-auto absolute top-30% inset-x-0">
                <p>자동차 검사를</p>
                <p>두산자동차검사소에서</p>
                <p>빠르고 편하게</p>
            </div>
        </header>
    )
}

export default ImageHeader