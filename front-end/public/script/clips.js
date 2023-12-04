const list = document.querySelectorAll('#nav-sideBar li');
const nav1 = document.getElementById('nav-sideBar');
const icons1 = document.getElementById('icons1');
icons1.addEventListener("click", () =>{
    nav1.classList.toggle("active");
})

list.forEach((link) => {
    link.addEventListener("click", () =>{
        nav1.classList.remove("active");
    })
})
