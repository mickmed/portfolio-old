let BASE_URL = 'http://localhost:3000'
// let BASE_URL = 'https://portfolio-mick.appspot.com'

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

export const showSingleItemm = async (event, obj, type) => {
    // event.preventDefault()
    console.log('inside function', obj.id)

    const result = await fetch(`${BASE_URL}/${type}/${obj.id}`)
        .then(function (res) {
            console.log(res.json)
            return res.json()
        }).then(function (red) {
            console.log(red)
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