function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}
// 1. Kelvin to Fahrenheit Conversion
let kelvinTemp = 300;
let fahrenheitTemp = kelvinToFahrenheit(kelvinTemp);

console.log(fahrenheitTemp); 

