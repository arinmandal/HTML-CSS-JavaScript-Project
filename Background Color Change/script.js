var bodyElement = document.body;
let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let greenBtn = document.getElementById("green");
let yellowBtn = document.getElementById("yellow");
let cyclamenBtn = document.getElementById("cyclamen");

redBtn.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "red";
})
blueBtn.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "blue";
})
greenBtn.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "green";
})
yellowBtn.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "yellow";
})
cyclamenBtn.addEventListener("click", () => {
  bodyElement.style.backgroundColor = "#EF709D";
})