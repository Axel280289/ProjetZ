const list = document.querySelectorAll('#nav-sideBar li');
const nav1 = document.getElementById('nav-sidebar');
const icons1 = document.getElementById('icons1');
const sidebar = document.querySelectorAll('.container li');


icons1.addEventListener("click", () =>{
    nav1.classList.toggle("active");
})

list.forEach((link) => {
    link.addEventListener("click", () =>{
        nav1.classList.remove("active");
    })
})

const tabs = [...document.querySelectorAll('.tablink')];

// Ajoutez un écouteur d'événements "click" à chaque élément du tableau 'tabs'
tabs.forEach(tablink => tablink.addEventListener("click", tabsAnimation));

// Définissez la fonction tabsAnimation qui gère le changement d'onglets
function tabsAnimation(e) {
    // Sélectionnez tous les éléments avec la classe 'tab-content' et stockez-les dans un tableau
    const tabcontents = [...document.querySelectorAll(".tab-content")];

    // Trouvez l'index de l'onglet actif
    const indexToRemove = tabs.findIndex(tablink => tablink.classList.contains("active-tab"));
    const indexToShow = tabs.indexOf(e.target);

    // Supprimez la classe 'active-tab' de l'onglet actif
    tabs[indexToRemove].classList.remove("active-tab");
    
    tabs[indexToShow].classList.add("active-tab");
    // Supprimez la classe 'active-tab-content' du contenu d'onglet actif
    tabcontents[indexToRemove].classList.remove("active-tab-content");

    tabcontents[indexToShow].classList.add('active-tab-content');

    nav1.classList.remove('active');
    window.scroll(0, 0);
}

// //fecth // frontend.js
// document.addEventListener("DOMContentLoaded", function () {
//   const apiUrl = "http://localhost:3001/jv/list";

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((jvs) => {

//       jvs.forEach((jv) => {
//         const jvTitre = document.getElementById("titreJv");
//         jvTitre.textContent = `${jv.titre}`;
//       });
//     })
//     .catch((error) =>
//       console.error(
//         "Erreur lors de la récupération de la liste des jeux videos:",
//         error
//       )
//     );
// });
