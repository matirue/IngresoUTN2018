function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var sumaNeg=0;
	var sumaPos=0;
	var cantPos=0;
	var cantNeg=0;
	var cantCeros=0;
	var cantPar=0;
	var promPos;
	var promNeg;
	var diferencia;
	var num;
	var respuesta;

	do
	{
		num=parseInt(prompt("Ingrese un numero: "));
		contador++;
		
		if(num<0)
		{
			sumaNeg-=num;
			cantNeg++;
		}

		else if (num>0)
		{
			sumaPos+=num;
			cantPos++;
		}

		else
		{
			cantCeros++;
		}

		if(num%2==0)
		{
			cantPar++;
		}
		


	  
	respuesta=prompt("¿Desea continuar? ");
	}while(respuesta=='s')

	promNeg=sumaNeg/cantNeg;

	promPos=sumaPos/cantPos;

	diferencia=sumaPos-sumaNeg;

	

	document.write("1-La suma de los negativos es de " +sumaNeg+ "<br/>");
	document.write("2-La suma de los positivos es de " +sumaPos+ "<br/>");
	document.write("3-La cantidad de positivos es de " +cantPos+ "<br/>");
	document.write("4-La cantidad de numeros negativos es de " +cantNeg+ "<br/>");
	document.write("5-La cantidad de ceros es de " +cantCeros+ "<br/>");
	document.write("6-La cantidad de numeros pares es de " +cantPar+ "<br/>");
	document.write("7-El promedio de los positivos es de " +promPos+ "<br/>");
	document.write("8-El promedio de los negativos es de " +promNeg+ "<br/>");
	document.write("9-La diferencias entre positivos y negativos es de " +diferencia+ "<br/>");





}//FIN DE LA FUNCIÓN