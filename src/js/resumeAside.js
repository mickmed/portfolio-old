
import { makeElement } from './dom_helper.js'
import { resume } from './resume'


// let text = 'On a day to day basis I am immersed in code. As a teaching assistant at General Assembly everyday, day of my life'

// let more = '  tudents, both individually and in groups, with homework assignments and projects. The immersive program involves building front-end and full-stack web apps. Interpersonal and communication skills: teaching debugging techniques, demonstrating concepts in a variety of ways, catering to individual learning styles, cultivating a supportive environment for learning.'

export let resumeAside = () => {
    let sidebar = document.querySelector('.sidebar')
    console.log(sidebar)
    sidebar.removeChild(sidebar.children[2])
    // console.log(sidebar.childNodes)

    let buttons = ['.JPG', '.PDF', '.DOC']
    let div = makeElement('div', 'btn-wrapper', sidebar, {})


    buttons.forEach((btn) => {
        // let anchor = makeElement('a', 'anchor', div, {href:'http://mickmedium.com'})


        let resBtn = makeElement('button', 'about-btn', div, { innerText: btn, id: 'about-btn' })
        resBtn.addEventListener('click', (e) => {
            // console.log(e.target.innerText)
            resume(e.target.innerText)
        })

    })
    
    // let divo = makeElement('div', 'div', div, {innerText:'down'})
    // divo.addEventListener('click', (e)=> {
    //     console.log('here')
    //     window.open('http://www.smkproduction.eu5.org','_blank')

    // })

    




}
