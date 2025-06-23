// Toggle dark/light mode functionality
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Dark Mode";
  // Style the button (optional)
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "1rem";
  toggleButton.style.right = "1rem";
  toggleButton.style.zIndex = "1000";
  
  document.body.prepend(toggleButton);

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
