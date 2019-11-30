
import { makeElement } from './dom_helper'
import { navBar } from './nav.js'
import { person } from './person.js'
import { technologies } from './technologies'
import { aboutAside } from './aboutAside'
import { resumeAside } from './resumeAside'


export let sidebar = (type, data = []) => {
  // console.log(type, data)
  
  // !document.querySelector('.header-img') && person() 
  // !document.querySelector('.nav') && navBar() 

  // navBar()
  type === 'technologies' && renderTechs(type, data)
  type === 'aboutAside' && aboutAside()
  type === 'resumeAside' && resumeAside()
  type === 'none' && (document.querySelector('.tech-list').innerHTML = "")
}

