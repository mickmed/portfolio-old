import { makeElement } from "./dom_helper";
import { getResults } from "./api_helper";
import { showSingleItemm } from "./api_helper";
import { technologies } from "./technologies";
import { navbar } from "./nav";

const pathToImg = require.context("../img/", true);
// console.log(pathToImg);

export let projects = async (type, data = []) => {
  
  // console.log("datalenght", data.length);
  matchMedia("(min-width: 600px)").matches &&
  document.querySelector(".sidebar").style.display === "none" &&
    (document.querySelector(".sidebar").style.display = "inline") &&
    console.log('type/data', type, data);
  // console.log('type/data', type, data);
  let res =
    data.length === 0 || data.length === "undefined"
      ? await getResults(type)
      : data;
  console.log("res", res);
  if (Object.keys(res)[0] === "project") {
    res.project = [res.project];
    // console.log('rest', res)
    type = "project";
  } else {
    type = "projects";
  }
  let mainContent = document.querySelector(".main-content");
  let projectsDiv = makeElement("div", "projects", mainContent, {
    id: "projects"
  });

  res[type].forEach((e, i) => {
    // console.log('src/'+ e.local_url)
    let projWrapper = makeElement("div", "proj-wrapper", projectsDiv, {});
    projWrapper.classList.add("proj-wrap" + e.id);
    if (type === "project" && window.matchMedia("(min-width: 600px)").matches) {
      projWrapper.style.width = "110%";
      projWrapper.style.fontSize = "2em";
    }

    let project = makeElement("div", "project", projWrapper);
    project.classList.add("project" + e.id, "projectCard");
    // project.addEventListener('click', async function (evt) {
    //   let res = await showSingleItemm(evt, e, 'projects')

    //   document.querySelector('.main-content').innerHTML = ''
    //   navbar({ project: e })
    //   projects('project', { 'project': e, 'technologies': res.technologies, 'traits': res.traits })
    //   technologies('technologies', { 'technologies': res.technologies })
    // })    // let anchor = makeElement('a', 'proj-link', project, { href: e.site_url, target: "_blank" })

    let imgWrapper = makeElement("div", "img-wrapper", project);
    let img = makeElement("img", "img", imgWrapper, {
      src: "src/img/" + e.local_url
    });

    let modal = makeElement("div", "modal", imgWrapper, {});

    modal.classList.add("project-" + e.id + "-modal", "modal-slide");
    let modalSpan = makeElement("span", "modal-span", modal);
    let modalh2 = makeElement("h2", "project-title", modalSpan, {
      innerText: e.title
    });
    let techsDiv = makeElement("div", "techs-div", modalSpan);
    techsDiv.style.display = "none"

    res.technologies && res.technologies.forEach(tech => {
        img = makeElement("img", "tech-img", techsDiv, {
          src: "src/img/" + tech.local_url
        });
    });

    let linkModal = makeElement("div", "link-modal", imgWrapper);
    let linkModalMore = makeElement("p", "more-anchor", linkModal, {
      innerText: "...more"
    });
    linkModalMore.addEventListener("click", async evt => {
      let res = await showSingleItemm(evt, e, "projects");

      document.querySelector(".main-content").innerHTML = "";
      navbar({ project: e });
      projects("project", {
        project: e,
        technologies: res.technologies,
        traits: res.traits
      });
      technologies("technologies", { technologies: res.technologies });
    });

    let linkModalSiteBtn = makeElement("button", "site-button", linkModal, {
      innerText: "visit site"
    });
    linkModalSiteBtn.addEventListener("click", evt => {
      location.href = e.site_url;
      target = "_blank";
    });

    let h3;
    let traitsDiv = makeElement("div", "traits-div", modal);
    traitsDiv.style.display = "none"
    res.traits &&
      res.traits.forEach(trait => {
        h3 = makeElement("h3", "trait", traitsDiv, { innerText: trait.name });
       
      });
    // traitsDiv.style.display = "none"

    if (type === "project" && window.matchMedia("(min-width: 300px)").matches) {
      console.log('300')
      linkModalMore.style.display = "none";
      modal.style.backgroundImage =
        "linear-gradient(to right, rgba(255,255,255, 1),rgba(255, 255, 255, 1) )";
        document.querySelector('.techs-div').style.display = "flex"
        document.querySelector(".traits-div").style.display = "flex"

      // modal:after.style.backgroundImage = 'linear-gradient(to right, rgba(150,150,150, 0.99),rgba(255, 255, 255, 1) )'
      // console.log('testing')
      let sidebar = document.querySelector(".sidebar");
      // console.log("sidebar", sidebar);
      sidebar.style.display = "none";
    }

    // console.log('modal', modal)
  });
};
