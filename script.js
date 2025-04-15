// Load theme on page load
window.onload = () => {
    const savedTheme = localStorage.getItem("user-theme");
    if (savedTheme) {
      document.body.classList.add(`${savedTheme}-theme`);
    }
  };
  
  // Set a new theme and store in localStorage
  function setTheme(theme) {
    // Remove any existing theme classes
    document.body.classList.remove("light-theme", "dark-theme", "colorful-theme");
  
    // Add the selected theme class
    document.body.classList.add(`${theme}-theme`);
  
    // Save to localStorage
    localStorage.setItem("user-theme", theme);
  }
  
  // Trigger animation via JavaScript
  function triggerAnimation() {
    const img = document.getElementById("funImage");
  
    // Add the animation class
    img.classList.add("bounce");
  
    // Remove the class after animation ends (so it can re-trigger next time)
    setTimeout(() => {
      img.classList.remove("bounce");
    }, 700);
  }
  