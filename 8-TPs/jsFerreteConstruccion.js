/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo=parseFloat(document.getElementById("Largo").value);
    var ancho=parseFloat(document.getElementById("Ancho").value);
    var perimetro;
    var alambre;

    perimetro=2*largo+ancho*2;
    alambre=perimetro*3;

    alert("Se necesitan " +alambre+ " metros de alambre.");

}
function Circulo () 
{
    var radio=parseFloat(document.getElementById("Radio").value);
    var perimetro;
    var alambre;

    perimetro=2*Math.PI*radio;
    alambre=perimetro*3;

    alert("Se necesitan " +alambre.toFixed(2)+ " metros de alambre.");

	
}
function Materiales () 
{
    var largo=parseFloat(document.getElementById("Largo").value);
    var ancho=parseFloat(document.getElementById("Ancho").value);
    var cem;
    var cal;
    var sup;

    sup=largo*ancho;
    cem=sup*2;
    cal=sup*3;

    alert("Se necesitan " +cem+ " bolsas de cemento y " +cal+ " bolsas de cal.");


    
	
}