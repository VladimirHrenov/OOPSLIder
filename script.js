class Slider {
    constructor(container,slides) {
        this.container = container;
        this.slides = slides;
        this.count = 1;
        this.width = container.offsetWidth;
    }
    next() {
        this.count++;
        if(this.count >= 3){
            this.count = 0;
        }
        this.slides.style.transform = `translateX(-${this.width * this.count}px)`;
        
    }
    prev () {
        this.count--;
        if(this.count < 0) {
            this.count = 2;
        }
        this.slides.style.transform = `translateX(-${this.width * this.count}px)`;
    }
}


const sliderContainer = document.querySelector('.slider-container');
const sliderSlides = document.querySelector('.slides');

const slider = new Slider(sliderContainer,sliderSlides);

document.querySelector('.next').addEventListener('click', () => {
    slider.next();
});
document.querySelector('.prev').addEventListener('click', () => {
    slider.prev();
});

