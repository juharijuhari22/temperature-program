
const textBox = document.getElementById('textBox');
const celciusToFahrenheit = document.getElementById('celciusToFahrenheit');
const celciusToKelvin = document.getElementById("celciusToKelvin");
const fahrenheitToCelcius = document.getElementById('fahrenheitToCelcius');
const fahrenheitToKelvin = document.getElementById("fahrenheitToKelvin");
const kelvinToFahrenheit = document.getElementById("kelvinToFahrenheit");
const kelvinToCelcius = document.getElementById("kelvinToCelcius");
const result = document.getElementById('result');
let temp;

function convert(){
    if (celciusToFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = (temp * 9) / 5 + 32;
        result.textContent = temp.toFixed(1) + " °F";
    } else if (celciusToKelvin.checked) {
        temp = Number(textBox.value);
        temp = temp + 273.15;
        result.textContent = temp.toFixed(2) + " K";
    } else if (fahrenheitToCelcius.checked) {
        temp = Number(textBox.value);
        temp = (5 / 9) * (temp - 32);
        result.textContent = temp.toFixed(1) + " °C";
    } else if (fahrenheitToKelvin.checked) {
        temp = Number(textBox.value);
        temp = ((temp - 32) * 5) / 9 + 273.15;
        result.textContent = temp.toFixed(2) + " K";
    } else if (kelvinToCelcius.checked) {
        temp = Number(textBox.value);
        temp = temp - 273.15;
        result.textContent = temp.toFixed(1) + " °C";
    } else if (kelvinToFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = ((temp - 273.15) * 9) / 5 + 32;
        result.textContent = temp.toFixed(1) + " °F";
    }else {
        result.textContent = "Please Select a Temperature!";
    }
    result.style.display = "block";
}



