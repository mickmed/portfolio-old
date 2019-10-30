import { makeElementt } from './dom_helper.js'
import { getResultss } from './api_helper'
import { showSingleItemm } from './api_helper'
import { main } from './main.js'
import { navBar } from './nav.js'

export let renderTechs = async (type, data = []) => {
  console.log(type, data)
  // let res = await getResultss(type)
  let res = data.length === 0 ? await getResultss(type) : data

  console.log(res)
  let sidebar = document.querySelector('.sidebar')
  // console.log('chils', sidebar.children)

  sidebar.childNodes[3] && sidebar.removeChild(sidebar.childNodes[3])

  let techList = makeElementt('div', 'tech-list', sidebar, {})

  if (res) {

    res.technologies.forEach(e => {
      let imgDiv = makeElementt('img', 'tech-img', techList, { src: 'src/' + e.local_url })
      // console.log(imgDiv)
      imgDiv.addEventListener('click', async(event) => {
        console.log(e)
        let technologies = await showSingleItemm(event, e, 'technologies')
      
        console.log('ans', technologies)
        main('projects', technologies)
        
      })

    })
  } else {
    let sidebar = document.querySelector('.tech-list')
    sidebar.innerHTML = ""
    sidebar.innerHTML = "This portfolio includes a Rails API pushed to Google App Engine and using Active Storage for pictures. The front end is built with Vanilla Javascript and uses Webpack."
    page.style.textAlign = 'center'
  }
}