function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s';
	//defino dos variables mas//
	var promedio;
	var num;

	while(respuesta=='s')
	{
		num=parseInt(prompt("Ingrese un numero: "));
		acumulador+=num;
		contador+=1;
		respuesta=prompt("¿Desea continuar? ");
		
	}

	promedio=acumulador/contador;



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN