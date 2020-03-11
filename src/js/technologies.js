import { makeElement } from './dom_helper.js'
import { getResultss } from './api_helper'
import { showSingleItemm } from './api_helper'
import { projects } from './projects.js'
import { navBar, navbar } from './nav.js'

export let technologies = async (type, data = []) => {
  console.log('data', data)
  let res = data.length === 0 ? await getResultss(type) : data

  let sidebar = document.querySelector('.sidebar')
  // console.log('children', sidebar.children[2])



  let render = (name) => {
    // console.log('name', name)
    // console.log('res', res)
    let i

    res.technologies.forEach((tech, index) => {
      if (tech.name === name) {
        // console.log('index', index)
        i = index

      }
    })
    // console.log(i)
    let selected = res.technologies.splice(i, 1)
    // console.log(selected)
    res.technologies.unshift(selected[0])

console.log('sidebar', sidebar.children)
    sidebar.children[0] && sidebar.removeChild(sidebar.children[0])
    // sidebar.children[0] && sidebar.removeChild(sidebar.children[0])


    let techList = makeElement('div', 'tech-list', sidebar, {})
    // console.log('chils', sidebar.children[2])
    if (res) {




      res.technologies.forEach(e => {


        if (e.name === name) {
          let selDiv = makeElement('div', 'selected-div', techList, {})
          selDiv.style.textAlign = 'center'
          selDiv.style.margin='10%'
          let selected = makeElement('img', 'selected-img', selDiv, { src: 'src/img/' + e.local_url })

          selected.style.width = '50%'

          // console.log(name, 'name')
        } else {
          let imgDiv = makeElement('img', 'tech-img', techList, { src: 'src/img/' + e.local_url })

          imgDiv.style.cursor = 'pointer'
          // console.log(imgDiv)
          imgDiv.addEventListener('click', async (event) => {
            // console.log(e)
            let technologies = await showSingleItemm(event, e, 'technologies')

            // console.log('ans', technologies)
            document.querySelector('.main-content').innerHTML = ''
            navbar(technologies)
            projects('projects', technologies)
            render(e.name)

          })
        }


      })


    }


  }
  render()

}