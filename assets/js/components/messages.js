import { messages } from "../../js/data/messageData.js";

export function generateMessage() {
	let index = Math.floor(Math.random() * messages.length);
	let httpCode = messages[index].http_code;
	let message = messages[index].message;
	document.getElementById("message").innerHTML = message;
	document.title = messages[index].tag;
	// Edit URL with http code of the selected message
	window.history.pushState(null, null, "?http_code=" + httpCode);
}

// Événement au chargement de la page pour afficher un message aléatoire initial ou la page "lost"
export function load() {
	// Récupération de l'http_code depuis l'URL
	let urlParams = new URLSearchParams(window.location.search);
	let httpCodeParam = urlParams.get("http_code");

	if (httpCodeParam) {
		// Recherche du message correspondant à l'http_code
		let getMessageInfos = messages.find(function (element) {
			return element.http_code == httpCodeParam;
		});

		if (getMessageInfos) {
			// Affichage du message correspondant à l'http_code
			generateMessage();
		} else {
			// Si aucun message ne correspond à l'http_code, rediriger vers la page "lost"
			window.history.pushState(null, null, "?page=lost");
			setTimeout(function () {
				window.location.href = window.location.origin + window.location.pathname;
			}, 5000);
			document.body.innerHTML = '<img src="https://media.giphy.com/media/njYrp176NQsHS/giphy.gif" alt="lost" style="display:block;margin:auto;width:100%;height:100vh;">';
		}
	} else {
		// Si aucun http_code n'est spécifié dans l'URL, affichage d'un message aléatoire
		generateMessage();
	}
}
