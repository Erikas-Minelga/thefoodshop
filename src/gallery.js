const galleryControls = document.querySelectorAll(".gallery-controls > button")
const galleryItems = document.querySelector(".gallery-items");

let counter = 0;
let previous = 0;

galleryControls.forEach(button => {
    button.addEventListener("click", e => {
        e.preventDefault();

        counter = parseInt(button.dataset.index);

        //Make the active control have solid fill
        button.children[0].classList.remove("fa-regular");
        button.children[0].classList.add("fa-solid");
        
        //And remove the solid background from the previously clicked button
        galleryControls[previous].children[0].classList.remove("fa-solid");
        galleryControls[previous].children[0].classList.add("fa-regular");

        previous = counter;

        galleryItems.style.transform = `translateX(calc(-25% * ${counter}))`;
    });
});