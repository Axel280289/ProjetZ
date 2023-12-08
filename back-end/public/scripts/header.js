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

// deconnexion

function openLogoutModal() {
  const logoutModal = document.getElementById("logoutModal");
  logoutModal.style.display = "block";
}

function closeLogoutModal() {
  const logoutModal = document.getElementById("logoutModal");
  logoutModal.style.display = "none";
}
