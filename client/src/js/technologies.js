import { makeElement } from './dom_helper.js'
import { getResultss } from './api_helper'
import { showSingleItemm } from './api_helper'
import { projects } from './projects.js'
import { navBar, navbar } from './nav.js'

export let technologies = async (type, data = []) => {
 
  let res = data.length === 0 ? await getResultss(type) : data

  let sidebar = document.querySelector('.sidebar')
  console.log('chils', sidebar.children)

  sidebar.childNodes[3] && sidebar.removeChild(sidebar.childNodes[3])

  let techList = makeElement('div', 'tech-list', sidebar, {})
  console.log('chils', sidebar.children)
  if (res) {

    res.technologies.forEach(e => {
      let imgDiv = makeElement('img', 'tech-img', techList, { src: 'src/' + e.local_url })
      // console.log(imgDiv)
      imgDiv.addEventListener('click', async(event) => {
        // console.log(e)
        let technologies = await showSingleItemm(event, e, 'technologies')
      
        console.log('ans', technologies)
        document.querySelector('.main-content').innerHTML = ''
        navbar(technologies) 
        projects('projects', technologies)
             
      })

    })
  } 
}