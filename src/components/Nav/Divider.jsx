function Divider({ menu, refer }) {

    const divider = 
        <hr 
            className={`w-full border-t-1px border-divider transition-about-nav-divider`}
            ref={refer}
        />

    const render = menu
        ? (
            <div className="w-full sm:p-divider lg:p-divider-desktop bg-white">
                {divider}
            </div>
        )
        : divider

    return render
}

export default Divider