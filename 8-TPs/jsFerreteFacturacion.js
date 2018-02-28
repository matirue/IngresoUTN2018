/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno=parseFloat(document.getElementById("PrecioUno").value);
    var precioDos=parseFloat(document.getElementById("PrecioDos").value);
    var precioTres=parseFloat(document.getElementById("PrecioTres").value);
    var total;

    total = precioUno + precioDos + precioTres;

    alert("Su total es de $ " +total);


    
}
function Promedio () 
{   var precioUno=parseFloat(document.getElementById("PrecioUno").value);
    var precioDos=parseFloat(document.getElementById("PrecioDos").value);
    var precioTres=parseFloat(document.getElementById("PrecioTres").value);
    var total;
    var prom;

    total= precioUno + precioDos  +precioTres;
    prom= total/3;

    alert("El promedio es de $ " +prom.toFixed(2));


	
}
function PrecioFinal () 
{
    var precioUno=parseFloat(document.getElementById("PrecioUno").value);
    var precioDos=parseFloat(document.getElementById("PrecioDos").value);
    var precioTres=parseFloat(document.getElementById("PrecioTres").value);
    var total;
    var precIva;
    var impuesto;

    total= precioUno + precioDos  +precioTres;
    impuesto=total*.21;
    precIva=total+impuesto;

    alert("El precio final es de $ " +precIva.toFixed(2));

	
}