export function Registration(e) {
    e.preventDefault();
}

const Form = new Form(e.target);
const username = Form.queryselector('username');
const email =Form.queryselector('email');
const password =Form.queryselector('password');
const passwordCheck =Form.queryselector('passwordCheck');


if (!username || !email || !password || !passwordCheck) {
    alert('All fields are required!');
    return;
}
console.log('Form submitted');


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