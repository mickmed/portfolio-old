let BASE_URL = 'http://localhost:3000'
// let BASE_URL = 'https://portfolio-mick.appspot.com'

state = {
    projects: [],
    technologies: [],
    title: ''
}

function addEventListener(el, handle, name, proj) {
    console.log(proj)
    el.addEventListener(handle, handleInput = (event) => {
        console.log('eventtargetvalue', event.target.value)
        state[name] = event.target.value || proj.title
    })
}

function makeElement(element_type, className, parent, obj = {}) {
    let el = document.createElement(element_type)
    el.classList.add(className)
    let objKeys = Object.keys(obj)
    objKeys.forEach(ok => {
        if (ok !== '') {
            // console.log(typeof ok, obj[ok])
            el[ok] = obj[ok]
        }
    })
    // if(value !== ''){el.setAttribute('value', value)}
    parent.appendChild(el)
    return el
}

getResults = async (type) => {

    console.log(Object.keys(state[type])[0])
    if (state.switch !== type && state[type].length === 0) {
        console.log('hi')
        let results = await fetch(BASE_URL + '/' + type)
            .then((res) => {
                // console.log(res.json)
                return res.json()
            })
            .then((ans => {
                return ans
            }))
        console.log(results)
        state[type] = results
        state.switch = type
        mapData(type, results)
    }else{
       console.log('here')
       mapData(type, state[type])
    }
}

mapData = (type, data) => {
    console.log(type, data)

    if (document.querySelector('.current') !== null) {
        document.querySelector('.current').style.display = "none"

        document.querySelector('.current').classList.remove('current')


    }
    let currentDiv = makeElement('div', type, document.body, {id:type})
    console.log(currentDiv)
    currentDiv.className += ' current'

    data[type].map(obj => {
        let form = document.createElement('form')

        let imgUpload = makeElement('input', 'imgUpload', form, { name: 'image', id: type + 'Img' + obj.id, type: 'file' })
        let title = (type === 'projects' || type === 'project') && makeElement('input', 'title', form, { name: 'title', id: 'title' + obj.id, value: obj.title })
        console.log(title)
        let subtitle = (type === 'projects' || type === 'project') && makeElement('input', 'subtitle', form, { name: 'subtitle', id: 'subtitle' + obj.id, value: obj.subtitle })
        let name = (type === 'technologies' || type === 'technology') && makeElement('input', 'name', form, { name: 'name', id: 'name' + obj.id, value: obj.name })

        let pic = makeElement('img', type + '-pic', form, { src: obj.image_url })
        pic.style.width = '50px'

        let updateBtn = makeElement('button', 'update-btn', form, { innerText: 'edit' })
        updateBtn.addEventListener('click', (event) => {
            editProject(event, obj, type)
        })
        let destroyBtn = makeElement('button', 'destroy-btn', form, { innerText: 'delete' })
        destroyBtn.addEventListener('click', (event) => {
            destroyProject(event, obj, type)
        })
        let getOneBtn = makeElement('button', 'getOneBtn', form, { innerText: obj.title || obj.name })
        getOneBtn.addEventListener('click', () => {
            getOneProject(event, obj, type)
        })

        currentDiv.appendChild(form)
        // currentDiv.style.display = "block"
        // typeDiv.style.backGround = 'green'
    })
}


let controls = document.querySelector('.controls')
let getTchsBtn = makeElement('button', 'getTechs', controls, { innerText: 'Technologies' })
let getPrjsBtn = makeElement('button', 'getPrjs', controls, { innerText: 'Projects' })
getPrjsBtn.addEventListener('click', (event => getResults('projects')))
getTchsBtn.addEventListener('click', (event => getResults('technologies')))


const editProject = async (event, data, type) => {
    console.log(data, type)
    event.preventDefault()

    let title = type === 'projects' || type === 'project' && document.getElementById('title' + data.id)
    // let files = type === 'projects' && document.getElementById('projImg' + data.id)
    let name = type === 'technologies' || type === 'technology' && document.getElementById('name' + data.id)
    let files = type === 'technologies' || type === 'technology' ? document.getElementById('techImg' + data.id) : document.getElementById('projImg' + data.id)
    let a = document.getElementById('projImg' + data.id)
    console.log(a)
    //    console.log(a.files)
    console.log(files)


    console.log('title', title.value)
    console.log('name', name.value)
    console.log('files', files.files)
    console.log(data.id, data.title, data.name)
    console.log('proj', data)

    let form = new FormData();
    if (files.files.length !== 0) {
        form.append('picture', files.files[0])
    }
    type === 'projects' && form.append('title', title.value)
    type === 'technologies' && form.append('name', name.value)



    await fetch(BASE_URL + '/' + type + '/' + data.id, {
        method: 'put',
        body: form
    }).then(res => {
        // console.log(res.json())
        return res.json()
    }).then(ans => {
        console.log(ans)
        return ans
    })
}

const getOneProject = async (event, obj, type) => {
    event.preventDefault()

    let resDiv = type === 'projects' ? document.querySelector('.projects') : document.querySelector('.technologies')
    resDiv.style.display = "none"


    console.log(obj.id)

    const getProject = await fetch(`${BASE_URL}/${type}/${obj.id}`)
        .then(function (res) {
            console.log(res.json)
            return res.json()
        }).then(function (red) {
            console.log(red)
            return red
        })
  
    let typ = type === 'projects' ? 'project' : 'technology'
    console.log(typ)
    mapData(typ, {[typ]:[getProject[typ]]})
    // renderOneProject(type, getProject)
}


addPic = async (e) => {

    let files = document.getElementById('file')
    let form = new FormData();
    for (let i = 0; i < files.files.length; i++) {
        console.log(files.files[i])
        form.append('picture', files.files[i]);
        form.append('title', state.title)
    }
    console.log(form)
    await fetch(BASE_URL + '/projects', {
        method: 'post',
        body: form
    }).then(function (res) {
        console.log(res)
        return res
    })
}

destroyProject = async (event, e, type) => {

    event.preventDefault()
    console.log('here')
    await fetch(BASE_URL + '/' + type + '/' + e.id, {
        method: 'delete'
    })
        .then(des => {
            console.log(des)
        })
    // await getResults(type)

}

// mapProjects = (projects) => {
//     console.log(projects && projects)
//     let prjsDiv = document.querySelector('.projects')
//     prjsDiv.classList.add('projects')
//     projects.project_pics.map(proj => {
//         let form = document.createElement('form')

//         let imgUpload = makeElement('input', 'imgUpload', form, { name: 'image', id: 'projImg' + proj.id, type: 'file' })
//         let title = makeElement('input', 'title', form, { name: 'title', id: 'title' + proj.id, value: proj.title })
//         let subtitle = makeElement('input', 'subtitle', form, { name: 'subtitle', id: 'subtitle' + proj.id, value: proj.subtitle })
//         let image_url = makeElement('input', 'image_url', form, { name: 'image_url', id: 'image_url' + proj.id, value: proj.image_url })

//         let pic = makeElement('img', 'proj-pic', form, { src: proj.image_url })
//         pic.style.width = '50px'
//         let btn = makeElement('button', 'btn', form, { innerText: proj.title })
//         btn.addEventListener('click', () => {
//             getOneProject(proj)
//         })
//         let updateBtn = makeElement('button', 'update-btn', form, { innerText: 'edit' })
//         updateBtn.addEventListener('click', (event) => {
//             editProject(event, proj, 'projects')
//         })
//         let destroyBtn = makeElement('button', 'destroy-btn', form, { innerText: 'delete' })
//         destroyBtn.addEventListener('click', (event) => {
//             destroyProject(event, proj)
//         })

//         prjsDiv.appendChild(form)

//     })
// }

// mapTechnologies = (technologies) => {
//     console.log(technologies && technologies)
//     let prjsDiv = document.querySelector('.technologies')
//     prjsDiv.classList.add('technologies')
//     technologies.technology_pics.map(tech => {
//         let form = document.createElement('form')

//         let imgUpload = makeElement('input', 'imgUpload', form, { name: 'image', id: 'techImg' + tech.id, type: 'file' })
//         let name = makeElement('input', 'name', form, { name: 'name', id: 'name' + tech.id, value: tech.name })


//         let pic = makeElement('img', 'tech-pic', form, { src: tech.image_url })
//         pic.style.width = '50px'
//         let btn = makeElement('button', 'btn', form, { innerText: tech.name })
//         btn.addEventListener('click', () => {
//             getOneProject(tech)
//         })
//         let updateBtn = makeElement('button', 'update-btn', form, { innerText: 'edit' })
//         updateBtn.addEventListener('click', (event) => {
//             editProject(event, tech, 'technologies')
//         })
//         let destroyBtn = makeElement('button', 'destroy-btn', form, { innerText: 'delete' })
//         destroyBtn.addEventListener('click', (event) => {
//             destroyProject(event, tech)
//         })


//         prjsDiv.appendChild(form)
//     })
// }

// editProject = async (e,event) => {
//     console.log('here')
//     event.preventDefault()
//     let title = document.querySelectorAll('.title')[e.id-1]
//     console.log(title)
//     console.log(state.title)

//     let files = document.getElementById('imgFile')
//     console.log(files.files)
//     let form = new FormData();
//     for (let i = 0; i < files.files.length; i++) {
//         console.log(files.files[i])
//         form.append('picture', files.files[i])
//         form.append('title', state.title)
//     }
//     await fetch(BASE_URL + '/projects/'+ e.id, {
//         method: 'put',
//         body: form
//     }).then(res => {
//         // console.log(res.json())
//         return res.json()
//     }).then(ans => {
//         console.log(ans)
//         return ans
//     })
// }