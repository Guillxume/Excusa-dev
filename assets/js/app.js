import { generateMessage } from "../js/components/messages.js";
import { fakeLoader } from "./components/loader.js";
import { getUrlInfo } from "../js/components/messages.js";

window.addEventListener("load", generateMessage());
window.addEventListener("beforeunload", getUrlInfo);
document.getElementById("nouveau-message").addEventListener("click", fakeLoader);
