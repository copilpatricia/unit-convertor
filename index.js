/*
1 meter = 3.280 feets
1 feet = 0.3048 meters
1 liter = 0.264 gallons
1 gallon = 3.785 liters
1 kilogram = 2.204 pound
1 pound = 0.453 kilos
*/

let pLength = document.getElementById("p-length");
let pVolume = document.getElementById("p-volume");
let pMass = document.getElementById("p-mass");
let inputVal = document.getElementById("input-val");
let buttonConvert = document.getElementById("btn-convert");

buttonConvert.addEventListener("click", function () {
  let userVal = document.getElementById("input-val").value;

  let convertMeters = userVal * 3.28;
  let convertFeet = userVal * 0.3048;
  pLength.textContent = `
    ${userVal} meters = ${convertMeters.toFixed(3)} feets |
    ${userVal} feet = ${convertFeet.toFixed(3)} meters
    `;

  let convertLiters = userVal * 0.264;
  let convertGallons = userVal * 3.785;
  pVolume.textContent = `
    ${userVal} liters = ${convertLiters.toFixed(3)} gallons |
    ${userVal} gallons = ${convertGallons.toFixed(3)} liters
    `;

  let convertKilo = userVal * 2.204;
  let convertPounds = userVal * 0.453;
  pMass.textContent = `
    ${userVal} kilograms = ${convertKilo.toFixed(3)} pounds |
    ${userVal} pounds = ${convertPounds.toFixed(3)} kilograms
    `;
});
