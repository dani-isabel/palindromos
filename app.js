let start = document.getElementById("start");
let write = document.getElementById("write");
let description = document.getElementById("description");
let input = document.getElementById("input");
let palindromo = document.getElementById("palindromo");
let initial = document.getElementById("initial");
let reflect = document.getElementById("reflect");
start.addEventListener('click',()=> {
    description.classList.toggle("hide");
    write.classList.toggle("hide");
})
finish.addEventListener('click',()=> {
    write.classList.toggle("hide");
    palindromo.classList.toggle("hide");
    getInput(input);
})
function getInput(input) {
    let html = `<h1 class="bold" >${input.value}</h1>`;
    let html1 = "";
    let input1 = input.value.replace(/ /g,"");
    for (i = input1.length; 0<i; i--) {
        input1[i-1];
        html1 += `<h1 class="bold column" >${input1[i-1]}</h1>`;
    }
    initial.innerHTML = html;
    reflect.innerHTML = html1;
}
