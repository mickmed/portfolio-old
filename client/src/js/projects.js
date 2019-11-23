
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
      navbar({project:e})
      projects('project', {'project':e, 'technologies':res.technologies, 'traits':res.traits})
      technologies('technologies', {'technologies':res.technologies})
    })    // let anchor = makeElement('a', 'proj-link', project, { href: e.site_url, target: "_blank" })

    let imgWrapper = makeElement('div', 'img-wrapper', project)
    // console.log(e.local_url)
    let img = makeElement('img', 'img', imgWrapper, { src: 'src/img/' + (e.local_url) })
    let modal = makeElement('div', 'modal', imgWrapper, {})
    modal.classList.add('project-' + e.id + '-modal')
    let h2 = makeElement('h2', 'project-title', modal, { innerText: e.title })
    let h3
    console.log('res.traits', res.traits)
    res.traits &&
    res.traits.forEach((trait) => {
      let traitsDiv = makeElement('div', 'traits-div', modal)
      h3 = makeElement('h3', 'trait', traitsDiv, {innerText:trait.name})
    })
    


    if (type === 'project' && window.matchMedia("(min-width: 600px)").matches) {
      modal.style.backgroundImage = 'linear-gradient(to right, rgba(0, 0, 0, 0.99),rgba(255, 255, 255, 1) )'
      h3.style.visibility= "visible"

    }
   
    // console.log('modal', modal)
    
  })
}
