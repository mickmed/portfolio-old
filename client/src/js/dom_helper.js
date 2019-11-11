import { makeNewItem } from './api_helper'
import { getResults } from './api_helper'
import { destroyProject } from './api_helper'
import { updateProject } from './api_helper'
import { getOneProject } from './api_helper'
import { isRegExp } from 'util'


export let makeElement = (element_type, className, parent, obj = {}) => {
    // console.log(parent)
    let el = document.createElement(element_type)
    let objKeys = Object.keys(obj)
    objKeys.forEach(ok => {
        if (ok !== '') {
            el[ok] = obj[ok]
        }
    })
    // console.log(parent, el)
    el.classList.add(className)
    parent.appendChild(el)
    return el
}

export let mapData = (type, data, event) => {
    // if(type === 'project'){
    //     data = [data][0]
    // }
    console.log('mapdata --> data', data)
    event && event.preventDefault()
    let currentDiv = makeCurrentDiv(type)
    let makeNewBtn = makeElement('button', 'makeNew', currentDiv, { innerText: "Make New" })
    makeNewBtn.addEventListener('click', async (event) => {
        await makeNewForm(event, type)
    })

    data[type].map(obj => {
        let form = makeForm(type, obj)
        currentDiv.appendChild(form)
    })
}

export let makeCurrentDiv = (type) => {
    if (document.querySelector('.current')) {
        document.querySelector('.current').remove()
    }
    let container = document.querySelector('.uploader-container')
    let currentDiv = makeElement('div', type, container, { id: type })
    currentDiv.classList.add('current')
    return currentDiv
}

export let makeForm = (type, obj, newItem = '') => {
    let form = document.createElement('form')
    console.log('makForm ---> data', obj)
    let inputWrapper = makeElement('div', 'input-wrapper', form)
    // console.log(inputWrapper, form)
    if (type === 'projects' || type === 'project') {
        makeElement('input', 'title', inputWrapper, { name: 'title', id: 'title' + obj.id, value: obj.title || 'title' })
        makeElement('input', 'subtitle', inputWrapper, { name: 'subtitle', id: 'subtitle' + obj.id, value: obj.subtitle || 'subtitle' })
        makeElement('input', 'site_url', inputWrapper, { name: 'url', id: 'site_url' + obj.id, value: obj.site_url || 'site_url' })

    }
    if (type === 'technologies' || type === 'technology' || type === 'traits' || type === 'trait') {
        let name = makeElement('input', 'name', inputWrapper, { name: 'name', id: 'name' + obj.id, value: obj.name || 'name'})
    }
    if (type !== 'traits' && type !== 'trait') {
        let local_url = makeElement('input', 'local_url', inputWrapper, { name: 'url', id: 'local_url' + obj.id, value: obj.local_url || 'local_url' })
    }
    let tech_projs = (type === 'technology') &&
        makeElement('input', 'tech_prod', inputWrapper, {})

    let buttons = (newItem) ? newItemBtns(type, obj, form) : makeFormBtns(type, obj, form)
    // console.log('mf-buttons', buttons)
    if(type === 'projects' || type === "project"){
        type = 'technologies'
    }
    if(type === 'technologies' || type === 'traits'){
        type = 'projects'
    }
    console.log('typetype', type)
    let chkbxs = newItem && checkboxes(type)
    // console.log(chkbxs)
    form.appendChild(buttons)


    return form
}

export const makeFormBtns = (type, obj, parent) => {
    if (type === 'project') {
        type = 'projects'
    }
    console.log('makeFromBtns ---> type', type)
    let buttons = makeElement('div', 'buttons', parent)

    let updateBtn = makeElement('button', 'update-btn', buttons, { innerText: 'edit' })
    updateBtn.addEventListener('click', (event) => {
        event.preventDefault()
        updateProject(event, obj, type)
    })

    let destroyBtn = makeElement('button', 'destroy-btn', buttons, { innerText: 'delete' })
    destroyBtn.addEventListener('click', async (event) => {
        let check = confirm(`are you sure you wanna destroy ${obj.name}`)
        console.log(check)
        if (check) {
            destroyProject(event, obj, type)
        }
        else {
            event.preventDefault()
            let res = await getResults('projects')
            mapData(Object.keys(res)[0], res, event)
        }


    })

    let getOneBtn = makeElement('button', 'getOneBtn', buttons, { innerText: 'goto' })
    getOneBtn.addEventListener('click', () => {
        getOneProject(event, obj, type)
    })
    let imgUpload = type !== 'traits' && makeElement('input', 'imgUpload', buttons, { name: 'image', id: type + 'Img' + obj.id, type: 'file' })
    if (type !== 'traits' && type !== 'trait') {
        let pic = makeElement('img', type + '-pic' + obj.id, buttons, { src: './src/img/' + obj.local_url })
    }
    return buttons
}

export const newItemBtns = (type, obj, parent) => {
    console.log('makeNewItemBtns ---> type', type)
    let buttons = makeElement('div', 'buttons', parent)
    let getOneBtn = makeElement('button', 'getOneBtn', buttons, { innerText: 'add new' })
    getOneBtn.addEventListener('click', (event) => {
        makeNewItem(event, type, obj)
    })
    return buttons
}



export const checkboxes = async (type) => {
    console.log('checkboxes ---> type', type)
    let relName = () => {
        switch (type) {
            case 'projects':
                return 'technology'
            case 'technologies':
                return 'project'
            case 'traits':
                return 'project'
        }
    }
    let name = type === ('technologies' || type === 'traits') ? 'name' : 'title'
    let res = await getResults(type)
    let buttons = document.querySelector('.buttons')
    console.log('checkboxes ---> buttons', buttons )
    console.log('checkboxes ---> res', res)
    res[type].map(obj => {
        let chkbox = makeElement('input', 'chkbox', buttons, { type: 'checkbox', value: obj.id })
        let text = document.createTextNode(obj[name])
        buttons.appendChild(text)

    })

}

export const makeNewForm = (event, type) => {
    let currentDiv = makeCurrentDiv(type)

    let form = makeForm(type, [], true)
    currentDiv.appendChild(form)
}



// export function addEL(el, evtType, name, proj) {
//     // console.log(proj)
//     el.addEventListener(evtType, handleInput = (event) => {
//         // console.log('eventtargetvalue', event.target.value)
//         state[name] = event.target.value || proj.title
//     })
// }


