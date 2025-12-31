/* =====================================
   STEP TOGGLE FUNCTION
   ===================================== */

function toggleStep(clickedHeader) {

    // Get all step contents and icons
    const allContents = document.querySelectorAll(".step-content");
    const allIcons = document.querySelectorAll(".step-header span");

    // Close all steps first
    allContents.forEach(content => {
        content.style.display = "none";
    });

    allIcons.forEach(icon => {
        icon.textContent = "+";
    });

    // Open the clicked step
    const content = clickedHeader.nextElementSibling;
    const icon = clickedHeader.querySelector("span");

    if (content.style.display !== "block") {
        content.style.display = "block";
        icon.textContent = "−";
    }
}
