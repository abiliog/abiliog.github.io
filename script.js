document.addEventListener("DOMContentLoaded", () => {
    const book = document.querySelector(".book");
    const pages = document.querySelectorAll(".page");
    let currentPage = 0;
    let isDragging = false;
    let startX = 0;

    function flipPage(next) {
        if (next && currentPage < pages.length - 1) {
            currentPage++;
        } else if (!next && currentPage > 0) {
            currentPage--;
        }
        const angle = currentPage * -180;
        book.style.transform = `rotateY(${angle}deg)`;
    }

    book.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
    });

    book.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        const threshold = 50;
        if (deltaX > threshold) {
            flipPage(false);
            isDragging = false;
        } else if (deltaX < -threshold) {
            flipPage(true);
            isDragging = false;
        }
    });

    book.addEventListener("mouseup", () => {
        isDragging = false;
    });

    book.addEventListener("mouseleave", () => {
        isDragging = false;
    });
});
