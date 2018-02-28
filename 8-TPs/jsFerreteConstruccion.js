/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTer=parseFloat(document.getElementById("Largo").value);
    var anchoTer=parseFloat(document.getElementById("Ancho").value);
    var total1;
    var alambre;

    total1=(largoTer*2)+(anchoTer*2);
    alambre=total1*3;
    
    alert("se necesitan " +alambre+ " metros de alambre.");

}
function Circulo () 
{
	var radioTer=parseFloat(document.getElementById("Radio").value);
    var alambre;
    var radioTot;

    radioTot= 2 * radioTer * Math.PI;
    alambre=radioTot*3;

    
    alert("se necesitan " +alambre.toFixed(2)+ " metros de alambre.");
}
function Materiales () 
{
    
    var largoTer=parseFloat(document.getElementById("Largo").value);
    var anchoTer=parseFloat(document.getElementById("Ancho").value);
    var cal;
    var cemento;
    var superf;

    superf=largoTer*anchoTer;
    cal=superf*3;
    cemento=superf*2;

    alert("Para el terreno se necesitan " +cal+ " bolsas de cal y " +cemento+ " bolsas de cemento.");

	
}