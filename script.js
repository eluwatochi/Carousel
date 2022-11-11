const slideImage = document.querySelectorAll(".slideimage");
const slideContainer = document.querySelector(".slidecontainer");
const nextBtn = document.querySelector(".nxtbtn");
const prevBtn = document.querySelector(".prvbtn");
const navDot = document.querySelector(".navdot");

let numOfImg = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;


function init() {
    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });

    slideImage[0].classList.add("active");
    createNavDots();
}


init();


function createNavDots() {
    for (let i = 0; i < numOfImg; i++) {
        const dot = document.createElement("div");
        dot.classList.add("singledot");
        navDot.appendChild(dot);

        dot.addEventListener("click", () => {
            goToSlide(i);

        })
    }

    navDot.children[0].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    if(currentSlide >=numOfImg - 1) {
        goToSlide(0);
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);

});

prevBtn.addEventListener("click", () => {
    if(currentSlide <=0) {
        goToSlide(numOfImg - 1);
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);

});

function goToSlide(slideNumber) {
    slideContainer.style.transform = "translateX(-" + slideWidth *slideNumber +"px)"
    
    currentSlide = slideNumber;
    setActiveClass();
}

function setActiveClass() {
    let currentActive = document.querySelector(".slideimage.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    let currentDot = document.querySelector(".singledot.active");
    currentDot.classList.remove("active");
    navDot.children[currentSlide].classList.add("active");
}


