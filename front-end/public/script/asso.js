function openDefaultTab() {
  openTab("tab1");
}

// Fonction pour ouvrir un onglet spécifique
function openTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none"; // Masque tous les contenus d'onglet
  }

  const tab = document.getElementById(tabId);
  if (tab) {
    tab.style.display = "block"; // Affiche l'onglet actif en display: block
  }

  // Définir la classe "active" pour mettre en évidence l'onglet actif
  const tablinks = document.querySelectorAll(".onglet");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  const activeTablink = document.querySelector(
    "[onclick=\"openTab('" + tabId + "')\"]"
  );
  if (activeTablink) {
    activeTablink.classList.add("active");
  }
}

// Appel de la fonction pour ouvrir l'onglet par défaut au chargement de la page
openDefaultTab();

// //fecth // frontend.js
// document.addEventListener("DOMContentLoaded", function () {
//   const apiUrl = "http://localhost:3001/usersList";

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((users) => {
//       const userListElement = document.getElementById("userList");

//       users.forEach((user) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = `${user.firstname} ${user.lastname} - ${user.email}`;
//         userListElement.appendChild(listItem);
//       });
//     })
//     .catch((error) =>
//       console.error(
//         "Erreur lors de la récupération de la liste des utilisateurs :",
//         error
//       )
//     );
// });
