function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;
	var promedio;

	do
	{
		numero=parseInt(prompt("Ingrese un numero: "));
		acumulador+=numero;
		contador+=1;
		respuesta=prompt("¿Desea continuar? ");
	}while(respuesta=='s')
	promedio=acumulador/contador;
    


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN