// import axios from './axios.js'

import { a } from "./uploader.js.js"


document.onLoad = getProjects()

function getProjects() {
  console.log("here")
  axios("http://localhost:3000/projects")
    .then(response => {
      console.log(response)
      return renderTitles(response.data)
    })

    .catch(error => console.error(error))
}

let renderTitles = res => {
  console.log(res)
  projectDivs = document.querySelectorAll(".project-title")
  console.log(projectDivs)
  console.log(res[0].title)
  projectDivs.forEach((e, i) => {
    console.log(e.children[1])
    e.children[0].innerText = res[i].title
    e.children[1].innerText = res[i].subtitle
  })
}

function navBar() {
  const array = ["projects", "bio", "tech", "articles"]
  let sidebar = document.querySelector(".sidebar")
  console.log("nav", sidebar)
  sidebar.style.color = "white"
  array.forEach(e => {
    let div = document.createElement("div")
    sidebar.appendChild(div)
    div.innerText = e
    // console.log(e)
  })
}
navBar()

function adjustWidth() {
  let parent = document.querySelector(".scrollable-page")
  let child = document.getElementById("nav")
  child.style.width = parent.offsetWidth * 0.95 + "px"
  // console.log(typeof parent.offsetWidth)
  // console.log(child)
}

adjustWidth()

function showIcons() {
  let projects = document.getElementsByClassName("modal")
  // console.log(icons)
  console.log(window.innerWidth)
  let eventType
  if (window.innerWidth < 600) {
    eventType = "click"
    console.log(eventType)
  } else {
    eventType = "mouseover"
    console.log(eventType)
  }
  for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener(eventType, e => {
      let icons = document.querySelectorAll(".techs")
      console.log(icons[i].children.length)
      console.log(window.innerWidth)
      for (let j = 0; j < icons[i].children.length; j++) {
        let ics = icons[i].children[j].children[0]
        ics.style.display = "inline"

        // ics.style.width="1.5em"
        let k = 0
        let iconAnim = setInterval(() => {
          k += 2.5
          // console.log(k)
          if (k < 100) {
            ics.style.transform = "translate(" + -k + "px)"
          } else {
            clearInterval(iconAnim)
          }
        }, 20)
      }
    })
    projects[i].addEventListener("mouseout", e => {
      let icons = document.querySelectorAll(".techs")
      console.log(icons[i].children.length)
      for (let j = 0; j < icons[i].children.length; j++) {
        icons[i].children[j].children[0].style.display = "none"
      }
    })
  }
}

showIcons()


let url = window.location.hash

navItems = document.querySelector("nav")
navItems.addEventListener("click", e => {
  for (let i = 0; i < navItems.children.length; i++) {
    if (navItems.children[i].innerText === e.target.innerText) {
      navItems.children[i].firstChild.nextSibling.firstChild.style.color = "red"
    } else {
      navItems.children[i].firstChild.nextSibling.firstChild.style.color =
        "black"
    }
  }
})
