// This is where we will program functionality for our html elements
document.addEventListener("click", eventHandler);

function eventHandler(event) {
  event.preventDefault();
  console.log(event);
  if (event.target.id === "spotify-container") {
    // do something here spotify
  }
}

function spotifyManager() {}
