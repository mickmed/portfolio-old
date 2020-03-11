import { ce } from "./dom_helper.js"


export const waveSVG = (parentDiv) => {
    let mainDiv = parentDiv
    // console.log(sidebar.children)
    // sidebar.removeChild(sidebar.children[2])
    let svg = ce("object", "wave-svg", mainDiv, {type:"image/svg+xml", data:"../src/img/waveSVG.svg"})
    console.log(svg)
    return svg
}