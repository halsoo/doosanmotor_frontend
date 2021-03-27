const getAbsPos = (element) => {
	let res = {
        x: 0,
        y: 0,
    }

    const viewport = document.documentElement;  
    const box = element.getBoundingClientRect();
    const scrollLeft = viewport.scrollLeft;
    const scrollTop = viewport.scrollTop;

    res.x = box.left + scrollLeft;
    res.y = box.top + scrollTop;
    
    return res
}

const scrollTo = (element) => {
    const headerOffset = 56 + 72; // Select-TitlesBar height + Nav height
    const elemPos = getAbsPos(element)
    const offsetPosition = elemPos.y - headerOffset;

    window.scrollTo({
        top: offsetPosition,
    });
}

export default scrollTo