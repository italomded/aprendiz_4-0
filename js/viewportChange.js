function adaptCarousel(){
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 900) {
        const element = document.getElementById("carousel-container");
        element.style.height = "10rem"
    }
}

function adaptFooter(){
    console.log("ola");
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 900) {
        const elements = document.getElementsByClassName("footer-img");
        for (let i = 0 ; i < elements.length ; i++) {
            elements[i].style.height = "3rem";
        }
    }
}