/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numSecreto; 
var contadorIntentos=0;
var num;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	
	
	numSecreto=Math.floor(Math.random()*100)+1;
//console.log(numSecreto);
}

function verificar()
{
	contadorIntentos++;
	num=parseFloat(document.getElementById("numero").value);
	document.getElementById("intentos").value=contadorIntentos;
   
	if(num==numSecreto)
	{ 
	  switch(contadorIntentos)
	   {
		case 1:
		  alert("GANO en " +contadorIntentos+ " intento... ¿Usted es un Psíquico?")
		  break;
		
		case 2:
		  alert("GANO en " +contadorIntentos+ " veces, EXCELENTE PERCEPCIÓN.")
		  break;
		  
		case 3:
		  alert("GANO en " +contadorIntentos+ " veces, esto es suerte.")
		  break;

		case 4:
		  alert("GANO en " +contadorIntentos+ " veces, excelente técnica.")
		  break;
		  
		case 5:
		  alert("GANO en " +contadorIntentos+ " veces, usted está en la media.")
		  break;
		  
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		  alert("GANO en " +contadorIntentos+ " veces, falta técnica.")
		  break;
		  
		default:
		  alert("GANO en " +contadorIntentos+ " veces... afortunado en el amor!!")
		  break;
	   }
	
	}
	
	else if(num<numSecreto)
	{
		alert("Falta...");
	}
	else
	{
		alert("Te pasaste...");
	}


	
	

}