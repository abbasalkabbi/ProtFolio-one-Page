const home_page = document.querySelector(".home"),
  skills_page = document.querySelector(".skills"),
  projects_page = document.querySelector(".project"),
  contact_page = document.querySelector(".contact"),
  menu = document.querySelector(".menu");

function home() {
  home_page.style.display = "block";
  skills_page.style.display = "none";
  projects_page.style.display = "none";
  contact_page.style.display = "none";
  console.log(contact_con);
}
function skills() {
  home_page.style.display = "none";
  skills_page.style.display = "flex";
  projects_page.style.display = "none";
  contact_page.style.display = "none";
}
function projects() {
  home_page.style.display = "none";
  skills_page.style.display = "none";
  projects_page.style.display = "flex";
  contact_page.style.display = "none";
}
function contact() {
  home_page.style.display = "none";
  skills_page.style.display = "none";
  projects_page.style.display = "none";
  contact_page.style.display = "flex";
}

/**/
function menu1() {
  if (menu.style.height == "100px") {
    menu.style.height = "0px";
  } else {
    menu.style.height = "100px";
  }
}
