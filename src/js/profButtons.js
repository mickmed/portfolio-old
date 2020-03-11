export const profButtons = () => {
  let div = makeElement("div", "btn-wrapper", sidebar, {})

  let aboutBtn = makeElement("button", "about-btn", div, {
    innerText: "Download",
    id: "about-btn"
  })
  let aboutBtn4 = makeElement("btn", "about-btn", div, {
    innerText: "LinkedIn",
    id: "about-btn"
  })
  let aboutBtn5 = makeElement("btn", "about-btn", div, {
    innerText: "Angelist",
    id: "about-btn"
  })
  let aboutBtn6 = makeElement("btn", "about-btn", div, {
    innerText: "BuiltInNyc",
    id: "about-btn"
  })
  let aboutBtn7 = makeElement("btn", "about-btn", div, {
    innerText: "GlassDoor",
    id: "about-btn"
  })
}
