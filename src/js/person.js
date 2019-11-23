
import { makeElement } from './dom_helper.js'
export let person = () => {

    let sidebar = document.querySelector('.sidebar')
    // let sidebar = makeElement('aside', 'sidebar', container, {})
    let headerImg = makeElement('div', 'header-img', sidebar, {})
    let img = makeElement('img', 'img', headerImg, { src: '../src/img/sm_IMG_8809.jpg', alt:'mickpic' })
    let email = makeElement('div', 'email', sidebar, {})
    let anchor = makeElement('a', 'url', email, { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.com' })
    anchor.innerText = 'mickrothnyc@gmail.com'
}