document.addEventListener('DOMContentLoaded', () => {
    const elementosCarosel = document.querySelector('.carousel');
    M.Carousel.init(elementosCarosel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false 
    });
});