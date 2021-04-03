const centerLogo = (element) => {
    const parent = element.parentNode
    const parentWH = parent.getBoundingClientRect()
    const childWH = element.getBBox()

    const ratio = parentWH.height / childWH.height

    const result = {
        width: childWH.width * ratio,
        height: childWH.height * ratio
    }

    parent.style.width = `${result.width}px`
    parent.style.height = `${result.height}px`
}

const centerIcon = (element) => {
    const parent = element.parentNode
    const parentWH = parent.getBoundingClientRect()
    const childWH = element.getBBox()

    const ratio = parentWH.height / childWH.height

    const result = {
        width: childWH.width * ratio,
        height: childWH.height * ratio
    }

    parent.style.width = `${result.height}px`
    parent.style.height = `${result.height}px`
}

export { centerLogo, centerIcon }