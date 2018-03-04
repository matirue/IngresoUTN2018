//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var num=parseFloat(prompt("Ingrese un importe: "));
    var numIva=(num*.21);
    var numFinal=(num+numIva);
    
    document.getElementById("importe").value="El importe final $" +numFinal.toFixed(2);
}

