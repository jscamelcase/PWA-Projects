/* function to show live updates */

function announceMessage(message, ariaRegion) {
  ariaRegion.textContent = "";
  ariaRegion.textContent = message;
}

/* function to show screens */
function showScreen(targetId, screens, ariaRegion) {
  screens.forEach((screen) => {
    screen.hidden = true;
    screen.setAttribute("aria-hidden", "true");
  });

  const targetScreen = document.getElementById(targetId);
  if (targetScreen) {
    targetScreen.hidden = false;
    targetScreen.setAttribute("aria-hidden", "false");
    targetScreen.focus(); //set focus for assitive technologies

    // Announce the screen change
    announceMessage(
      `${targetScreen.querySelector("h2").textContent} screen loaded`,
      ariaRegion
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const header = document.querySelector(".header-section");
  const navSection = document.querySelector(".nav-bar");
  const screens = document.querySelectorAll(".screen");
  const ariaRegion = document.getElementById("live-region");
  console.log(screens);
  const navButtons = document.querySelectorAll(".nav-btns");
  console.log(navButtons);

  // Show the splash screen, then transiton to the home
  setTimeout(() => {
    splash.classList.add("remove-section");
    splash.hidden = "true";
    header.classList.add("add-section");
    navSection.classList.add("add-section");
    showScreen("home", screens, ariaRegion);
    screens.forEach((screen) => {
      screen.classList.add("add-section");
    });
    announceMessage(
      `Splash screen completed. Welcome to the home screen.`,
      ariaRegion
    );
  }, 1000);

  document.addEventListener("click", (e) => {
    if (e.target.dataset.target) {
      showScreen(e.target.dataset.target, screens, ariaRegion);
    }
  });
});
