const car = document.querySelector(".car");

window.addEventListener("scroll", function () {

    let scroll = window.scrollY;

    car.style.transform = `
        translateX(${-scroll * 0.5}px)
        rotate(${-scroll * 0.03}deg)
    `;

});
