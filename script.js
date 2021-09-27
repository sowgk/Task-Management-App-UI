var app1 = document.querySelector(".app-1");
var app2 = document.querySelector(".app-2");
let a = document.querySelector(".nav");
const b = document.querySelector(".span");
const c = document.querySelector(".participant");

function darkLightToggle() {
	app1.classList.toggle("dark-mode");
	app2.classList.toggle("dark-mode");
	a.classList.toggle("dark-mode");
	b.classList.toggle("span-s");
}
