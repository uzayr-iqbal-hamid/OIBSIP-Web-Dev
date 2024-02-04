function celciusToFahrenheit(celcius){
    return (celcius * 9/5) + 32;
}

function fahrenheitToCelcius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}


function convert(){
    var degrees = document.getElementById('degree').value;
    var inputType = document.getElementById('type').value;
    var output = document.getElementById('result');

    var result;
    if(inputType === 'celcius'){
        result = celciusToFahrenheit(degrees).toFixed(2) + " °F";
    }else{
        result = fahrenheitToCelcius(degrees).toFixed(2) + " °C";
    }

    output.textContent = result;
}
