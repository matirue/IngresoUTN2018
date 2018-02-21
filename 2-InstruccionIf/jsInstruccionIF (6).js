function Mostrar()
{
//tomo la edad  


 var edad;

 edad=parseInt(document.getElementById("edad").value);

 if(edad <13) 
 {
    alert("Usted es una menor. ");
 } 
 
 else if(edad >12 && edad <18) 
 {
    alert("Usted es un adolescente. ");
     }
 else
 {
    alert("Usted es mayor de edad. ");
 }
}//FIN DE LA FUNCIÓN