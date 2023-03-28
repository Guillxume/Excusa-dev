import { generateMessage } from "../components/messages.js";

export function fakeLoader() {
	document.getElementById("loader").classList.remove("hide");
	let min = 1;
	let max = 5;
	let time = Math.floor(Math.random() * (max - min + 1) + min);
	setTimeout(hideLoader, time * 1000);
}

function hideLoader() {
	document.getElementById("loader").classList.add("hide");
	generateMessage();
}
