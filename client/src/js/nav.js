import { makeElementt } from "./dom_helper"
// import { main } from "./main"

import { sidebar } from "./sidebar"
import { main } from "./main"


export function navBar(data) {
  console.log('here',data)
  let mainDiv = document.querySelector('.main-content')
  // 
  // { resume: 'vaadin:diploma-scroll' }
  const array = [{ projects: 'ion:newspaper-outline' }, { resume: 'noto:scroll' }, { about: 'noto:information' }]
  if (!document.querySelector('.nav')) {


    let nav = makeElementt('div', 'nav', mainDiv, {})
    nav.style.position = "relative"
    // console.log('nav', main)
    // main.style.color = 'black'
    let render = (type = "projects") => {

      nav.innerHTML = " "
      array.forEach((opt, i) => {
        let div = makeElementt('div', 'option', nav, {})

        // div.innerText = Object.keys(array[i])
        let icon = makeElementt('span', 'iconify', div)
        icon.setAttribute("data-icon", Object.values(array[i]))
        icon.setAttribute("data-inline", false)
        type === 'projects' && console.log('data', data)
        // console.log('here', Object.keys(array[i]), type)
        if (type === Object.keys(array[i])[0]) {
          // console.log('hi there')
          let text = document.createTextNode(' ' + Object.keys(array[i]))
          div.appendChild(text)
          // div.innerText = div.innerText + Object.keys(array[i])
          div.style.color = "red"
          div.style.fontSize = '1em'
          div.style.position = "absolute"
          div.style.top = 0
          div.style.left = '2%'
        }
        div.addEventListener('click', (e) => {
          //  console.log('keys', Object.keys(array[i])[0])
          if (Object.keys(array[i])[0] === 'projects') {

            render(Object.keys(array[i])[0])
            main('projects')
            sidebar('technologies')
          }
          if (Object.keys(array[i])[0] === 'about') {
            render(Object.keys(array[i])[0])
            main('about')
            sidebar('aboutAside')
          }
          if (Object.keys(array[i])[0] === 'resume') {
            // console.log('resume')
            render(Object.keys(array[i])[0])
            main('resume')
            sidebar('resumeAside')
          }
          // console.log('e', e.target.innerText)
          // console.log(array.indexOf(e.target.innerText))
          let spliced = array.splice(array.indexOf(e.target.innerText), 1)
          array.push(spliced[0])
          // console.log('arr', array)
          if (e.target) {
            // console.log('div', div)
            // console.log('obj', Object.keys(array[i]))
            render(Object.keys(array[i])[0])

          }




        })

        // console.log(e)
      })
    }
    render()
  }
}