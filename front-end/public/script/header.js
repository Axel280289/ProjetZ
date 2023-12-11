/* Menu burger header */
document.getElementById("header").innerHTML = `
            <nav id="nav" class="">
                <img class="logo" src="/images/zevent-logo.webp" alt="Logo du Zevent">
                <div id="menu-icone">
                    <div id="logo-menu">
                        <a href=""><i class="fa-solid fa-house fa-2xl" style="color: #ffffff;"></i></a>
                        <a href=""><i class="fa-solid fa-building fa-2xl" style="color: #ffffff;"></i></a>
                        <a href=""><i class="fa-brands fa-square-youtube fa-2xl" style="color: #ffffff;"></i></a>
                        <a href=""><i class="fa-solid fa-hard-drive fa-2xl"></i></a>
                    </div>
                </div>
                <ul id="menu-principal">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/associations">Les Associations</a></li>
                    <li><a href="/clips">Les clips</a></li>
                    <li><a href="/stats">Les stats</a></li>
                </ul>
                <div id="icons">
                        <div class="btn_burger"><i  class="fa-solid fa-bars fa-2xl" style="color: #ffffff;"></i></div>
                        <div class="cross_burger"><i  class="fa-solid fa-xmark fa-2xl" style="color: #ffffff;"></i></div>
                </div>
            </nav>
            <div class="rs">
                    <a href="https://twitter.com/ZEventfr/header_photo"><i class="fa-brands fa-twitter fa-l" style="color: #ffffff;"></i></a>
                    <a href="https://www.instagram.com/zeventfr/?hl=fr"><i class="fa-brands fa-instagram fa-l" style="color: #ffffff;"></i></a>
                    <a href="https://www.reddit.com/r/zevent/"><i class="fa-brands fa-reddit-alien fa-l" style="color: #ffffff;"></i></a>
            </div>`;

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
