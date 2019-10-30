
import { sidebar } from './sidebar.js'
import { main } from './main.js'

import { showSingleItemm } from './api_helper'
import '../css/index.css'




let renderAbout = (res) => {
  let projects = document.querySelector('.projects')
  projects.innerHTML = ""

}





let getSingle = async function (event, e, type) {
  console.log('e', e)
 
  let res = await showSingleItemm(event, e, type)
  console.log('results', res)
  renderProjectTitles(res)
  return res
}


sidebar('technologies')
main('projects')



// function adjustWidth() {
//   let parent = document.querySelector('.scrollable-page')
//   let child = document.getElementById('nav')
//   child.style.width = parent.offsetWidth * .95 + 'px'
//   // console.log(typeof parent.offsetWidth)
//   // console.log(child)
// }

// // adjustWidth()

