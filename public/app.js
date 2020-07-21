document.addEventListener("click", eventHandler);

function eventHandler(event) {
  event.preventDefault();
  // console.log(event);
  switch (event.target.id) {
    case "spotify-container":
      spotifyManager();
      break;
    case "register-btn":
      registerManager();
      break;
    case "sign-up-btn":
      appManager();
      break;
    case "sign-in-btn":
      appManager();
      break;
    default:
      break;
  }
}

function spotifyManager() {
  console.log("poo")
}

function registerManager() {
  window.location.pathname = "/register"
}

function appManager() {
  window.location.pathname = "/app"
}