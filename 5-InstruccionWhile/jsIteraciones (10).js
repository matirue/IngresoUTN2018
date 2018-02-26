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
		else if(num>0)
		{
			sumaPos+=num;
			cantPos++;
		}
		else
		{
			cantCeros++;
		}

		if (num%2==0)
		{
			cantPar++;
		}

		
	respuesta=prompt("¿Desea continuar? ");
	}while (respuesta=='s')

	promNeg=sumaNeg/cantNeg;

	promPos=sumaPos/cantPos;

	diferencia=sumaPos-sumaNeg;

	document.write("1-Suma de los negativos. " +sumaNeg+ "<br/>");
	document.write("2-Suma de los positivos. " +sumaPos+ "<br/>");
	document.write("3-Cantidad de positivos. " +cantPos+ "<br/>");
	document.write("4-Cantidad de negativos. " +cantNeg+ "<br/>");
	document.write("5-Cantidad de ceros.  " +cantCeros+ "<br/>");
	document.write("6-Cantidad de números pares. " +cantPar+ "<br/>");
	document.write("7-Promedio de positivos. " +promPos+ "<br/>");
	document.write("8-Promedios de negativos. " +promNeg+ "<br/>");
	document.write("Diferencia entre positivos y negativos, (positvos-negativos). " +diferencia+ "<br/>");






}//FIN DE LA FUNCIÓN