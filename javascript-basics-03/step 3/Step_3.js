var color = document.querySelector(".color");
var green = document.querySelector(".green");
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var text = document.getElementById("text")

function changeTextColor(color) {
    text.style.color = color;
};
green.addEventListener("click", () => {
    changeTextColor("green");
});
red.addEventListener("click", () => {
    changeTextColor("red");
});
blue.addEventListener("click", () => {
    changeTextColor("blue");
});