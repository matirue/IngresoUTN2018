/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var tempF=parseFloat(document.getElementById("Temperatura").value);
    var tempC;

    tempC=((tempF-32)/1.8).toFixed(2);

    console.log(tempF+ "°F son " +tempC+ "°C.");
}

function CentigradosFahrenheit () 
{ 
    var tempC=parseFloat(document.getElementById("Temperatura").value);
    var tempF;

    tempF=((tempC*1.8)+32).toFixed(2);

    console.log(tempC+ "°C son " +tempF+ "°F.");
	
}
