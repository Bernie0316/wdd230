const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector('body');
const black = document.querySelector('.black');

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌗")) {
		body.style.background = "#000";
		black.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		body.style.background = "#eee";
		black.style.color = "black";
		modeButton.textContent = "🌗";
	}
});
