var passInput = document.getElementById("password");
var confirmInput = document.getElementById("confirmation");
var testButton = document.querySelector("button");

function checkPasswords() {
    var passValue = passInput.value;
    var confirmValue = confirmInput.value;

    if (passValue !== confirmValue) {
        passInput.style.borderColor = "red";
        confirmInput.style.borderColor = "red";
    } else {
        passInput.style.borderColor = "";
        confirmInput.style.borderColor = "";
    }
}
testButton.addEventListener("click", checkPasswords);
