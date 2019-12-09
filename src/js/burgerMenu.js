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

  const itemResume = makeElement("h4", "burger-item", mainDiv, {
    innerText: "resume"
  });
  itemResume.addEventListener("click", evt => {
    navbar(null, "resume");
    resume();
    resumeAside();

    mainDiv.style.display = "none";
  });

  const itemAbout = makeElement("h4", "burger-item", mainDiv, {
    innerText: "about"
  });
  itemAbout.addEventListener("click", evt => {
    navbar(null, "about");
    about();
    // aboutAside();

    mainDiv.style.display = "none";
  });

  let itemLinkedIn = makeElement("h4", "burger-item", mainDiv, {
    innerText: "Linked In"
  });
  itemLinkedIn.addEventListener("click", evt => {
    location.href = "https://www.linkedin.com/in/mick-roth/";
    target = "_blank";
  });

  let itemGithub = makeElement("h4", "burger-item", mainDiv, {
    innerText: "Github"
  });
  itemLinkedIn.addEventListener("click", evt => {
    location.href = "https://github.com/mickmed";
    target = "_blank";
  });
};
mainDiv.children.forEach(child=>{
    child.style.cursor="pointer"
})