const viewMoreBtn = document.querySelector(".view-more-btn");
const viewMoreContainer = document.querySelector(".view-more-container");

viewMoreBtn.addEventListener('click', () => {
    viewMoreContainer.classList.toggle("display");

    if (viewMoreBtn.innerHTML === "View More") {
        viewMoreBtn.innerHTML = "View Less";
    } else {
        viewMoreBtn.innerHTML = "View More";
    };
});
