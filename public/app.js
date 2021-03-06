// Listen for clicks on the whole document
document.addEventListener("click", eventHandler);

// Variables for html elements
const moodInput = document.getElementById("mood-input");
const moodBackground = document.getElementById("mood-background");
const moodRoomContainer = document.getElementById("mood-room-container");
const desktopTextarea = document.getElementById("desktop-text-area");
const spotifyPlayer = document.getElementById("spotify-player");
const attributeStatus = document.getElementById("attribute-status");

// Variables for navigating style collections
let propsIndex = 0;
let textFontColorIndex = 0;
let textBgColorIndex = 0;
let hueRotateIndex = 0;
let brightnessIndex = 7;

// Collections of style presets for user customization options
const colorValues = [
  "rgb(255, 255, 255)",
  "rgb(0, 0, 0)",
  "rgb(75, 75, 75)",
  "rgb(228, 214, 95)",
  "rgb(141, 133, 59)",
  "rgb(216, 166, 109)",
  "rgb(107, 82, 53)",
  "rgb(174, 214, 109)",
  "rgb(93, 116, 58)",
  "rgb(113, 207, 214)",
  "rgb(60, 112, 116)",
  "rgb(131, 111, 219)",
  "rgb(76, 65, 126)",
  "rgb(209, 116, 218",
  "rgb(111, 79, 114)",
  "rgb(218, 111, 111",
  "rgb(126, 60, 60)",
];
const propsArray = [
  "brightness",
  "backgroundColor",
  "textareaFontColor",
  "textareaBackgroundColor",
];
const brightnessValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const hueRotateValues = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324];

// Click event handler that delegates functionality based on clicked item
function eventHandler(event) {
  event.preventDefault();

  switch (event.target.id) {
    case "search-btn":
      spotifyManager();
      break;
    case "register-btn":
      registerManager();
      break;
    case "sign-up-btn":
      appManager(event);
      break;
    case "sign-in-btn":
      navigateToApp();
      break;
    case "back-to-login-btn":
      navigateToLoginPage();
      break;
    case "decrement-btn":
      switch (propsArray[propsIndex]) {
        case "brightness":
          changeRoomBrightness("dec");
          break;
        case "backgroundColor":
          changeBackgroundHueRotation("dec");
          break;
        case "textareaBackgroundColor":
          changeTextBgColor("dec");
          break;
        case "textareaFontColor":
          changeTextFontColor("dec");
          break;
      }
      break;
    case "apple-btn":
      changeProperty();
      break;
    case "increment-btn":
      switch (propsArray[propsIndex]) {
        case "brightness":
          changeRoomBrightness("inc");
          break;
        case "backgroundColor":
          changeBackgroundHueRotation("inc");
          break;
        case "textareaBackgroundColor":
          changeTextBgColor("inc");
          break;
        case "textareaFontColor":
          changeTextFontColor("inc");
          break;
      }

      break;
    default:
      break;
  }
}

// Routing callbacks for click events
function appManager() {
  window.location.pathname = "/app";
}

function registerManager() {
  window.location.pathname = "/register";
}

function spotifyManager() {
  fetch(`/song/${moodInput.value}`)
    .then((response) => response.json())
    .then((data) => updateSpotifyPlayer(data));
}

function updateSpotifyPlayer(data) {
  let url = data.playlists.items[0].external_urls.spotify;
  let result = url.slice(0, 24) + "/embed" + url.slice(24, url.length);
  spotifyPlayer.setAttribute("src", result);
}

// Style modification callbacks for click events
function registerManager() {
  window.location.pathname = "/register";
}

function navigateToApp() {
  window.location.pathname = "/app";
}

function navigateToLoginPage() {
  console.log("navigate to login page working");
  window.location.pathname = "/login";
}

function appManager(e) {
  e.preventDefault();
  let name = document.getElementById("register-name");
  let email = document.getElementById("register-email");
  let password = document.getElementById("register-password");

  if (name.value === "") {
    alert("name cannot be blank");
  }

  if (email.value === "") {
    alert("email cannot be blank");
  }

  if (password.value === "") {
    console.log("password cannot be blank");
  }

  // window.location.pathname = "/app";
}

function changeProperty() {
  if (propsIndex < propsArray.length - 1) {
    propsIndex++;
  } else {
    propsIndex = 0;
  }
  attributeStatus.textContent = `Modifying ${propsArray[propsIndex]}...`;
  attributeStatus.style.visibility = "visible";
  setTimeout(() => {
    attributeStatus.style.visibility = "hidden";
  }, 1000);
}

function changeTextBgColor(direction) {
  if (direction === "inc") {
    if (textBgColorIndex < colorValues.length - 1) {
      textBgColorIndex++;
    } else {
      textBgColorIndex = 0;
    }
    setTextBgColor(colorValues[textBgColorIndex]);
  } else {
    if (textBgColorIndex > 0) {
      textBgColorIndex--;
    } else {
      textBgColorIndex = colorValues.length - 1;
    }
    setTextBgColor(colorValues[textBgColorIndex]);
  }
}

function changeTextFontColor(direction) {
  if (direction === "inc") {
    if (textFontColorIndex < colorValues.length - 1) {
      textFontColorIndex++;
    } else {
      textFontColorIndex = 0;
    }
    setTextFontColor(colorValues[textFontColorIndex]);
  } else {
    if (textFontColorIndex > 0) {
      textFontColorIndex--;
    } else {
      textFontColorIndex = colorValues.length - 1;
    }
    setTextFontColor(colorValues[textFontColorIndex]);
  }
}

function changeBackgroundHueRotation(direction) {
  if (direction === "inc") {
    if (hueRotateIndex < hueRotateValues.length - 1) {
      hueRotateIndex++;
    } else {
      hueRotateIndex = 0;
    }
    setBackgroundHueRotation(hueRotateValues[hueRotateIndex]);
  } else {
    if (hueRotateIndex > 0) {
      hueRotateIndex--;
    } else {
      hueRotateIndex = hueRotateValues.length - 1;
    }
    setBackgroundHueRotation(hueRotateValues[hueRotateIndex]);
  }
}

function changeRoomBrightness(direction) {
  if (direction === "inc") {
    if (brightnessIndex < brightnessValues.length - 1) {
      brightnessIndex++;
    } else {
      brightnessIndex = 0;
    }
    setRoomBrightness(brightnessValues[brightnessIndex]);
  } else {
    if (brightnessIndex > 0) {
      brightnessIndex--;
    } else {
      brightnessIndex = brightnessValues.length - 1;
    }
    setRoomBrightness(brightnessValues[brightnessIndex]);
  }
}

// Property value setters
function setTextBgColor(value) {
  desktopTextarea.style.backgroundColor = value;
}

function setTextFontColor(value) {
  desktopTextarea.style.color = value;
  attributeStatus.style.color = value;
}

function setBackgroundHueRotation(value) {
  moodBackground.style.filter = `hue-rotate(${value}deg)`;
}

function setRoomBrightness(value) {
  moodRoomContainer.style.filter = `brightness(${value}%)`;
}
