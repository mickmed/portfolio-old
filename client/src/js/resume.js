
import { makeElementt } from './dom_helper'


export let resume = () => {

    let main = document.querySelector('.main-content')

    main.removeChild(main.childNodes[2])
    
    // let embed = makeElementt('embed', 'iframe', main, { src: 'https://docs.google.com/document/d/1K55Ni0Ck3mvfUIwPlBHoXo_ZcNFA4ubPwpZ_fujHgWU/edit?usp=sharing&single=true&widget=false&headers=false&chrome=false', width:'100%', height:'800%', frameborder:'0'})
    let div = makeElementt('div', 'res-img-wrapper', main)
    let img = makeElementt('img', 'resume', div,{src:'./src/img/resume.png'})

    // src='https://view.officeapps.live.com/op/embed.aspx?src=[OFFICE_FILE_URL]' width='px' height='px' frameborder='0'


}
