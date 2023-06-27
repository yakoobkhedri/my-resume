// دکمه های چپ و راست
let slides=document.querySelectorAll('.animated-section');
let navlinks =Array.from(document.getElementsByClassName('menuIcon'))
let navlinks2 =Array.from(document.getElementsByClassName('menuIcon2'))
let currentSlide = 0;

document.getElementById("slideNext").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("slidePrev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});
function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    navlinks2[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    navlinks2[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}
document.querySelectorAll('.menuIcon').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})
document.querySelectorAll('.menuIcon2').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})
// آیکون همبرگری
let hamIcon = document.getElementById('hamIcon');
let header = document.querySelector('header');

hamIcon.addEventListener('click', function () {
    hamIcon.classList.toggle('active');
    header.classList.toggle('open');
})
// اسلایدر مشتریان
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        576: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
// نمونه کارها
var portfolio = $('#portfolio-container').isotope({
    originLeft: false
});
$('#portfolio-filter span').on('click', function () {
    $("#portfolio-filter span").removeClass('active');
    $(this).addClass('active');
    portfolio.isotope({
        filter: $(this).data('filter')
    });
});

// فرم تماس
let focusArea = Array.from(document.getElementsByClassName('focus-area'));
let placeholderLabel = Array.from(document.getElementsByClassName('placeholder-label'));
let placeholderLabel2 = Array.from(document.getElementsByClassName('placeholder-label2'));

focusArea.forEach((item) => {
    item.addEventListener('click', function () {
        placeholderLabel.forEach((items) => { items.classList.remove('active') });
        placeholderLabel2.forEach((items) => { items.classList.remove('active') });
        item.previousElementSibling.classList.toggle('active');
    })
});
document.addEventListener('click', function (event) {
    if (!event.target.closest('.focus-area')) {
        placeholderLabel.forEach((items) => { items.classList.remove('active') });
        placeholderLabel2.forEach((items) => { items.classList.remove('active') });
    }
    focusArea.forEach((item) => {
        if (!item.value == "") {
            item.parentElement.querySelector('span').classList.add('active');
        }
    })
});

focusArea.forEach((item) => {
    if (!item.value == "") {
        item.parentElement.querySelector('span').classList.add('active');
    }
})
