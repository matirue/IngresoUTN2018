function Mostrar()
{

	var numero = prompt("Ingrese un número entre 0 y 9.");

	while(!(numero >=0 && numero <10 && numero != ""))
	{
		numero=prompt("ERROR, reingrese un numero entre 0 y 9.");
	}
document.getElementById("Numero").value=numero;


}//FIN DE LA FUNCIÓN