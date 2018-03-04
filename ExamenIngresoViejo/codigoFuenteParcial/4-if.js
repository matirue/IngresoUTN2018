//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var num1=parseInt(prompt("1-Ingrese un numero: "));
    var num2=parseInt(prompt("2-Ingrese un numero: "));
    var sol;

    if(num1==num2)
     {
         sol=num1*num2;
     }
    else if(num1>num2)
     {
         sol=num1-num2;
     } 
    else 
     {
         sol=num1+num2;
     } 

    document.write("La solucion es " +sol+ ".");
}

