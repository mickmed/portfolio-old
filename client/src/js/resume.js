
import { makeElement } from './dom_helper'


export let resume = () => {

    let mainContent = document.querySelector('.main-content')
    console.log(mainContent.childNodes)
    // mainContent.removeChild(mainContent.childNodes[2])
    
    // let embed = makeElement('embed', 'iframe', main, { src: 'https://docs.google.com/document/d/1K55Ni0Ck3mvfUIwPlBHoXo_ZcNFA4ubPwpZ_fujHgWU/edit?usp=sharing&single=true&widget=false&headers=false&chrome=false', width:'100%', height:'800%', frameborder:'0'})
    // let div = makeElement('div', 'res-img-wrapper', mainContent)
    let blah = document.createElement('div')
    blah.classList.add('res-img-wrapper')
    mainContent.appendChild(blah)
    console.log(mainContent)
    let img = makeElement('img', 'resume', blah,{src:'./src/img/resume.png'})
    console.log(img)
    // src='https://view.officeapps.live.com/op/embed.aspx?src=[OFFICE_FILE_URL]' width='px' height='px' frameborder='0'


}
