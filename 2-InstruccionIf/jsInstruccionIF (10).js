function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var nota=Math.floor(Math.random()*10)+1;

if(nota <4)
	{
		alert("Su nota es un " +nota+ ", vamos la proxima se puede.");
	}
	else if (nota <9)
	{
		alert("Su nota es un " +nota+ ", APROBO.");
	}
	else
	{
		alert("Su nota es un " +nota+ ", EXCELENTE.");
	}
}//FIN DE LA FUNCIÓN