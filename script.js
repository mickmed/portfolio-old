// let project1 = document.querySelector('.project1')
// let project1Modal = document.querySelector('.project-1-modal')
// console.log(project1Modal)

// project1.addEventListener('mouseover', () => {
//   console.log('clcik')
//   project1Modal.style.display = "block"

// })


// project1.addEventListener('mouseleave', () => {
//   console.log('clcik')


//   project1Modal.style.display = "none";
// })



// let project2 = document.querySelector('.project2')
// let project2Modal = document.querySelector('.project-2-modal')
// // console.log(project1Modal)

// project2.addEventListener('mouseover', () => {
//   console.log('clcik')
//   project2Modal.style.display = "block"

// })


// project2.addEventListener('mouseleave', () => {
//   console.log('clcik')


//   project2Modal.style.display = "none";
// })


// let project3 = document.querySelector('.project3')
// let project3Modal = document.querySelector('.project-3-modal')
// // console.log(project1Modal)
// let projWrapper = document.querySelector('.proj-wrapper')
// projWrapper.addEventListener('mouseover', (e) => {
//   console.log(e.target.nextSibling.nextSibling)
//   let techs = e.target.nextSibling.nextSibling
//   techs.style.visibility = "visible"
//   project3Modal.style.display = "block"

// })


// projWrapper.addEventListener('mouseleave', (e) => {
//   console.log(e.target.querySelector('.techs'))
//   let techs = e.target.querySelector('.techs')

//   techs.style.visibility = "hidden";
// })




let projWrappers = document.querySelectorAll('.proj-wrapper')
console.log(projWrappers)
let projects = document.querySelector('.projects')
projWrappers.forEach((proj) => {
  proj.addEventListener('mouseover', (e) => {
    console.log(e.target.querySelector('.modal'))
    let techs = e.target.nextSibling.nextSibling
    let modal = e.target.querySelector('.modal')
    techs.style.visibility = "visible"
    modal.style.display="block"

  })
  proj.addEventListener('mouseleave', (e) => {
    console.log(e.target.querySelector('.techs'))
    let techs = e.target.querySelector('.techs')
  
    techs.style.visibility = "hidden";
  })
})
// let project4 = document.querySelector('.project4')
// let project4Modal = document.querySelector('.project-4-modal')
// // console.log(project1Modal)

// project4.addEventListener('mouseover', () => {
//   console.log('clcik')
//   project4Modal.style.display = "block"

// })


// project4.addEventListener('mouseleave', () => {
//   console.log('clcik')


//   project4Modal.style.display = "none";
// })


let url = window.location.hash;


// if(window.location.hash) {
//   var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
//   alert (hash);
//   // hash found
// } else {
//   // No hash found
navItems = document.querySelector('nav')
navItems.addEventListener('click', (e) => {

  for (let i = 0; i < navItems.children.length; i++) {




    if (navItems.children[i].innerText === e.target.innerText) {

      navItems.children[i].firstChild.nextSibling.firstChild.style.color = "red"

    } else {
      navItems.children[i].firstChild.nextSibling.firstChild.style.color = "black"

    }

  }

})