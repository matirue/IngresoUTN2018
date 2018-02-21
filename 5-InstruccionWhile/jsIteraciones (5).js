function Mostrar()
{

var sexo = prompt("Ingrese sexo f ó m .");
sexo=sexo.toLowerCase();

while (sexo!='f' && sexo!='m')
{
    sexo=prompt("Error. Reingrese sexo f o m. ");
    sexo=sexo.toLowerCase();
}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN