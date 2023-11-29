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

function openDefaultTab() {
  openTab("tab1");
}

// Appel de la fonction pour ouvrir l'onglet par défaut au chargement de la page
openDefaultTab();
