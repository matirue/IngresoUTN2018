function Mostrar()
{

	var contador=0;
	// declarar variables
	var num;
	var max;
	var min;
	
	var respuesta='s';
do
{
	num=parseInt(prompt("Ingrese un numero: "));
	contador++
	if(contador==1)
	{
		max=num;
		min=num;
	}
	if (num<min)
	{
		min=num;
	}
	if (num>max)
	{
		max=num;
	}

	respuesta=prompt("¿Desea continuar? ");

}while(respuesta=='s')

document.getElementById("maximo").value=max;
document.getElementById("minimo").value=min;




}//FIN DE LA FUNCIÓN