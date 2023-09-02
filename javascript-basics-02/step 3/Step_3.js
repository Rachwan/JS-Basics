var div = document.querySelector(".content");
var input = document.querySelector("#name");
input.addEventListener("input", function() {
    // Update the content of the div with the input's value
    div.textContent = input.value;
});