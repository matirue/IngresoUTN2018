//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var mes=(prompt("Ingrese un mes (todo en mayuscula o minuscula): ")).toLowerCase();
     
    switch(mes)
     {
         case 'enero':
         case 'febrero':
          alert("Veranito!!!!");
          break;
         
          case 'marzo':
          case 'abril':
          case 'mayo':
          case 'junio':
          case 'julio':
          case 'agosto':
          case 'septiembre':
          case 'octumbre':
          case 'noviembre':
          case 'diciembre':
           alert("Extraño enero y febrero!!!");
           break;

          default:
           alert("Lo ingresado no es un mes.");
           break;
     }
	
}

