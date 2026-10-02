onload = () =>{
    document.body.classList.remove("container");
};

const cartaButton = document.querySelector(".carta-button");
const cartaDialog = document.querySelector(".carta-dialog");
const closeCartaButton = document.querySelector(".carta-dialog__close");

cartaButton.addEventListener("click", () => cartaDialog.showModal());
closeCartaButton.addEventListener("click", () => cartaDialog.close());
cartaDialog.addEventListener("click", (event) => {
    if (event.target === cartaDialog) {
        cartaDialog.close();
    }
});