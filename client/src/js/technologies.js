import { makeElement } from './dom_helper.js'
import { getResultss } from './api_helper'
import { showSingleItemm } from './api_helper'
import { projects } from './projects.js'
import { navBar, navbar } from './nav.js'

export let technologies = async (type, data = []) => {

  let res = data.length === 0 ? await getResultss(type) : data

  let sidebar = document.querySelector('.sidebar')
  console.log('chils', sidebar.children[2])



  let render = (name) => {
    console.log('name', name)
    console.log('res', res)
    let i
  
    res.technologies.forEach((tech, index)=>{
      if(tech.name === name){
        console.log('index', index)
        i = index

      }
    })
    console.log(i)
    let selected = res.technologies.splice(i, 1)
    console.log(selected)
    res.technologies.unshift(selected[0])


    sidebar.childNodes[3] && sidebar.removeChild(sidebar.childNodes[3])

    let techList = makeElement('div', 'tech-list', sidebar, {})
    console.log('chils', sidebar.children[2])
    if (res) {

    


      res.technologies.forEach(e => {

        
        let imgDiv = makeElement('img', 'tech-img', techList, { src: 'src/img/' + e.local_url })
        if(e.name === name){
          imgDiv.style.width = '70%'
          console.log(name, 'name')
        }
        // console.log(imgDiv)
        imgDiv.addEventListener('click', async (event) => {
          // console.log(e)
          let technologies = await showSingleItemm(event, e, 'technologies')

          console.log('ans', technologies)
          document.querySelector('.main-content').innerHTML = ''
          navbar(technologies)
          projects('projects', technologies)
          render(e.name)

        })

      })


    }


  }
  render()

}