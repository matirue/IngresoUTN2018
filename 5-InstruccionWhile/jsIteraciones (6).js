function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var num;

	while(contador <5)
	{
		num=parseInt(prompt("Ingrese un numero: "));
		acumulador+=num;
		contador+=1;

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN