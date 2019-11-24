
import { makeElement } from './dom_helper'
import { getResults } from './api_helper'
import { showSingleItemm } from './api_helper'
import { technologies } from './technologies';
import { navbar } from './nav';
const pathToImg = require.context('../img/', true);
console.log(pathToImg)

export let projects = async (type, data = []) => {
  console.log('datalenght', data.length)
  console.log('data', data)
  let res = data.length === 0 || data.length === 'undefined' ? await getResults(type) : data
  console.log('res', res)
  if (Object.keys(res)[0] === 'project') {
    res.project = [res.project]
    // console.log('rest', res)
    type = 'project'
  } else {
    type = 'projects'
  }
  let mainContent = document.querySelector('.main-content')
  // console.log('maincont', mainContent)
  // mainContent.innerHTML = ""

  let projectsDiv = makeElement('div', 'projects', mainContent, { id: 'projects' })
  // projectsDiv.innerHTML = ""
  //  console.log('projecgt data', res)
  res[type].forEach((e, i) => {
    // console.log('src/'+ e.local_url)
    let projWrapper = makeElement('div', "proj-wrapper", projectsDiv, {})
    projWrapper.classList.add('proj-wrap' + e.id)
    if (type === 'project' && window.matchMedia("(min-width: 600px)").matches) {
      // console.log(projWrapper)
      projWrapper.style.width = '110%'
      projWrapper.style.fontSize = '2em'


    }

    let project = makeElement('div', 'project', projWrapper)
    project.classList.add('project' + e.id, 'projectCard')
    project.addEventListener('click', async function (evt) {
      let res = await showSingleItemm(evt, e, 'projects')

      document.querySelector('.main-content').innerHTML = ''
      navbar({ project: e })
      projects('project', { 'project': e, 'technologies': res.technologies, 'traits': res.traits })
      technologies('technologies', { 'technologies': res.technologies })
    })    // let anchor = makeElement('a', 'proj-link', project, { href: e.site_url, target: "_blank" })

    let imgWrapper = makeElement('div', 'img-wrapper', project)
    // console.log(e.local_url)
    let img = makeElement('img', 'img', imgWrapper, { src: 'src/img/' + (e.local_url) })


    let modal = makeElement('div', 'modal', imgWrapper, {})
    modal.classList.add('project-' + e.id + '-modal', 'modal-slide')
    let modalSpan = makeElement('span', 'modalSpan', modal)

    console.log(e.target)
    let hoverModal = makeElement('div', 'hover-modal', imgWrapper)
    // hoverModal.style.opacity = 0
    let hoverModalSpan = makeElement('span', 'hover-modal-span', hoverModal)
    // hoverModalSpan.style.display = "none"

    let modalh2 = makeElement('h2', 'project-title', modal, { innerText: e.title })
    let hoverModalh2 = makeElement('h2', 'project-title', hoverModalSpan, { innerText: e.title })

    let hoverModalButton = makeElement('button', 'site-button', hoverModalSpan, { innerText: 'open' })
    hoverModalButton.style.display = "none"

//     modal.addEventListener('mouseenter', (evt) => {
//       evt.stopPropagation()
//       console.log('over', evt.target)
//       let init = 0
//       let t = setInterval(()=>{
//         // console.log('init', init)
//         if(init >= 100){
//           clearInterval(t)
         
//         }else{
//           // console.log('init', 1/init)
//           // modalSpan.style.opacity = 1 - (.01 * init)
//           modalSpan.style.left = init/100 * -60 + '%'
//           init ++
//         }
//       },1)
//       modalh2.style.display = "none"
//       // modal.style.display = "none"

//       hoverModal.style.display = 'flex'
//       hoverModalh2.style.display = "block"
//       hoverModalButton.style.display = "block"

//       hoverModalSpan.style.display = "flex"
      
//     },true)
// hoverModalSpan.addEventListener('mouseleave', (event) => {
  
//       event.stopPropagation()
//       console.log('out', event.target)
//       console.log(event.relativeTarget)

//         modal.style.display = "flex"
//         modalSpan.style.display = "flex"
//         modalSpan.style.opacity = 1
//         modalSpan.style.left = 0

//         hoverModal.style.display = 'none'
//         hoverModalSpan.style.display = "none"
//         modalh2.style.display = "inline"
//       },true)
      // modal.addEventListener('mouseout', (event) => {
      //   event.stopPropagation()
      //   console.log('out', event.target)
  
      //     modal.style.display = "flex"
      //     modalSpan.style.display = "flex"
      //     modalSpan.style.opacity = 1
      //     modalSpan.style.left = 0
  
      //     hoverModal.style.display = 'none'
      //     hoverModalSpan.style.display = "none"
      //     modalh2.style.display = "inline"
      //   },true)

    let h3
    console.log('res.traits', res.traits)
    let traitsDiv = makeElement('div', 'traits-div', modal)
    res.traits &&
      res.traits.forEach((trait) => {

        h3 = makeElement('h3', 'trait', traitsDiv, { innerText: trait.name })
      })



    if (type === 'project' && window.matchMedia("(min-width: 600px)").matches) {
      modal.style.backgroundImage = 'linear-gradient(to right, rgba(255,255,255, 1),rgba(255, 255, 255, 1) )'
      let traitNames = (document.querySelectorAll('h3'))
      traitNames.forEach(name => name.style.visibility = "visible")
      // modal:after.style.backgroundImage = 'linear-gradient(to right, rgba(150,150,150, 0.99),rgba(255, 255, 255, 1) )'
    }

    // console.log('modal', modal)

  })
}

