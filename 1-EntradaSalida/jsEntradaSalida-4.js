/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{/*defino una variable*/

	var nombre

	/*asisgno a nombre un prompt que me permitira al usurio ingresar un dato*/

    nombre = prompt ("ingrese el nombre: ");

	document.getElementById("elNombre").value = nombre;



	


	}

