
import { makeElementt } from './dom_helper'
import { getResultss } from './api_helper'
import { showSingleItemm } from './api_helper'
import { sidebar } from './sidebar';
const pathToImg = require.context('../img/', true);
// console.log(pathToImg)

export let projects = async (type, data = []) => {
  // let renderProjects = () = 
  let res = data.length === 0 ? await getResultss(type) : data
  // let res = await getResultss(type)
  console.log('res', res)

  if (Object.keys(res)[0] === 'project') {
    res.project = [res.project]
    // console.log('rest', res)
    type = 'project'
  } else {  
    type = 'projects'
  }
  let mainContent = document.querySelector('.main-content')
  // mainContent.innerHTML = ''
  if (mainContent.childNodes[2]) {
    mainContent.removeChild(mainContent.childNodes[2])
  }
  let projectsDiv = makeElementt('div', 'projects', mainContent, { id: 'projects' })
  projectsDiv.innerHTML = ""
  //  console.log(type)
  res[type].forEach((e, i) => {
    // console.log('src/'+ e.local_url)
    let projWrapper = makeElementt('div', "proj-wrapper", projectsDiv, {})
    projWrapper.classList.add('proj-wrap' + e.id)
    if (type === 'project' && window.matchMedia("(min-width: 600px)").matches) {
      // console.log(projWrapper)
      projWrapper.style.width = '110%'
      // console.log('here')
    }

    let project = makeElementt('div', 'project', projWrapper)
    project.classList.add('project' + e.id)
    project.addEventListener('click', async function (evt) {
      let res = await showSingleItemm(evt, e, 'projects')
      console.log('res event', res)
      let project = {project:e}
      console.log('project', project)
      let technologies = {'technologies':res.technologies}
      console.log('tech', technologies)
      projects('project', project)
      sidebar('technologies', technologies)
    })    // let anchor = makeElementt('a', 'proj-link', project, { href: e.site_url, target: "_blank" })

    let imgWrapper = makeElementt('div', 'img-wrapper', project)
    // console.log(e.local_url)
    let img = makeElementt('img', 'img', imgWrapper, { src: 'src/img/' + (e.local_url) })
    let modal = makeElementt('div', 'modal', imgWrapper, {})
    modal.classList.add('project-' + e.id + '-modal')
    let h2 = makeElementt('h2', 'project-title', modal, { innerText: e.title })
  })
}

