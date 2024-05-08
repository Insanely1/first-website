document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".item a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior

            const targetId = this.getAttribute("href"); // Get the target section's ID from the link's href attribute
            const targetSection = document.querySelector(targetId); // Find the target section by its ID

            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
