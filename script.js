const modeButton = document.querySelector(".mode_btn");

const bodyElement = document.querySelector("body");
const convertorElement = document.getElementById("convertor_value");

const convertorButton = document.querySelector(".convertor_btn");

const wrapperElement = document.querySelector(".wrapper");

const lengthElement = document.querySelector(".length");
const lengthTitleElement = document.querySelector(".length_title");
const lengthInfoElement = document.querySelector(".length_info");

const volumeElement = document.querySelector(".volume");
const volumeTitleElement = document.querySelector(".volume_title");
const volumeInfoElement = document.querySelector(".volume_info");

const massElement = document.querySelector(".mass");
const massTitleElement = document.querySelector(".mass_title");
const massInfoElement = document.querySelector(".mass_info");

// Swap between the modes______________________________________________________

function toggleMode() {
  modeButton.classList.toggle("lightBg");

  wrapperElement.classList.toggle("wrapperDark");
  bodyElement.classList.toggle("darkBody");
  convertorElement.classList.toggle("darkText");

  lengthElement.classList.toggle("darkInfo");
  lengthTitleElement.classList.toggle("darkInfo");
  lengthInfoElement.classList.toggle("darkInfoPara");
  lengthElement.classList.toggle("lightShadow");

  volumeElement.classList.toggle("darkInfo");
  volumeTitleElement.classList.toggle("darkInfo");
  volumeInfoElement.classList.toggle("darkInfoPara");
  volumeElement.classList.toggle("lightShadow");

  massElement.classList.toggle("darkInfo");
  massTitleElement.classList.toggle("darkInfo");
  massInfoElement.classList.toggle("darkInfoPara");
  massElement.classList.toggle("lightShadow");
}

function toggleButtonText() {
  const swapBtn = document.querySelector(".mode_btn");
  if (swapBtn.innerHTML === "Dark Mode") {
    swapBtn.innerHTML = "Light Mode";
  } else {
    swapBtn.innerHTML = "Dark Mode";
  }
}

modeButton.addEventListener("click", toggleMode);
modeButton.addEventListener("click", toggleButtonText);

// Set-up the functionality_______________________________________________________

const displayMeters = document.getElementById("display_meters");

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

convertorButton.addEventListener("click", function () {
  if (convertorElement.value.length > 0 && convertorElement.value > 0) {
    let feets = 3.281 * convertorElement.value;
    let meters = convertorElement.value / 3.281;

    let gallon = convertorElement.value * 0.264;
    let liters = convertorElement.value / 0.264;

    let pound = convertorElement.value * 2.204;
    let kilograms = convertorElement.value / 2.204;

    lengthInfoElement.textContent = `${
      convertorElement.value
    } meters = ${feets.toFixed(3)} feet | ${
      convertorElement.value
    } feet = ${meters.toFixed(3)} meters`;
    volumeInfoElement.textContent = `${
      convertorElement.value
    } liters = ${gallon.toFixed(3)} gallons | ${
      convertorElement.value
    } gallons = ${liters.toFixed(3)} liters`;
    massInfoElement.textContent = `${
      convertorElement.value
    } kilos = ${pound.toFixed(3)} pounds | ${
      convertorElement.value
    } pounds = ${kilograms.toFixed(3)} kilos`;
  }

  lengthInfoElement.style.display = "block";
  volumeInfoElement.style.display = "block";
  massInfoElement.style.display = "block";
});
