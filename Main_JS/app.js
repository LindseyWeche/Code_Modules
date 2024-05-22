
import { Registration } from "./reg";
const form = document.getElementById("registration")
form.addEventListener("submit", Registration)



const Menu = document.querySelector(".menu");
const Submenu = document.querySelector(".sub-menu");

// Menu.addEventListener("click",() =>{
//     Submenu.classList.toggle("hide");
// });

// function text(){
//     document.getElementById("text-container").firstElementChild.innerHTML.style.color = "red"
// }


const p = document.createElement("p");
document.body.appendChild(p);
p.innerHTML =
`<p> &copy;Author: Lindsey Weche</p>
<p>
  <a> <ahref="mailto:lindseyhaishanw22@icloud.com">lindseyhaishanw22@icloud.com</a>
</p>`;

function promptMethod() {
    const inputPrompt = promptMethod("Welcome to Lakay News _A Haitian Blog");
    alert ("Hello" +inputPrompt);
}

function mouseOver (){
document.getElementById("heading").style.color = "red";
}

function mouseOut (){
    document.getElementById("heading").style.color = "black";
}
