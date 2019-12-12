



let state = {
    projects: [],
    title: ''
}
getProjects = async () => {
    let prjsDiv = document.querySelector('.projects')
    prjsDiv.classList.add('projects')
    let projects = await fetch('http://localhost:3000/projects')
        .then((res) => {
            // console.log(res.json)
            return res.json()
        })
    console.log(projects)
    state.projects = projects

    state.projects.project_pics.map(e => {
        let form = document.createElement('form')
        let imgUpload = document.createElement('input')
        imgUpload.type = "file"
        imgUpload.id = "imgFile"
        form.appendChild(imgUpload)

        let title = document.createElement('input')
        title.classList.add('title')
        // title.value = e.title
        title.setAttribute('value', e.title)
        title.addEventListener('input', handleInput = (e) => {
            state.title = e.target.value
        })
        form.appendChild(title)

        let subtitle = document.createElement('input')
        subtitle.classList.add("subtitle")
        subtitle.value = e.subtitle
        form.appendChild(subtitle)

        let url = document.createElement('input')
        url.classList.add('url')
        url.value = e.url
        form.appendChild(url)

        let pic = document.createElement('img')
        pic.classList.add('proj-pic')
        pic.src = e.image_url
        pic.style.width = '50px'
        form.appendChild(pic)

        let btn = document.createElement('button')
        btn.classList.add("btn")
        btn.innerText = e.title
        btn.addEventListener('click', () => {
            getOneProject(e)
        })
        form.appendChild(btn)

    updateBtn = document.createElement('button')
        updateBtn.classList.add('update-btn')
        updateBtn.innerText = 'edit'
        updateBtn.addEventListener('click', (event) => {
            editProject(e,event)
        })
        form.appendChild(updateBtn)

        let destroyBtn = document.createElement('button')
        destroyBtn.classList.add('destroy-btn')
        destroyBtn.innerText = 'delete'
        destroyBtn.addEventListener('click', (event) => {
            destroyProject(e,event)
        })
        form.appendChild(destroyBtn)




        prjsDiv.appendChild(form)

    })


}

let getOneProject = async (obj) => {
    console.log(obj.id)
    let imgdiv = document.querySelector('img')
    const getProject = await fetch(`http://localhost:3000/projects/${obj.id}`)
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

editProject = async (e,event) => {
    event.preventDefault()
    let title = document.querySelectorAll('.title')[e.id-1]
    console.log(title)
    console.log(state.title)
   
    let files = document.getElementById('imgFile')
    console.log(files.files)
    let form = new FormData();
    for (let i = 0; i < files.files.length; i++) {
        console.log(files.files[i])
        form.append('picture', files.files[i])
        form.append('title', state.title)
    }
    await fetch('http://localhost:3000/projects/'+ e.id, {
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

addPic = async (e) => {

    let files = document.getElementById('file')
    let form = new FormData();
    for (let i = 0; i < files.files.length; i++) {
        console.log(files.files[i])
        form.append('picture', files.files[i]);
        form.append('title', state.title)
    }
    console.log(form)
    await fetch('http://localhost:3000/projects', {
        method: 'post',
        body: form
    }).then(function (res) {
        console.log(res)
        return res
    })
}

destroyProject = async(e, event) => {
    event.preventDefault()
    await fetch('http://localhost:3000/projects/'+ e.id,{
        method:'delete'
    })
    .then(des=>{
        console.log(des)
    })
    // await getProjects()

}

export let a = "alphabet"



