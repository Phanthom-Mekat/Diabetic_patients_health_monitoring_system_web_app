document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("darkModeToggle");

    image.addEventListener("click", function() {
        
        if (image.src.includes("nightMode.png")) {
            image.src = "dayMode.png"; 
        } else {
            image.src = "nightMode.png"; 
        }
    });
});