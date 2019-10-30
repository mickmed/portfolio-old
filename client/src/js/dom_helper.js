export function makeElementt(element_type, className, parent, obj = {}) {


    let el = document.createElement(element_type)
    
    let objKeys = Object.keys(obj)
    objKeys.forEach(ok => {
        if (ok !== '') {
            // console.log(typeof ok, obj[ok])
            el[ok] = obj[ok]
        }
    })
    el.classList.add(className)
    // if(value !== ''){el.setAttribute('value', value)}
    parent.appendChild(el)
    return el
}


