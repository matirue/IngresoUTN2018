function Mostrar()
{

	var positivo=0;
	var negativo=1;
	var respuesta='s';
	var numero;
	var flag=0;

	do 
	{
		numero=parseInt(prompt("Ingrese un numero: "));

		if(numero >=0)
		{
			positivo+=numero;
		}
		else
		{
			negativo*=numero;
			flag=1

		}

		respuesta=prompt("¿Desea continuar? ");
	}while(respuesta=='s')


document.getElementById('suma').value=positivo;

if(flag==0)
{
	negativo=0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN