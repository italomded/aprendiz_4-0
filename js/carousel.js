setInterval(
    function() {
        const carousel = document.getElementById("carousel");
        carousel.src = "./images/image_" + Math.floor(Math.random() * 5) + ".jpeg";
    },
    5000
);