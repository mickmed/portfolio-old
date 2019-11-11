import { makeElement } from './dom_helper.js'
import { getResults } from './api_helper.js'
import { mapData } from './dom_helper'


let controls = document.querySelector('.controls')
console.log(controls)
let getPrjsBtn = makeElement('button', 'getPrjs', controls, { innerText: 'Projects' })
let getTchsBtn = makeElement('button', 'getTechs', controls, { innerText: 'Technologies' })
let getTrtsBtn = makeElement('button', 'getTrts', controls, { innerText: 'Traits' })

getPrjsBtn.addEventListener('click', (async (event) => {
    let res = await getResults('projects')
    console.log(res)
    // console.log(Object.keys(res)[0])
    mapData(Object.keys(res)[0], res)
    
}))

getTchsBtn.addEventListener('click', (async (event) => {
    let res = await getResults('technologies')
    mapData(Object.keys(res)[0], res)
}))


getTrtsBtn.addEventListener('click', (async (event) => {
    let res = await getResults('traits')
    mapData(Object.keys(res)[0], res)
}))






// let addPic = async (e) => {

//     let files = document.getElementById('file')
//     let form = new FormData();
//     for (let i = 0; i < files.files.length; i++) {
//         // console.log(files.files[i])
//         form.append('picture', files.files[i]);
//         form.append('title', state.title)
//     }
//     // console.log(form)
//     await fetch(BASE_URL + '/projects', {
//         method: 'post',
//         body: form
//     }).then(function (res) {
//         console.log(res)
//         return res
//     })
// }




