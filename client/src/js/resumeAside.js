
import { makeElement } from './dom_helper.js'


// let text = 'On a day to day basis I am immersed in code. As a teaching assistant at General Assembly everyday, day of my life'

// let more = '  tudents, both individually and in groups, with homework assignments and projects. The immersive program involves building front-end and full-stack web apps. Interpersonal and communication skills: teaching debugging techniques, demonstrating concepts in a variety of ways, catering to individual learning styles, cultivating a supportive environment for learning.'

export let resumeAside = () => {
    let sidebar = document.querySelector('.sidebar')
    console.log(sidebar)
    sidebar.removeChild(sidebar.childNodes[3])
    // console.log(sidebar.childNodes)
    let div = makeElement('div', 'btn-wrapper', sidebar, {})
    let aboutBtn1 = makeElement('btn', 'about-btn', div, { innerText: '.PDF', id: 'about-btn' })
    let aboutBtn2 = makeElement('btn', 'about-btn', div, { innerText: '.DOC', id: 'about-btn' })
    let aboutBtn3 = makeElement('btn', 'about-btn', div, { innerText: '.JPG', id: 'about-btn' })
    let aboutBtn4 = makeElement('btn', 'about-btn', div, { innerText: 'GoogleDoc', id: 'about-btn' })

    




}
