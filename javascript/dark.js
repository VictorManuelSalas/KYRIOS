let modo = document.getElementById("modo");
let body = document.body;
let txt_modo = document.getElementById("txt_modo");

modo.addEventListener("click", function () {
  let val = body.classList.toggle("dark");
  localStorage.setItem("modoPage", val);
});

let valor = localStorage.getItem("modoPage");
if (valor == "true") {
  body.classList.add("dark");
  
} else {
  body.classList.remove("dark");

}
