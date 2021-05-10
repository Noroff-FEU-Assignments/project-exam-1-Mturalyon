const equipmentModal = document.querySelector(".modal-container");
const modalImage = document.querySelector(".modal-container img")
const modalActivator = document.querySelector(".equipment-info img");

console.log(modalImage, equipmentModal, modalActivator);


modalActivator.addEventListener('click', () => { //display flex on modal when img is clicked
    equipmentModal.style.display = "flex";
});

equipmentModal.addEventListener('click', () => { //when modal container is clicked the display none
    equipmentModal.style.display = "none";
});

modalImage.addEventListener('click', () => { //preventing the said effect to happen when modal image is clicked
    event.stopPropagation();
});