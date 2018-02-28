/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ var precio1=parseFloat(document.getElementById("PrecioUno").value);
  var precio2=parseFloat(document.getElementById("PrecioDos").value);
  var precio3=parseFloat(document.getElementById("PrecioTres").value);
  var suma;

  suma=precio1+precio2+precio3;

  alert("La suma es de $" +suma);
	
}
function Promedio () 
{ var precio1=parseFloat(document.getElementById("PrecioUno").value);
  var precio2=parseFloat(document.getElementById("PrecioDos").value);
  var precio3=parseFloat(document.getElementById("PrecioTres").value);
  var suma;
  var prom;

  suma=precio1+precio2+precio3;
  prom=suma/3;

  alert("El promedio es de $" +prom.toFixed(2));
  
  
  
}
function PrecioFinal () 
{
  var precio1=parseFloat(document.getElementById("PrecioUno").value);
  var precio2=parseFloat(document.getElementById("PrecioDos").value);
  var precio3=parseFloat(document.getElementById("PrecioTres").value);
  var suma;
  var precioIva;
  var impuesto;

  suma=precio1+precio2+precio3;
  impuesto=suma*.21;
  precioIva=suma+impuesto;

  alert("El precio final es de $" +precioIva.toFixed(2));
}