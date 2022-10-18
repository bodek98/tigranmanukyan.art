var loader = document.querySelector(".lds-dual-ring");

window.addEventListener("load", vanish);

function vanish(){
    loader.classList.add("disappear");
    document.body.style.overflow = "unset";
}