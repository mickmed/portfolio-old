import { mapData } from './dom_helper'
import { makeElement } from './dom_helper'

// let BASE_URL = 'http://localhost:3000'
let BASE_URL = 'https://portfolio-mick.appspot.com'

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
    // console.log(state[type], type)
    // console.log(Object.keys(state[type])[0])
    // console.log('hi')
    let results = await fetch(BASE_URL + '/' + type)
        .then((res) => {
            // console.log(res.json)
            return res.json()
        })
        .then((ans => {
            return ans
        }))
    // console.log(results)
    // state[type] = results
    // state.switch = type
    // mapData(type, results)
    // console.log('type, results', type, results)
    return (type, results)

    // console.log('here')
    // return (type, state[type])

    // mapData(type, state[type])
    // }
}



export const makeNewItem = async (event, type, data) => {
    event.preventDefault()

    let chkboxs = document.querySelectorAll('.chkbox')
    console.log(chkboxs)


    let title = type === ('projects' || type === 'project') && document.querySelector('.title')
    console.log(type, 'title', title.value)
    let site_url = type === ('projects' || type === 'project') && document.getElementById('site_url' + data.id)
    let local_url =
        document.getElementById('local_url' + data.id)
    // console.log('local_url', local_url.value)
    // let files = type === 'projects' && document.getElementById('projImg' + data.id)
    let name = (type === 'technologies' || type === 'technology' || type === 'traits') && document.getElementById('name' + data.id)
    let files = document.querySelector('#' + type + 'Img' + data.id)
    let form = new FormData();
    if (files && files.files.length !== 0) {
        form.append('picture', files.files[0])
    }
    type === 'projects' && form.append('title', title.value)
    type === 'projects' && form.append('site_url', site_url.value)
    type === 'technologies' || type === 'traits' && form.append('name', name.value)
    type === 'projects' || type === 'technologies' && form.append('local_url', local_url.value)
    if (chkboxs) {
        chkboxs.forEach(cb => {
            // console.log(cb.value)
            if (cb.checked) {
                console.log(cb.value)
                form.append('technology_ids[]', cb.value)
            }

        })
    }

    const results = await fetch(BASE_URL + '/projects', {
        method: 'post',
        body: form
    }).then(function (res) {
        console.log(res)
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
    let res = await getResults('projects')
    console.log(res)
    // console.log(Object.keys(res)[0])
    mapData(Object.keys(res)[0], res)
}

export const updateProject = async (event, data, type) => {
    console.log('data, type', data, type)

    event.preventDefault()
    if (type === 'project') {
        type = 'projects'
    }
    if (type === 'technology') {
        type = 'technologies'
    }
    if (type === 'trait') {

        type = 'traits'

    }
    let chkboxs = document.querySelectorAll('.chkbox')
    console.log('updateItem ---> chkboxs', chkboxs)
    let title = type === ('projects' || type === 'project') && document.getElementById('title' + data.id)
    let site_url = type === ('projects' || type === 'project') && document.getElementById('site_url' + data.id)
    let local_url =
        document.getElementById('local_url' + data.id)
    // console.log('local_url', local_url.value)
    // let files = type === 'projects' && document.getElementById('projImg' + data.id)
    let name = (type === 'technologies' || type === 'technology' || type === 'traits') && document.getElementById('name' + data.id)
    let files = document.querySelector('#' + type + 'Img' + data.id)
    let form = new FormData();
    if (files && files.files.length !== 0) {
        form.append('picture', files.files[0])
    }
    type === 'projects' && form.append('title', title.value)
    type === 'projects' && form.append('site_url', site_url.value)
    type === 'technologies' || type === 'traits' && form.append('name', name.value)
    type === 'projects' || type === 'technologies' && form.append('local_url', local_url.value)


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
    let relDataName = relName()


    if (chkboxs) {
        chkboxs.forEach(cb => {
            console.log('cbvalue', cb.value)
            if (cb.checked) {
                console.log(cb.value)
                form.append(relDataName + '_ids[]', cb.value)
            }

        })
    }





    let update = await fetch(BASE_URL + '/' + type + '/' + data.id, {
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
        .then(ans => {
            // console.log(ans)
            return ans
        })
        .then(async data => {
            // console.log(data)
            if (data[type] === 'project') {
                type = 'projects'
            }
            if (data[type] === 'technology') {
                type = 'technologies'
            }
            if (data[type] === 'trait') {

                type = 'traits'

            }
            let res = await getResults(type)
            // console.log(Object.keys(res)[0], res)
            mapData(Object.keys(res)[0], res)
            return data

        })
    if (update.length !== 0) {

    }
    let res = await getResults(type)
    // console.log(Object.keys(res)[0], res)
    mapData(Object.keys(res)[0], res)



}


export const getOneProject = async (event, obj, type) => {
    event.preventDefault()
    // console.log(type)
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
    if (type === 'projects') {
        type = 'project'
    }type
    if (type === 'technologies') {
        type = 'technology'
    }
    if (type === 'traits') {

        type = 'trait'

    }

    // console.log('type', type, getProject)

    let allData = getProject
    let data = { [type]: [allData[type]] }
    let relData = { [Object.keys(allData)[1]]: allData[Object.keys(allData)[1]] }
    //    console.log('allData', allData, 'data', data, 'reldata', relData)
    mapData(type, data)
    mapRelPrjs(relData)

}


let mapRelPrjs = async (data) => {

    console.log('mapRelProj---> data', data)
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
            console.log('clicked', e.target.value)

        })


    })

}








export const showSingleItemm = async (event, obj, type) => {
    // event.preventDefault()
    console.log('inside function', obj.id)
    Object.keys(data)[0]
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