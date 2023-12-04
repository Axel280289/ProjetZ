// menu burger//

const links = document.querySelectorAll("#nav li");
const nav = document.getElementById("nav");
const icons = document.getElementById("icons");
console.log(links);

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

//
