

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let expression = "";
buttons.forEach((button) => {

button.addEventListener("click" , (e) => {
  
const value = e.target.getAttribute("data-value");

if(value === "C"){
  expression = '';
  display.value = expression;
}else if(value === "="){
try{
expression = eval(expression);
display.value = expression;
}
catch{
  expression = '';
  display.value = "wrong!!!"
}
  
}else{
  expression += value;
  display.value = expression
}

})


})