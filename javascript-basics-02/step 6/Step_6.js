var images = document.querySelectorAll("img");

function changeImageOnHover(event) {
    var image = event.target;
    var character = image.getAttribute("id").charAt(5);
    image.src = "images/image" + character + "_2.jpg";
}

function restoreOriginalImage(event) {
    var image = event.target;
    var character = image.getAttribute("id").charAt(5);
    image.src = "images/image" + character + ".jpg";
}

images.forEach(function(image) {
    image.addEventListener("mouseover", changeImageOnHover);
    image.addEventListener("mouseout", restoreOriginalImage);
});
