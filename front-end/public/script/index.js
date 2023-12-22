// Définition de l'url à suivre pour récupérer les données

const localServerUrl = "http://localhost:3001";
const historicendpoint = "/list-historics";
const historicurl = `${localServerUrl}${historicendpoint}`;

const streamerendpoint = "/list-streamers";
const streamerurl = `${localServerUrl}${streamerendpoint}`;

// Définition du script pour afficher les données.
document.addEventListener("DOMContentLoaded", function() {
    fetch(historicurl)
        .then(response => response.json())
        .then((historics) => {
            const historicListElement = document.getElementById("historic-list");

            let htmlContent = ""; // Déclaration et initialisation de la variable

            historics.forEach((historic) => {
                htmlContent += `<ul class="historic-item">
                    <li>${historic.date}</li>
                    <li>${historic.amount} €</li>
                    <li>${historic.associations}</li>
                    </ul>
                `;
            });

            historicListElement.innerHTML = htmlContent;
        })
        .catch((error) => console.error('Erreur lors de la création de la liste des historiques', error));
});




// Définition de l'url à suivre pour récupérer les données

// Définition du script pour afficher les données.
document.addEventListener("DOMContentLoaded", function() {
    fetch(streamerurl)
        .then(response => response.json())
        .then((streamers) => {
            const streamerListElement = document.getElementById("streamer-list");

            let htmlContent = ""; // Déclaration et initialisation de la variable

            streamers.forEach((streamer) => {
                htmlContent += `<ul class="streamer-item">
                    <a href="${streamer.twitch}">
                        <img src="/images/${streamer.name}.webp">
                        <li>${streamer.name}</li>
                    </a>
                    </ul>
                `;
            });

            streamerListElement.innerHTML = htmlContent;
        })
        .catch((error) => console.error('Erreur lors de la création de la liste des historiques', error));
});
