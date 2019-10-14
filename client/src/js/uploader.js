let BASE_URL = 'http://localhost:3000'

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

getResults = async (data) => {

    let results = await fetch(BASE_URL + '/' + data)
        .then((res) => {
            // console.log(res.json)
            return res.json()
        })
        .then((ans => {
            return ans
        }))
    console.log(results)
    state.projects = results
    data === 'projects' && mapProjects(results)
    data === 'technologies' && mapTechnologies(results)


}

mapTechnologies = (technologies) => {
    console.log(technologies && technologies)
    let prjsDiv = document.querySelector('.technologies')
    prjsDiv.classList.add('technologies')
    technologies.technology_pics.map(tech => {
        let form = document.createElement('form')

        let imgUpload = makeElement('input', 'imgUpload', form, { name: 'image', id: 'projImg' + tech.id, type: 'file' })
        let name = makeElement('input', 'name', form, { name: 'name', id: 'name' + tech.id, value: tech.name })
        

        let pic = makeElement('img', 'tech-pic', form, { src: tech.image_url })
        pic.style.width = '50px'
        let btn = makeElement('button', 'btn', form, { innerText: tech.title })
        btn.addEventListener('click', () => {
            getOneProject(tech)
        })
        let updateBtn = makeElement('button', 'update-btn', form, { innerText: 'edit' })
        updateBtn.addEventListener('click', (event) => {
            editProject(event, tech, 'technologies')
        })
        let destroyBtn = makeElement('button', 'destroy-btn', form, { innerText: 'delete' })
        destroyBtn.addEventListener('click', (event) => {
            destroyProject(event, tech)
        })


        prjsDiv.appendChild(form)
    })
}


mapProjects = (projects) => {
    console.log(projects && projects)
    let prjsDiv = document.querySelector('.projects')
    prjsDiv.classList.add('projects')
    projects.project_pics.map(proj => {
        let form = document.createElement('form')

        let imgUpload = makeElement('input', 'imgUpload', form, { name: 'image', id: 'techImg' + proj.id, type: 'file' })
        let title = makeElement('input', 'title', form, { name: 'title', id: 'title' + proj.id, value: proj.title })
        let subtitle = makeElement('input', 'subtitle', form, { name: 'subtitle', id: 'subtitle' + proj.id, value: proj.subtitle })
        let image_url = makeElement('input', 'image_url', form, { name: 'image_url', id: 'image_url' + proj.id, value: proj.image_url })

        let pic = makeElement('img', 'proj-pic', form, { src: proj.image_url })
        pic.style.width = '50px'
        let btn = makeElement('button', 'btn', form, { innerText: proj.title })
        btn.addEventListener('click', () => {
            getOneProject(proj)
        })
        let updateBtn = makeElement('button', 'update-btn', form, { innerText: 'edit' })
        updateBtn.addEventListener('click', (event) => {
            editProject(event, proj, 'projects')
        })
        let destroyBtn = makeElement('button', 'destroy-btn', form, { innerText: 'delete' })
        destroyBtn.addEventListener('click', (event) => {
            destroyProject(event, proj)
        })

        prjsDiv.appendChild(form)

    })
}
let technologies = getResults('technologies')
let projects = getResults('projects')

// let projects = 
// mapProjects(getResults('projects'))

editProject = async (event, data, type) => {
    console.log(data)
    event.preventDefault()
   
    let title = type === 'projects' && document.getElementById('title' + data.id)
    let name = type === 'technologies' && document.getElementById('name' + data.id)
    let files = document.getElementById('type' + 'img' + data.id)
   
    console.log('title', title.value)
    console.log('name', name)
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

let getOneProject = async (obj) => {
    console.log(obj.id)
    let imgdiv = document.querySelector('img')
    const getProject = await fetch(`${BASE_URL}/projects/${obj.id}`)
        .then(function (res) {
            // console.log(res.json)
            return res.json()
        })
    console.log(getProject)
    imgdiv.src = `${getProjects.url}`
    console.log(imgdiv)
}

let updateProject = async () => {

    let file = document.querySelector('#file')


}

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

destroyProject = async (e, event) => {
    event.preventDefault()
    await fetch(BASE_URL + '/projects/' + e.id, {
        method: 'delete'
    })
        .then(des => {
            console.log(des)
        })
    // await getProjects()

}

