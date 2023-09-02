var inputFields = document.querySelectorAll("input");
var resetButton = document.querySelector("button");

resetButton.addEventListener("click", () => {
    var confirmation = confirm("Are you sure?");
    if (confirmation) {
        inputFields.forEach((inputF) => {
            inputF.value = "";
        })
    }
});
