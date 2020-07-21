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
  //it knows who rendered it
  fetch("/song")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function registerManager() {
  window.location.pathname = "/register";
}

function appManager() {
  window.location.pathname = "/app";
}
//3 part question 1)

//2)

//3)
