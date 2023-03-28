import { generateMessage } from "../js/components/messages.js";
import { fakeLoader } from "./components/loader.js";
import { load } from "../js/components/messages.js";

window.addEventListener("beforeunload", load());
window.addEventListener("load", generateMessage());
document.getElementById("nouveau-message").addEventListener("click", fakeLoader);
