/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
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

    temporizador=setTimeout(Responder,4000);
	
}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta=parseFloat(document.getElementById("Respuesta").value);
    
    if (respuesta==respM)
    {
        alert("CORRECTO, la respuesta es: " +respM+ ".");
    }
    else if (respuesta!=respM)
    {
        alert("Incorrecto.");
    }
    else
    {
        temporizador=setTimeout(Responder,4000);
        alert("Sin tiempo!!");
    }
	


}//FIN DE LA FUNCIÓN
