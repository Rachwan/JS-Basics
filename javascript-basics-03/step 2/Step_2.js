var showLink = document.getElementById("show");
var hideLink = document.getElementById("hide");
var textDiv = document.getElementById("texte");

function textVisibility() {
    if (textDiv.style.display === "none" || textDiv.style.display === "") {
        textDiv.style.display = "block";
    } else {
        textDiv.style.display = "none";
    }
}

showLink.addEventListener("click", textVisibility);
hideLink.addEventListener("click", textVisibility);