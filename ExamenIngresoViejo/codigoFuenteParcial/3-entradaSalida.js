//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var lado=parseInt(document.getElementById("largo").value);
    var ancho=parseInt(document.getElementById("ancho").value);
    var perimetro=(lado*2+ancho*2)*6;

    alert("Se necesitan " +perimetro+ " metros de alambre.");  
}

