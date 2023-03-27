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

export function getUrlInfo() {
	// Récupération de l'http_code depuis l'URL
	let urlParams = new URLSearchParams(window.location.search);
	let httpCode = urlParams.get("http_code");

	if (httpCode) {
		// Recherche du message correspondant à l'http_code
		let message = messages.find(function (element) {
			return element.http_code == httpCode;
		});

		if (message) {
			// Affichage du message correspondant à l'http_code
			document.title = message.tag;
			let httpCode = message.http_code;
			document.getElementById("message").innerHTML = message.message;
			window.history.pushState(null, null, "?http_code=" + httpCode);
		} else {
			// Si aucun message ne correspond à l'http_code, redirection vers la page "lost"
			window.history.pushState(null, null, "lost.html");
			setTimeout(redirigerVersPagePrincipale, 5000); // Redirection vers la page principale après 5 secondes
		}
	} else {
		// Si aucun http_code n'est spécifié dans l'URL, redirection vers la page "lost"
		window.history.pushState(null, null, "lost.html");
		setTimeout(redirigerVersPagePrincipale, 5000); // Redirection vers la page principale après 5 secondes
	}
}
