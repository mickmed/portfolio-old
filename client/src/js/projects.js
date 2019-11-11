
import { makeElement } from './dom_helper'
import { getResults } from './api_helper'
import { showSingleItemm } from './api_helper'
import { technologies } from './technologies';
const pathToImg = require.context('../img/', true);
// console.log(pathToImg)

export let projects = async (type, data = []) => {

  let res = data.length === 0 ? await getResults(type) : data
  console.log(res)
  if (Object.keys(res)[0] === 'project') {
    res.project = [res.project]
    // console.log('rest', res)
    type = 'project'
  } else {  
    type = 'projects'
  }
  let mainContent = document.querySelector('.main-content')
  console.log('maincont', mainContent)
  // mainContent.innerHTML = ""
  
  let projectsDiv = makeElement('div', 'projects', mainContent, { id: 'projects' })
  projectsDiv.innerHTML = ""
   console.log(type)
  res[type].forEach((e, i) => {
    // console.log('src/'+ e.local_url)
    let projWrapper = makeElement('div', "proj-wrapper", projectsDiv, {})
    projWrapper.classList.add('proj-wrap' + e.id)
    if (type === 'project' && window.matchMedia("(min-width: 600px)").matches) {
      // console.log(projWrapper)
      projWrapper.style.width = '110%'
      // console.log('here')
    }

    let project = makeElement('div', 'project', projWrapper)
    project.classList.add('project' + e.id)
    project.addEventListener('click', async function (evt) {
      let res = await showSingleItemm(evt, e, 'projects')
      console.log('res event', res)
      let project = {project:e}
      console.log('project', project)
      let technologiesData = {'technologies':res.technologies}  
      // console.log('tech', technologies)
      document.querySelector('.main-content').innerHTML = ''
      projects('project', project)
      technologies('technologies', technologiesData)
    })    // let anchor = makeElement('a', 'proj-link', project, { href: e.site_url, target: "_blank" })

    let imgWrapper = makeElement('div', 'img-wrapper', project)
    // console.log(e.local_url)
    let img = makeElement('img', 'img', imgWrapper, { src: 'src/img/' + (e.local_url) })
    let modal = makeElement('div', 'modal', imgWrapper, {})
    modal.classList.add('project-' + e.id + '-modal')
    let h2 = makeElement('h2', 'project-title', modal, { innerText: e.title })
  })
}

