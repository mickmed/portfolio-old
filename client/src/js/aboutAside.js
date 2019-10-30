import { makeElementt } from './dom_helper.js'


// let text = 'On a day to day basis I am immersed in code. As a teaching assistant at General Assembly everyday, day of my life'

// let more = '  tudents, both individually and in groups, with homework assignments and projects. The immersive program involves building front-end and full-stack web apps. Interpersonal and communication skills: teaching debugging techniques, demonstrating concepts in a variety of ways, catering to individual learning styles, cultivating a supportive environment for learning.'

export let aboutAside = () => {
    let sidebar = document.querySelector('.sidebar')
    console.log(sidebar)
    sidebar.removeChild(sidebar.childNodes[3])
    console.log(sidebar.childNodes)
    // mainContent.innerText = ''
    let div = makeElementt('div', 'btn-wrapper', sidebar, {})

    // let aboutBtn = makeElementt('button', 'about-btn', div, {innerText:'Download', id:'about-btn'})
    let aboutBtn4 = makeElementt('btn', 'about-btn', div, { innerText: 'LinkedIn', id: 'about-btn' })
    let aboutBtn5 = makeElementt('btn', 'about-btn', div, { innerText: 'Angelist', id: 'about-btn' })
    let aboutBtn6 = makeElementt('btn', 'about-btn', div, { innerText: 'BuiltInNyc', id: 'about-btn' })
    let aboutBtn7 = makeElementt('btn', 'about-btn', div, { innerText: 'GlassDoor', id: 'about-btn' })

    // projects.innerHTML = ""
}