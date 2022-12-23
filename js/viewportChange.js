function adaptCarousel(){
    const viewportWidth = window.innerWidth;
    const element = document.getElementById("carousel-container");
    if (element != null) {
        if (viewportWidth < 900) {
            element.style.height = "10rem"
        } else {
            element.style.height = "30rem"
        }
    }
}

function adaptFooter(){
    const viewportWidth = window.innerWidth;
    const elements = document.getElementsByClassName("footer-img");
    if (elements != null) {
        if (viewportWidth < 900) {
            for (let i = 0 ; i < elements.length ; i++) {
                elements[i].style.height = "3rem";
            }
        } else {
            for (let i = 0 ; i < elements.length ; i++) {
                elements[i].style.height = "5rem";
            }
        }
    }

}

window.addEventListener('resize', function(){adaptFooter(); adaptCarousel()}, true);
setTimeout(() => {
    adaptFooter(); adaptCarousel();
}, 300)
setTimeout(() => {
    adaptFooter(); adaptCarousel();
}, 500)