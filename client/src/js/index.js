import '../css/index.css'
// import '../index.html'
import { makeElementt } from './dom_helper'
import { getResultss } from './api_helper'
import { showSingleItemm } from './api_helper'

let BASE_URL = 'http://localhost:3000'
// let BASE_URL = 'https://portfolio-mick.appspot.com'




let results = async (type) => {
  let res = await getResultss(type)
  console.log('results', res)
  type === 'projects' && renderProjectTitles(res)
  type === 'technologies' && displayTechImg(res)
  return res
}

let renderProjectTitles = (res) => {
  let projects = document.querySelector('.projects')
  projects.innerHTML = ""

  res.projects.forEach((e, i) => {
    // console.log('src/'+ e.local_url)

    let projWrapper = makeElementt('div', "proj-wrapper", projects, {})

    projWrapper.classList.add('proj-wrap' + e.id)
    let project = makeElementt('div', 'project', projWrapper)
    project.classList.add('project' + e.id)

    let anchor = makeElementt('a', 'proj-link', project, { href: e.site_url, target: "_blank" })
    let imgWrapper = makeElementt('div', 'img-wrapper', anchor)

    let img = makeElementt('img', 'img', imgWrapper, { src: 'src/' + e.local_url })
    let modal = makeElementt('div', 'modal', imgWrapper, {})
    modal.classList.add('project-' + e.id + '-modal')
    let h2 = makeElementt('h2', 'project-title', modal, { innerText: e.title })
  })
}

let renderAbout = (res) => {
  let projects = document.querySelector('.projects')
  projects.innerHTML = ""

}


let displayTechImg = (res) => {
  let techListDiv = document.querySelectorAll('.tech-list')
  console.log(res)
  res.technologies.forEach(e => {
    let imgDiv = makeElementt('img', 'tech-img', techListDiv[0], { src: '/src/' + e.local_url })
    // console.log(imgDiv)
    imgDiv.addEventListener('click', (event) => {
      console.log(e)
      let ans = getSingle(event, e, 'technologies')
      console.log(ans)
    })

  })
}


let getSingle = async function (event, e, type) {
  let res = await showSingleItemm(event, e, type)
  console.log('results', res)
  renderProjectTitles(res)
  return res
}
// renderProjDivs()


function navBar() {
  const array = ['projects', 'about', 'resume']
  let sidebar = document.querySelector('.sidebar')
  let nav = document.createElement('div')
  nav.className = "nav"
  sidebar.prepend(nav)
  console.log('nav', sidebar)
  sidebar.style.color = 'black'
  array.forEach(e => {
    let div = document.createElement('div')

    nav.appendChild(div)
    div.innerText = e
    div.style.background = "white"
    div.addEventListener('click', (e) => {
      console.log('nav', sidebar.children)
      for(let i=0;i<nav.children.length;i++){
        nav.children[i].style.color="black"
        nav.children[i].style.fontSize="1em"

      }
      e.target.style.color = "red"
      e.target.style.fontSize = "1.5em"
      if (div.innerText === 'projects') {
        results('projects')

      }
      if (div.innerText === 'about') {
        renderAbout()

      }
    })
    // console.log(e)
  })
}
navBar()
results('projects')
results('technologies')

// function adjustWidth() {
//   let parent = document.querySelector('.scrollable-page')
//   let child = document.getElementById('nav')
//   child.style.width = parent.offsetWidth * .95 + 'px'
//   // console.log(typeof parent.offsetWidth)
//   // console.log(child)
// }

// // adjustWidth()


// function showIcons() {
//   let projects = document.getElementsByClassName('modal')
//   // console.log(icons)
//   // console.log(window.innerWidth)
//   let eventType
//   if(window.innerWidth < 600){
//     eventType = 'click'
//     // console.log(eventType)
//   }else{
//     eventType = 'mouseover'
//     // console.log(eventType)
//   }
//   for (let i = 0; i < projects.length; i++) {


//       projects[i].addEventListener(eventType, (e) => {
//         let icons = document.querySelectorAll('.techs')
//         // console.log(icons[i].children.length)
//         // console.log(window.innerWidth)
//         for (let j = 0; j < icons[i].children.length; j++) {
//           let ics = icons[i].children[j].children[0]
//           ics.style.display = "inline"

//           // ics.style.width="1.5em"
//           let k = 0
//           let iconAnim = setInterval(() => {
//             k += 2.5
//             // console.log(k)
//             if (k < 100) {
//               ics.style.transform = "translate(" + -k + "px)"
//             } else {
//               clearInterval(iconAnim)
//             }
//           }, 20)


//         }
//       })
//       projects[i].addEventListener('mouseout', (e) => {
//         let icons = document.querySelectorAll('.techs')
//         console.log(icons[i].children.length)
//         for (let j = 0; j < icons[i].children.length; j++) {
//           icons[i].children[j].children[0].style.display = "none"


//         }
//       })

//   }
// }

// showIcons()
// let project1 = document.querySelector('.project1')
// let project1Modal = document.querySelector('.project-1-modal')
// console.log(project1Modal)

// project1.addEventListener('mouseover', () => {
//   console.log('clcik')
//   project1Modal.style.display = "block"

// })


// project1.addEventListener('mouseleave', () => {
//   console.log('clcik')


//   project1Modal.style.display = "none";
// })



// let project2 = document.querySelector('.project2')
// let project2Modal = document.querySelector('.project-2-modal')
// // console.log(project1Modal)

// project2.addEventListener('mouseover', () => {
//   console.log('clcik')
//   project2Modal.style.display = "block"

// })


// project2.addEventListener('mouseleave', () => {
//   console.log('clcik')


//   project2Modal.style.display = "none";
// })


// let project3 = document.querySelector('.project3')
// let project3Modal = document.querySelector('.project-3-modal')
// // console.log(project1Modal)
// let projWrapper = document.querySelector('.proj-wrapper')
// projWrapper.addEventListener('mouseover', (e) => {
//   console.log(e.target.nextSibling.nextSibling)
//   let techs = e.target.nextSibling.nextSibling
//   techs.style.visibility = "visible"
//   project3Modal.style.display = "block"

// })


// projWrapper.addEventListener('mouseleave', (e) => {
//   console.log(e.target.querySelector('.techs'))
//   let techs = e.target.querySelector('.techs')

//   techs.style.visibility = "hidden";
// })




// let projWrappers = document.querySelectorAll('.proj-wrapper')
// console.log(projWrappers)
// let projects = document.querySelector('.projects')
// projWrappers.forEach((proj) => {
//   proj.addEventListener('mouseover', (e) => {
//     console.log(e.target.querySelector('.modal'))
//     let techs = e.target.nextSibling.nextSibling
//     let modal = e.target.querySelector('.modal')

//     modal.style.display="block"

//   })
// proj.addEventListener('mouseleave', (e) => {
//   console.log(e.target.querySelector('.techs'))
//   let techs = e.target.querySelector('.techs')

//   techs.style.visibility = "hidden";
// })
// })
// let project4 = document.querySelector('.project4')
// let project4Modal = document.querySelector('.project-4-modal')
// // console.log(project1Modal)

// project4.addEventListener('mouseover', () => {
//   console.log('clcik')
//   project4Modal.style.display = "block"

// })


// project4.addEventListener('mouseleave', () => {
//   console.log('clcik')


//   project4Modal.style.display = "none";
// })


let url = window.location.hash;


// if(window.location.hash) {
//   var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
//   alert (hash);
//   // hash found
// } else {
//   // No hash found
// navItems = document.querySelector('nav')
// navItems.addEventListener('click', (e) => {

//   for (let i = 0; i < navItems.children.length; i++) {




//     if (navItems.children[i].innerText === e.target.innerText) {

//       navItems.children[i].firstChild.nextSibling.firstChild.style.color = "red"

//     } else {
//       navItems.children[i].firstChild.nextSibling.firstChild.style.color = "black"

//     }

//   }

// })