document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggler-skills");
  const skillsSection = document.getElementById("skills");

  toggleButton.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block";
    } else {
      skillsSection.style.display = "none";
    }
  });
});
