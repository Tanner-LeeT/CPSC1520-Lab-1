const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const popUpDialog = document.querySelector("#dialog-pop-up");

openModalButton.addEventListener("click", showModal);

closeModalButton.addEventListener("click", closeModal);

function showModal(e) {
    popUpDialog.showModal();
}

function closeModal(e){
    popUpDialog.close();
}
