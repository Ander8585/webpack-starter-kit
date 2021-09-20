import style from "./style.css";
import logo from "./assets/webpack.svg";
import data from "./assets/data.json";
import { HelloWorld } from "./components/HelloWorld.ts";

//document.getElementById("app").innerHTML = `<img src= "${logo}" alt="arbol">`;

const d = document,
	$app = d.getElementById("app"),
	$h1 = d.createElement("h1"),
	$logo = d.createElement("img"),
	$div = d.createElement("div"),
	$nav = d.createElement("nav");

let menu = "",
	hello = new HelloWorld("TypeScript");

data.links.forEach((el) => {
	menu += `<a href="${el[1]}">${el[0]}</a>`;
});

$h1.textContent = hello.greet();
$logo.src = logo;
$logo.classList.add("small-img");
$div.classList.add("background");
$nav.innerHTML = menu;
$nav.classList.add("menu");

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
