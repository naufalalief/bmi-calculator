const form = document.querySelector("form");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const maleInput = document.getElementById("male");
const femaleInput = document.getElementById("female");
const bmiResult = document.getElementById("bmi");
const statusResult = document.getElementById("status");
const resultSection = document.querySelector(".result");

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;
  const gender = maleInput.checked ? "male" : "female";

  if (weight && height && gender) {
    const bmi = weight / (height * height);
    bmiResult.textContent = bmi.toFixed(2);

    if (gender === "male") {
      if (bmi < 18.5) {
        statusResult.textContent = "Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        statusResult.textContent = "Normal";
      } else if (bmi >= 25 && bmi < 30) {
        statusResult.textContent = "Overweight";
      } else {
        statusResult.textContent = "Obese";
      }
    } else if (gender === "female") {
      if (bmi < 18.5) {
        statusResult.textContent = "Underweight";
      } else if (bmi >= 18.5 && bmi < 24) {
        statusResult.textContent = "Normal";
      } else if (bmi >= 24 && bmi < 30) {
        statusResult.textContent = "Overweight";
      } else {
        statusResult.textContent = "Obese";
      }
    }

    if (
      weightInput.value &&
      heightInput.value &&
      (maleInput.checked || femaleInput.checked)
    ) {
      resultSection.style.display = "block";
    } else {
      resultSection.style.display = "none";
    }
  } else {
    bmiResult.textContent = "";
    statusResult.textContent = "";
    resultSection.style.display = "none";
  }
}

weightInput.addEventListener("input", calculateBMI);
heightInput.addEventListener("input", calculateBMI);
maleInput.addEventListener("change", calculateBMI);
femaleInput.addEventListener("change", calculateBMI);
