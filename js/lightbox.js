const LBOXES = document.querySelectorAll(".lboxes img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close")
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");
var DESCRIPTION = document.querySelector(".popup__description");

let currentImgIndex;

const showNextImg = () => {
    if(currentImgIndex === LBOXES.length - 1){
        currentImgIndex = 0;
    } else{
        currentImgIndex++;
    }
    POPUP_IMG.src = LBOXES[currentImgIndex].src;
    DESCRIPTION.innerHTML = LBOXES[currentImgIndex].alt;
}

const showPreviousImg = () => {
    if(currentImgIndex === 0){
        currentImgIndex = LBOXES.length - 1;
    } else{
        currentImgIndex--;
    }
    POPUP_IMG.src = LBOXES[currentImgIndex].src;
    DESCRIPTION.innerHTML = LBOXES[currentImgIndex].alt;
}

const closePopup = () => {
    POPUP.classList.add("fade-out");
    setTimeout(() => {
        POPUP.classList.add("hidden");
        POPUP.classList.remove("fade-out");
    }, 300);
    
}

LBOXES.forEach((lbox, index) => {
    lbox.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
        DESCRIPTION.innerHTML = e.target.alt;
        currentImgIndex = index;
    })
});



POPUP_CLOSE.addEventListener("click", closePopup);

ARROW_RIGHT.addEventListener("click", showNextImg);

ARROW_LEFT.addEventListener("click", showPreviousImg);


document.addEventListener("keydown", (e) => {
    if(!POPUP.classList.contains("hidden")){
        if(e.code === "ArrowRight" || e.keyCode === 39){
            showNextImg();
        }
        if(e.code === "ArrowLeft" || e.keyCode === 37){
            showPreviousImg();
        }
        if(e.code === "Escape" || e.keyCode === 27){
            closePopup();
        }
    }
});

POPUP.addEventListener("click", (e) =>{
    if(e.target === POPUP){
        closePopup();
    }
});

