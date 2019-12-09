import { makeElement } from "./dom_helper";
import { projects } from "./projects";
import { technologies } from "./technologies";
import { resume } from "./resume";
import { resumeAside } from "./resumeAside";
import { navbar } from "./nav";
import { about } from "./about"
import { aboutAside } from "./aboutAside"

export const burgerMenu = () => {
  const container = document.querySelector(".container");
  const mainDiv = makeElement("div", "burgerMenu-mainDiv", container);
  const itemProjects = makeElement("h4", "burger-item", mainDiv, {
    innerText: "projects"
  });
  itemProjects.addEventListener("click", evt => {
    navbar(null, "projects");
    projects("projects");
    technologies("technologies");
    mainDiv.style.display = "none";
 
  });
  itemProjects.style.cursor="pointer"


  const itemResume = makeElement("h4", "burger-item", mainDiv, {
    innerText: "resume"
  });
  itemResume.addEventListener("click", evt => {
    navbar(null, "resume");
    resume();
    resumeAside();

    mainDiv.style.display = "none";
  });
  itemResume.style.cursor="pointer"


  const itemAbout = makeElement("h4", "burger-item", mainDiv, {
    innerText: "about"
  });
  itemAbout.addEventListener("click", evt => {
    navbar(null, "about");
    about();
    // aboutAside();

    mainDiv.style.display = "none";
  });
  itemAbout.style.cursor="pointer"

  let itemLinkedIn = makeElement("h4", "burger-item", mainDiv, {
    innerText: "Linked In"
  });
  itemLinkedIn.addEventListener("click", evt => {
    location.href = "https://www.linkedin.com/in/mick-roth/";
    target = "_blank";
  });
  itemLinkedIn.style.cursor="pointer"


  let itemGithub = makeElement("h4", "burger-item", mainDiv, {
    innerText: "Github"
  });
  itemGithub.addEventListener("click", evt => {
    location.href = "https://github.com/mickmed";
    target = "_blank";
  });
  itemGithub.style.cursor="pointer"

  mainDiv.children.forEach(child=>{
    console.log('child', child)
    child.style.cursor="pointer"
})
};
