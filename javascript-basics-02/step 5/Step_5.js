var images = document.querySelectorAll("img");

images.forEach(function(image) {
    image.addEventListener("mouseover", function() {
        var character = image.getAttribute("id").charAt(5);
        image.src = "images/image" + character + "_2.jpg";
    });
});