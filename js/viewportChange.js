function adapt(){
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 900) {
        const element = document.getElementById("carousel-container");
        element.style.height = "10rem"
    }
}
