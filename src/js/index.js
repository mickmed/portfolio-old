import { projects } from "./projects"
import { about } from "./about"
import { navbar } from "./nav"
import { technologies } from "./technologies.js"
import { person } from "./person.js"
import { burger } from "./burger"
import { burgerMenu } from "./burgerMenu"
import { qs } from "./dom_helper"
import { ce, makeElement } from "./dom_helper"
import "../css/index.css"
import "../css/about.css"
import { waveSVG } from "./waveSVG"
// import "../aboutAside.css"
import "../css/oliveLeaf.css"
import "../css/uploader.css"
import "../css/sidebar.css"
import "../css/nav.css"
import "../css/waveSVG.css"


const sidebar = qs(".sidebar")[0]
const main = qs(".main-content")[0]

const loadApp = () => {
  
  navbar(sidebar)
  waveSVG(sidebar)

  about(main)

  ce("div", "title", sidebar, {innerText: "Mick Roth"})
  ce("div", "position", sidebar, {innerText: "software engineer"})








  // person()
  // technologies("technologies")

  // projects("projects")
  
}
loadApp()

// burger()
// burgerMenu()
