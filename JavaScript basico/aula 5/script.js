const ativar = document.querySelector(".ativar");
function handleClick(event) {
  console.log("clicou em", event.timeStamp);
}
ativar.addEventListener("click", handleClick);
console.log(ativar);
