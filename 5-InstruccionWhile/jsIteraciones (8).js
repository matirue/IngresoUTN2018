function Mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var respuesta='s';
	var num;
	var flag=0;

	do{
		num=parseInt(prompt("Ingrese un numero: "));

		if(num>=0)
		{
			positivo+=num;
		}
		else
		{
			negativo*=num;
			flag=1;
		}

		respuesta=prompt("¿Desea continuar? ");

	}while(respuesta=='s')


document.getElementById('suma').value=positivo;

if (flag == 0)
{
	negativo=0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN