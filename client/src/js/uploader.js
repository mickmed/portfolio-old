import { makeElement } from './dom_helper.js'
import { getResults } from './api_helper.js'
import { mapData } from './dom_helper'


let controls = document.querySelector('.controls')
console.log(controls)

let btnNames = ['projects', 'technologies', 'traits']
btnNames.forEach(name=>{
    makeElement('button', 'getPrjs', controls, { innerText: name }).addEventListener('click', (async (event) => {
        let res = await getResults(name)
        console.log(res)
        mapData(res)
    }))
})







