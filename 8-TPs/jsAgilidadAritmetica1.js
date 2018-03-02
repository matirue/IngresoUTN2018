/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numR1;
var numR2;
var operador;
var respM;

function comenzar()
{
    numR1=Math.floor(Math.random()*100)+1;
    numR2=Math.floor(Math.random()*100)+1;

    document.getElementById("PrimerNumero").value=numR1;
    document.getElementById("SegundoNumero").value=numR2;

    operador=Math.floor(Math.random()*4)+1;

    switch(operador)
    {
        case 1:
        respM=numR1+numR2;
        document.getElementById("Operador").value="Suma";
        break;

        case 2:
        respM=numR1-numR2;
        document.getElementById("Operador").value="Resta";
        break;

        case 3:
        respM=numR1*numR2;
        document.getElementById("Operador").value="Multiplicacion";
        break;

        case 4:
        respM=(numR1/numR2).toFixed(2);
        document.getElementById("Operador").value="Division";
        break;
        
    }


	

}//FIN DE LA FUNCIÓN
function Responder()
{
    respuesta=parseFloat(document.getElementById("Respuesta").value);
    
    if (respuesta==respM)
    {
        alert("CORRECTO, la respuesta es: " +respM+ ".");
    }
    else
    {
        alert("Incorrecto.");
    }
	

}//FIN DE LA FUNCIÓN
