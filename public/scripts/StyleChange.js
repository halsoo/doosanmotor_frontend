const centerLogo = (element) => {
    const parent = element.parentNode
    const childWH = element.getBoundingClientRect()

    parent.style.width = `${childWH.width}px`
    parent.style.height = `${childWH.height}px`
}

const goLogo = (ref) => {
    centerLogo(ref.current)
}

const centerIcon = (element) => {
    const parent = element.parentNode
    const parentWH = parent.getBoundingClientRect()
    const childWH = element.getBBox()

    const ratio = parentWH.height / childWH.height

    parent.style.width = `${childWH.height * ratio}px`
    parent.style.height = `${childWH.height * ratio}px`
}

const goIcon = (ref) => {
    centerIcon(ref.current)
}

export { goLogo, goIcon }