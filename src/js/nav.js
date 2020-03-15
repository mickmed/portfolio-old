import { ce, makeElement } from "./dom_helper"
import { projects } from "./projects"
import { technologies } from "./technologies"
import { about } from "./about"
import { resume } from "./resume"

import { resumeAside } from "./resumeAside"
import { sidebar } from "./sidebar"

export function navbar(parentDiv, data, type = "about") {
  // { resume: 'vaadin:diploma-scroll' }
  console.log(parentDiv)
  const array = [
    // { projects: "ion:newspaper-outline" },
    // { resume: "noto:scroll" },
    // { about: "noto:information" }
    { about: "fa-address-card" },
    { projects: "fa-project-diagram" },
    { resume: "fa-file-signature" },
    
  ]
  // document.querySelector('.sidebar').style.display === "none"
  // && (document.querySelector('.sidebar').style.display = "inline")
  // && console.log('hjisdf')

  let render = (type, data = null) => {
    console.log(type, "data", data)
    // document.querySelector('.main-content').innerHTML = " "
    let mainDiv = parentDiv
    mainDiv.innerHTML = ""

    let nav = ce("div", "nav", mainDiv, {})
    // nav.style.position = "relative"
    // console.log('nav', nav)
    // name = type === 'technology'
    // console.log(data && Object.keys(data))
    let title = data && Object.keys(data)[0] === "project" ? "title" : "name"
    // console.log(title)
    let ext = data && data[Object.keys(data)[0]][title]

    array.forEach((opt, i) => {
    
      let div = ce("div", "option", nav, {})
     
      // let icon = ce("span", "iconify", div)
      // icon.setAttribute("data-icon", Object.values(array[i]))
      // icon.setAttribute("data-inline", false)
let text = ce("div", "text", div, { innerText: Object.keys(array[i]) })
      div.appendChild(text)
      let icon = ce("i", Object.values(array[i]), div)
      console.log(Object.keys(array[i]))
      let iconClass = Object.keys(array[i])[0] === 'about' ? 
      'far' : 
      'fas'

      console.log(iconClass)
      icon.classList.add(iconClass)


      

      if (type === Object.keys(array[i])[0]) {
        let moreText = data
          ? ce("div", "more-text", div, { innerText: " - " + ext })
          : document.createTextNode(" ")
        div.appendChild(moreText)
        div.style.color = "yellow"
        // div.style.position = "absolute"
        // div.style.top = 0
        // div.style.left = '2%'
      }

      div.addEventListener("click", e => {
        //  console.log('keys', Object.keys(array[i])[0])
        if (Object.keys(array[i])[0] === "projects") {
          render("projects")
          // technologies('technologies')
          projects("projects")
        }
        if (Object.keys(array[i])[0] === "about") {
          render("about")
          about()
          // aboutAside()
        }
        if (Object.keys(array[i])[0] === "resume") {
          render(Object.keys(array[i])[0])
          resume()
          // resumeAside()
        }
        let spliced = array.splice(array.indexOf(e.target.innerText), 1)
        array.push(spliced[0])
      })
    })
  }
  render(type, data)
}
