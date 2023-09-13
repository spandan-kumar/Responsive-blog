
const readMoreLinks = document.querySelectorAll(".read-more");
readMoreLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const post = this.closest(".post");
        const fullContent = post.querySelector(".full-content");
        if (fullContent.style.display === "none" || !fullContent.style.display) {
            fullContent.style.display = "block";
            this.textContent = "Read less";
        } else {
            fullContent.style.display = "none";
            this.textContent = "Read more";
        }
    });
});

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});

if (localStorage.getItem("darkMode") === "enabled") {
    darkModeToggle.checked = true;
    body.classList.add("dark-mode");
} else {
    darkModeToggle.checked = false;
    body.classList.remove("dark-mode");
}
