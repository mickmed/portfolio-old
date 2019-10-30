
import { makeElementt } from './dom_helper.js'
export let person = () => {

    let sidebar = document.querySelector('.sidebar')
    // let sidebar = makeElementt('aside', 'sidebar', container, {})
    let headerImg = makeElementt('div', 'header-img', sidebar, {})
    let img = makeElementt('img', 'img', headerImg, { src: '../src/img/sm_IMG_8809.jpg', alt:'mickpic' })
    let email = makeElementt('div', 'email', sidebar, {})
    let anchor = makeElementt('a', 'url', email, { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.com' })
    anchor.innerText = 'mickrothnyc@gmail.com'
}