const centerLogo = (element) => {
    const parent = element.parentNode
    const parentWH = parent.getBoundingClientRect()
    const childWH = element.getBBox()

    const ratio = parentWH.height / childWH.height

    parent.style.width = `${childWH.width * ratio}px`
    parent.style.height = `${childWH.height * ratio}px`
}

const centerIcon = (element) => {
    const parent = element.parentNode
    const parentWH = parent.getBoundingClientRect()
    const childWH = element.getBBox()

    const ratio = parentWH.height / childWH.height

    parent.style.width = `${childWH.height * ratio}px`
    parent.style.height = `${childWH.height * ratio}px`
}

export { centerLogo, centerIcon }