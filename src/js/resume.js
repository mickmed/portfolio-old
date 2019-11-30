
import { makeElement } from './dom_helper'


export let resume = (type='.JPG') => {
    console.log(type)
    document.querySelector('.sidebar').style.display === "none" 
    &&  (document.querySelector('.sidebar').style.display = "inline") 
    
    && console.log('tesi')

    let mainContent = document.querySelector('.main-content')

    let resumeDiv
    if (document.querySelector('.resume')) {
        resumeDiv = document.querySelector('.resume')
        resumeDiv.innerHTML = ''
    } else {
        resumeDiv = makeElement('div', 'resume', mainContent, { id: 'resume' })

    }

    console.log(resumeDiv)
    // mainContent.removeChild(mainContent.childNodes[2])
    let imgWrapper = makeElement('div', 'res-img-wrapper', resumeDiv)


    if (type === '.JPG') {

         let img = type === '.JPG' && makeElement('img', 'resume', imgWrapper, { src: './src/img/resume.png' })
    }


    if (type === '.PDF') {

        let pdfObject = type === '.PDF' && makeElement('object', 'object', imgWrapper,
            {
                data: './src/img/resume.pdf',
                width: '100%', height: '100%',
                innerText: 'It appears your browser does not support .PDFs, but you can download it below',
                frameborder: 0,
                scrolling: 'no',
                navpanes: 0,
                scrollbar: 0

            })

        if (pdfObject.innerText.length !== 0) {

            let download = makeElement('div', 'div', imgWrapper, { innerHTML: '<span class="iconify down-arrow" data-icon="el:download" data-inline="false"></span>' })
            download.addEventListener('click', (e) => {
                window.open('./src/img/resume.pdf', '_blank')
            })
        }
    }

    if (type === '.DOC') {

        let iframeGoogle = type === '.DOC' && makeElement('iframe', 'iframe', imgWrapper, { src: 'https://docs.google.com/document/d/1K55Ni0Ck3mvfUIwPlBHoXo_ZcNFA4ubPwpZ_fujHgWU/export?format=doc', style: "width:100%; height: 100%;border: none;" })

        // let doc = makeElement('iframe', 'iframe', imgWrapper, { src: 'https://docs.google.com/a/[DOMINIO]/viewer?url=./src/img/resume.docx', style: "position: absolute;width:100%; height: 100%;border: none;" })
    }


    // let pdfObjectEmbed = type === '.PDF' && makeElement('object', 'object', imgWrapper,
    //     {
    //         data: './src/img/resume.pdf#toolbar=0&navpanes=0',
    //         width: '100%', height: '100%',

    //     })
    // let p = makeElement('p', 'p', pdfObject)

    // let embed = makeElement('embed', 'embed', pdfObject,
    //     {
    //         type: "application/pdf",
    //         src: './src/img/resume.pdf#toolbar=0&navpanes=0',
    //     })





    // let pdfIframe = type === '.PDF' && makeElement('iframe', 'iframe', imgWrapper,
    // {
    //     src: './src/img/resume.pdf',
    //     width: '100%', height: '100%',
    //     innerText: 'It appears your browser does not support .PDFs, but you can download it below',
    //     frameborder: 0,
    //     scrolling: 'no',
    //     navpanes: 0,
    //     scrollbar: 0

    // })


    // let pdfEmbed = type === '.PDF' && makeElement('embed', 'embed', imgWrapper,
    //     {
    //         src: './src/img/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&frameborder=0',
    //         width: '100%', height: '100%',
    //         frameborder:0,
    //         scrolling:'no',
    //         navpanes:0,
    //         scrollbar:0
    //     })


    // <object data="mydocument.pdf">
    //     <p><a href="mydocument.pdf">Download</a></p>
    //     <embed type="application/pdf" src="mydocument.pdf" />
    // </object>


    //    <img src = "http://pngimg.com/uploads/paper_sheet/paper_sheet_PNG7252.png"/ width="50px" height="70px">

   
    // console.log(img)
    // let gDoc = type === 'GoogleDoc' && makeElement('embed', 'iframe', imgWrapper, { src: 'https://docs.google.com/document/d/1K55Ni0Ck3mvfUIwPlBHoXo_ZcNFA4ubPwpZ_fujHgWU/edit?usp=sharing&single=true&widget=false&headers=false&chrome=false', width: '100%', height: '800%', frameborder: '0' })

    // src='https://view.officeapps.live.com/op/embed.aspx?src=[OFFICE_FILE_URL]' width='px' height='px' frameborder='0'
    // < iframe src = "http://docs.google.com/viewer?url=<?=urlencode($url)?>&embedded=true"  style = "position: absolute;width:100%; height: 100%;border: none;" ></iframe>


}
