const container = document.querySelector('.container');
const slides = document.querySelectorAll('.container__slide');
const previousBtn = document.querySelector('.buttons__previous');
const nextBtn = document.querySelector('.buttons__next');
const pauseBtn = document.querySelector('.buttons__pause');
let counter = 0;


function slider (e) {
    if (e.currentTarget === nextBtn) {
        if ( counter < slides.length - 1) {
            counter++;
        }
        else {
            counter = 0;
        }
    }
    else {
        if (counter > 0) {
            counter--;
        }
        else {
            counter = slides.length - 1;
        }
    }
    slides.forEach((slide,i) => {
        if ( i === counter ) {
            slide.classList.add('container__slide-active');
            slide.classList.remove('container__slide-previous');
            slide.classList.remove('container__slide-next');
        }
        else if ( i < counter ) {
            slide.classList.remove('container__slide-active');
            slide.classList.add('container__slide-previous');
            slide.classList.remove('container__slide-next');
        }
        else {
            slide.classList.remove('container__slide-active');
            slide.classList.remove('container__slide-previous');
            slide.classList.add('container__slide-next');
        }
    });
}

nextBtn.addEventListener('click', slider);
previousBtn.addEventListener('click', slider);

// const interval = 3000;
// let indexInterval = 1;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';

// container.append(firstClone);
// container.prepend(lastClone);

// const slideWidth = slides[indexInterval].clientWidth;



// const startSlide = () => {
//     slideId = setInterval(() => {
//         indexInterval++;
//         container.style.transform = `translateX(${-slideWidth * indexInterval}px)`;
//         container.style.transition = '.7s';
//     },interval);
// }

// container.addEventListener('transitionend', () => {
//     slides = document.querySelectorAll('.container__slide');
//     if (slides[indexInterval].id === firstClone.id) {
//         container.style.transition = 'none';
//         indexInterval = 1;
//         container.style.transform = `translateX(${-slideWidth * index}px)`;
//     }
// });

// wrapper.addEventListener('mouseenter', () => {
//     clearInterval(slideId);
// });

// startSlide();