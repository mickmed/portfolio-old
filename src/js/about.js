import { makeElement } from "./dom_helper.js"
import { person } from "./person.js"


let text =
  "I am currently an Instructional Associate for the Software Engineering Immersive program at General Assembly's New York campus. I also freelance as a React Developer. Recently, I had the pleasure of working on the data vizualization components for the 100million Project, launched on CSPAN. "
let text1 =
  "Although I am a self taught coder, in 2018 I had the opportunity to attend the codeBridge program at Per Scholas in the Bronx, which in turn afforded me the possibility to attend General Assembly's Web Development Immersive program. Over the last year, I have worked at General Assembly as a Teaching Assistant and an Instructional Associate."

let text2 =
  "You can see some projects here. I mostly build full-stack Javascript apps with React, Node, Sequelize, Express, and Postgres. I also enjoy Vanilla Javascript. Other front-end tools are CSS, JQuery, Bootstrap, and Mapbox.This site was built with Vanilla Javascript and comprizes of a Rails backend deployed on Google App Engine. Images are stored using Rails Active Storage."

export let about = (parentDiv) => {
  console.log(parentDiv)
  let mainContent = parentDiv

  // document.querySelector('.sidebar').style.display === "none"
  // &&  (document.querySelector('.sidebar').style.display = "inline")

  let sidebar = document.querySelector(".sidebar")
  // console.log(sidebar)
  // sidebar.style.display = "none"
  // person()
  // aboutAside()

  // mainContent.removeChild(mainContent.childNodes[2])
  // mainContent.innerText = ''
  let about = makeElement("div", "about", mainContent, { id: "about" })
  
  let paraWrap = makeElement("div", "para-wrap", about)
  let para = makeElement("p", "about-para", paraWrap, { innerText: text })
  let pic = document.createElement("object")
  pic.classList.add("leaf-pic")
  pic.type = "image/svg+xml"
  pic.data = "../src/img/oliveLeaves.svg"
  paraWrap.appendChild(pic)


  let paraWrap1 = makeElement("div", "para-wrap", about)
  let para1 = makeElement("p", "about-para", paraWrap1, { innerText: text1 })
  let pic1 = document.createElement("object")
  pic1.classList.add("leaf-pic1")
  pic1.id = "leaf-pic1"
  pic1.type = "image/svg+xml"
  pic1.data = "../src/img/oliveLeaves1.svg"
  paraWrap1.appendChild(pic1)

  let paraWrap2 = makeElement("div", "para-wrap", about)
  let para2 = makeElement("p", "about-para", paraWrap2, { innerText: text2 })
  let pic2 = document.createElement("object")
  pic2.classList.add("leaf-pic2")
  pic2.id = "leaf-pic2"
  pic2.type = "image/svg+xml"
  pic2.data = "../src/img/oliveLeaves1.svg"
  paraWrap2.appendChild(pic2)

  // let vineWrapper = makeElement("div", "vines", about)

  // projects.innerHTML = ""
paraWrap.addEventListener('click', ()=>{
  let object = document.getElementsByClassName("leaf-pic")
  let svg = object[0].contentDocument
  let olive = svg.getElementById('olive')
  console.log('olive', olive.children[3])
  olive.children[3].style.animation="fills 4s forwards"
  // olive[1].style.animation="fills 4s forwards"
})
  

// let x = document.getElementById('olive')
// console.log('x', x)
}
