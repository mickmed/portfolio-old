import { makeElement } from "./dom_helper"
import { projects } from './projects'
import { technologies } from './technologies'
import { about } from './about'
import { resume } from './resume'
import { aboutAside } from './aboutAside'
import { resumeAside } from './resumeAside'


export function navbar(data) {
  // { resume: 'vaadin:diploma-scroll' }
  const array = [{ projects: 'ion:newspaper-outline' }, { resume: 'noto:scroll' }, { about: 'noto:information' }]
 
  let render = (type = "projects") => {
    // document.querySelector('.main-content').innerHTML = " "
    let mainDiv = document.querySelector('.main-content')
    mainDiv.innerHTML = ''

    let nav = makeElement('div', 'nav', mainDiv, {})
    nav.style.position = "relative"
    console.log('nav', nav)
   
    array.forEach((opt, i) => {
      let div = makeElement('div', 'option', nav, {})
      let icon = makeElement('span', 'iconify', div)
      icon.setAttribute("data-icon", Object.values(array[i]))
      icon.setAttribute("data-inline", false)
    
      if (type === Object.keys(array[i])[0]) {
        let text = document.createTextNode(' ' + Object.keys(array[i]))
        div.appendChild(text)
        div.style.color = "red"
        div.style.fontSize = '1em'
        div.style.position = "absolute"
        div.style.top = 0
        div.style.left = '2%'
      }

      div.addEventListener('click', (e) => {
        //  console.log('keys', Object.keys(array[i])[0])
        if (Object.keys(array[i])[0] === 'projects') {
          render('projects')
          technologies('technologies')
          projects('projects')
        }
        if (Object.keys(array[i])[0] === 'about') {
          render('about')
          about()
          aboutAside()
        }
        if (Object.keys(array[i])[0] === 'resume') {
          render(Object.keys(array[i])[0])
          resume()
          resumeAside()
        }
        let spliced = array.splice(array.indexOf(e.target.innerText), 1)
        array.push(spliced[0])
      })
    })
  }
  render()

}