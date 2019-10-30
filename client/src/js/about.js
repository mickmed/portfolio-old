import { makeElementt } from './dom_helper.js'


let text = 'I am currently employed at General Assembly as a teaching assistant and am seeking further employment. I have been coding on and off for about ten years.'
let text1 = 'I mostly build full-stack Javascript apps with React, Node, Sequelize, and Express, but also enjoy Vanilla Javascript. Other front-end tools are CSS, JQuery, Bootstrap, and Mapbox.'



export let about = () => {
    let mainContent = document.querySelector('.main-content')
    mainContent.removeChild(mainContent.childNodes[2])
    // mainContent.innerText = ''
    let about = makeElementt('div', 'about', mainContent, {id:'about'})
    let para = makeElementt('p', 'about-para', about, {innerText:text})
    let para1 = makeElementt('p', 'about-para', about, {innerText:text1})

    // projects.innerHTML = ""
}