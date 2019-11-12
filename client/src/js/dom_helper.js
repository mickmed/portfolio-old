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

export let makeCurrentDiv = (type) => {
    if (document.querySelector('.current')) {
        document.querySelector('.current').remove()
    }
    let container = document.querySelector('.uploader-container')
    let currentDiv = makeElement('div', type, container, { id: type })
    currentDiv.classList.add('current')
    return currentDiv
}


export let mapData = (data, event) => {
    // event && event.preventDefault()
    // console.log('mapdata --> data', data)
    let type = Object.keys(data)[0]
    let relType = Object.keys(data)[1]
    // console.log(relType)
    // console.log('mapData-->type', type)
    // console.log(Object.keys(data[Object.keys(data)[0]][0]))
    let currentDiv = makeCurrentDiv(type)
    let makeNewBtn = makeElement('button', 'makeNew', currentDiv, { innerText: "Make New" })
    makeNewBtn.addEventListener('click', (event) => {
        let currentDiv = makeCurrentDiv(type)
        let keys = Object.keys(data[Object.keys(data)[0]][0])
        // console.log(keys)
        let obj = {}
        keys.forEach(key => {
            obj[key] = key
        })
      
        let form = makeForm(obj, event)
        let formButtons = newItemBtns(type, relType, obj, form)
        let chkbxs = checkboxes(relType)
        currentDiv.appendChild(form)
    })

    data[type].map(obj => {
        let form = makeForm(obj)
        let formButtons = makeFormBtns(type, obj, form, relType)
        currentDiv.appendChild(form)
    })
}




export let makeForm = (obj, newItem = '') => {
    let form = document.createElement('form')
    // console.log('makeForm --> obj', obj)
    // console.log('makeForm --> Obkeys[0]', Object.keys(obj))
    let fields = Object.keys(obj)
    // console.log('makeForm --> fields', fields)
    let inputWrapper = makeElement('div', 'input-wrapper', form)
    // console.log(inputWrapper, form)

    for (let i = 0; i < fields.length; i++) {
        // console.log(fields[i])
        fields[i] !== 'created_at' && fields[i] !== 'updated_at' &&
        makeElement('input', fields[i], inputWrapper,
            
            {
                name: fields[i],
                id: fields[i] + obj.id,
                value: obj[fields[i]] || fields[i]
            })
    }
    return form
}

export const makeFormBtns = (type, obj, parent, relType) => {
    // console.log(obj)
    // console.log('makeFromBtns ---> type', type)
    let buttons = makeElement('div', 'buttons', parent)

    let updateBtn = makeElement('button', 'update-btn', buttons, { innerText: 'edit' })
    updateBtn.addEventListener('click', (event) => {
        event.preventDefault()
        updateProject(event, obj, type, relType)
    })

    let destroyBtn = makeElement('button', 'destroy-btn', buttons, { innerText: 'delete' })
    destroyBtn.addEventListener('click', async (event) => {
        let check = confirm(`are you sure you wanna destroy ` + (obj.title || obj.name))
        // console.log(check)
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
    getOneBtn.addEventListener('click', (evt) => {
        getOneProject(evt, obj, type)
    })
    let imgUpload = type !== 'traits' && makeElement('input', 'imgUpload', buttons, { name: 'image', id: type + 'Img' + obj.id, type: 'file' })
    if (type !== 'traits' && type !== 'trait') {
        let pic = makeElement('img', type + '-pic' + obj.id, buttons, { src: './src/img/' + obj.local_url })
    }
    return buttons
}

export const newItemBtns = (type, relType, obj, parent) => {
    console.log('makeNewItemBtns ---> type', type, relType)
    let buttons = makeElement('div', 'buttons', parent)
    let addNewBtn = makeElement('button', 'getOneBtn', buttons, { innerText: 'add new' })
    // let checkboxes = checkboxes(type)

    addNewBtn.addEventListener('click', (event) => {
        makeNewItem(event, type, obj, relType)
    })
    return buttons
}



export const checkboxes = async (type) => {
    console.log('checkboxes ---> type', type)
 
    let name = type === ('technologies' || type === 'traits') ? 'name' : 'title'
    let res = await getResults(type)
    let buttons = document.querySelector('.buttons')
    // console.log('checkboxes ---> buttons', buttons)
    // console.log('checkboxes ---> res', res)
    res[type].map(obj => {
        let chkbox = makeElement('input', 'chkbox', buttons, { type: 'checkbox', value: obj.id })
        let text = document.createTextNode(obj[name])
        buttons.appendChild(text)

    })

}





