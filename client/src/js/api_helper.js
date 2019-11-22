import { mapData } from './dom_helper'
import { makeElement } from './dom_helper'

let BASE_URL = 'http://localhost:3000'
// let BASE_URL = 'https://portfolio-mick.appspot.com'
// let BASE_URL = 'https://portfolio-server-mick.herokuapp.com'

export let getResultss = async (type) => {

    let results = await fetch(BASE_URL + '/' + type)
        .then((res) => {
            // console.log('resjson', res.json)
            return res.json()
        })
        .then((ans => {
            return ans
        }))

    return results

}

export let getResults = async (type) => {

    let results = await fetch(BASE_URL + '/' + type)
        .then((res) => {
            // console.log(res.json)
            return res.json()
        })
        .then((ans => {
            return ans
        }))
    
    return (type, results)

}



export const makeNewItem = async (event, type, obj, relType) => {
    event.preventDefault() 
    console.log('type,relType', type, relType)
    let fields = Object.keys(obj)
    let form = new FormData();

    for (let i = 0; i < fields.length; i++) {
        fields[i] !== 'id' && fields[i] !== 'created_at' && fields[i] !== 'updated_at' &&
        form.append(fields[i], document.querySelector('.'+fields[i]).value)
    }
   console.log(form)
    let chkboxs = document.querySelectorAll('.chkbox')
    console.log(chkboxs)
    let files = document.querySelector('#' + type + 'Img' + obj.id)
    
    if (files && files.files.length !== 0) {
        form.append('picture', files.files[0])
    }
    
    if(type === 'projects'){
        relType = 'technology_ids[]'
    }else{
        relType = 'project_ids[]'
    }
    if (chkboxs) {
        chkboxs.forEach(cb => {
            // console.log(cb.value)
            if (cb.checked) {
                console.log(cb.value)
                form.append(relType, cb.value)
            }

        })
    }

    const results = await fetch(BASE_URL + '/' + type, {
        method: 'post',
        body: form
    }).then(function (res) {
        // console.log(res)
        return res.json()
    })
    return results
}


export const destroyProject = async (event, e, type) => {

    event.preventDefault()
    // console.log('here')
    await fetch(BASE_URL + '/' + type + '/' + e.id, {
        method: 'delete'
    })
        .then(des => {
            // console.log(des)
            return des
        })
    let results = await getResults(type)
    let res = await getResults(type)
    // console.log(res)
    
    mapData(res)
}

let pluralize = (word) => {
    if(word.slice(-1) === 's'){
        return word
    }
    if(word.slice(-1) === 'y'){
       return word.slice(0, -1) + 'ies'
    }else{
        return word + 's'
    } 
}
let singularize = (word) => {
    if(word.substr(word.length - 3) === 'ies'){
        // console.log('wow')
        return word.slice(0, -3) + 'y'

    }else{
        return word.slice(0, -1)
    }
}



export const updateProject = async (event, obj, type, relType) => {
    // console.log('obj, type', obj, relType)
    event.preventDefault()
    type = pluralize(type)
    let fields = Object.keys(obj)
    // console.log(fields)
    let form = new FormData();

    for (let i = 0; i < fields.length; i++) {
        
        (fields[i] !== 'id' && fields[i] !== 'created_at' && fields[i] !== 'updated_at') &&
        // console.log(document.getElementById(fields[i] + obj.id).value) &&
        // console.log(fields[i]) &&
        form.append(fields[i], document.getElementById(fields[i] + obj.id).value)
    }
    let chkboxs = document.querySelectorAll('.chkbox')
  
    let files = document.querySelector('#' + type + 'Img' + obj.id)
    if (files && files.files.length !== 0) {
        form.append('picture', files.files[0])
    }
    
    if(type === 'projects'){
        relType = 'technology_ids[]'
    }else{
        relType = 'project_ids[]'
    }

    if (chkboxs) {
        chkboxs.forEach(cb => {
            if (cb.checked) {
                // console.log(cb.value)
                form.append(relType, cb.value)
            }

        })
    }

    let update = await fetch(BASE_URL + '/' + type + '/' + obj.id, {
        method: 'put',
        body: form
    })
        .then(res => {
            // console.log(res.json())
            return res.json()
        })
        .then(ans => {
            // console.log(ans)
            return ans
        })
        .then(async data => {
       
            let res = await getResults(type)
            // console.log(Object.keys(res)[0], res)
            mapData( res)
            return data
        })
}


export const getOneProject = async (evt, obj, type) => {
    // console.log(evt)
    evt.preventDefault()
    console.log('getOneProj-->type', type)
    let resDiv = document.querySelector('.' + type)

    resDiv.style.display = "none"

    // console.log(resDiv)
    // console.log(obj.id)

    const getProject = await fetch(`${BASE_URL}/${type}/${obj.id}`)

        .then(function (res) {
            // console.log(type)
            // console.log(res.json)
            return res.json()
        }).then(function (red) {
            // console.log(red)
            return red
        })
    // console.log('shoonga')
    // if (type === 'projects') {
    //     type = 'project'
    // } type
    // if (type === 'technologies') {
    //     type = 'technology'
    // }
    // if (type === 'traits') {

    //     type = 'trait'

    // }
    type = singularize(type)

    // console.log('type', type, getProject)

    let allData = getProject
    allData[type] = [allData[type]]
    let data = { [type]: [allData[type]] }
    let relData = { [Object.keys(allData)[1]]: allData[Object.keys(allData)[1]] }
       console.log('allData', allData, 'data', data, 'reldata', relData)
    mapData(allData)
    mapRelPrjs(relData)

}


let mapRelPrjs = async (data) => {

    // console.log('mapRelProj---> data', data)
    let field
    let type = Object.keys(data)[0]
    let allItems = await getResults(type)
    data = Object.values(data)[0]
    switch (type) {
        case 'technologies':
            field = 'name'
            break;

        case 'projects':
            field = 'title'
            break;
    }


    let checked = ''
    // console.log(Object.keys(projs.projects[0])[0])
    Object.values(allItems)[0].map(obj => {
        // console.log('objid', obj.id, obj.name)
        let match = data.map(e => {
            return e.id === obj.id ? 'checked' : ''
            // console.log('match', checked, e.id, obj.id)
        })
        // console.log('checked', match)

        let chkBox = makeElement('input', 'chkbox', document.querySelector('.current form'), { type: 'checkbox', name: 'projects', value: obj.id, checked: match.includes('checked') ? 'checked' : '' })
        let text = document.createTextNode(obj[field])
        document.querySelector('.current form').append(text)
        chkBox.addEventListener('click', (e) => {
            // console.log('clicked', e.target.value)

        })


    })

}








export const showSingleItemm = async (event, obj, type) => {
    // event.preventDefault()
    // console.log('inside function', obj.id)
    Object.keys(obj)[0]
    const result = await fetch(`${BASE_URL}/${type}/${obj.id}`)
        .then(function (res) {
            // console.log(res.json)
            return res.json()
        }).then(function (red) {
            // console.log(red)
            return red
        })
    return result
    // let typ = type === 'projects' ? 'project' : 'technology'
    // console.log(typ)
    // let x = getProject[typ]
    // typ ==='technology' && (x.projs = getProject.technology_projects)

    // console.log(typ,x)

    // mapData(typ, {[typ]:[x]})
    // renderOneProject(type, getProject)
}