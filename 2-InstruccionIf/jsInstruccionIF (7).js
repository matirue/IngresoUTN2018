function Mostrar()
{
//tomo la edad  
var edad=parseInt(document.getElementById("edad").value);
var estadoCivil=document.getElementById("estadoCivil").value;

if(edad <18 && estadoCivil != "Soltero")
{
    alert("Es muy pequeño para NO ser soltero");
}

//a partir de aca no es necesario//

else if(estadoCivil == "Casado")
{
    alert("sadasd");
} 
else
{
    alert("!234234");
}


}//FIN DE LA FUNCIÓN