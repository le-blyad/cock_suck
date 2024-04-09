let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const sliderDots = document.querySelector('.slider-dots');

sliderDots.innerHTML = '';

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.setAttribute('onclick', `gotoSlide(${i})`);
    sliderDots.appendChild(dot);
}

showSlide(currentSlide);

function showSlide(index) {

    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });


    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.style.backgroundColor = 'black';
        } else {
            dot.style.backgroundColor = 'gray';
        }
    });
}

function changeSlide(n) {
    let newIndex = currentSlide + n;


    if (newIndex < 0) {
        newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
        newIndex = 0;
    }

    currentSlide = newIndex;
    showSlide(currentSlide);
}

function gotoSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

setInterval(() => {
    changeSlide(1);
}, 5000);
