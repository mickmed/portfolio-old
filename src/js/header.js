import { ce } from './dom_helper.js'


export const header = parentDiv => {
let header =  ce('div', 'header', parentDiv)
  ce("a", 'name-plate', header, { innerText: "Mick Roth", href:'index.html' })
  ce("div", "occupation", header, { innerText: "software engineer" })
}
