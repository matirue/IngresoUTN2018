/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var ppt;

function comenzar()
{
    eleccionMaquina=Math.floor(Math.random()*3)+1;
    console.log(eleccionMaquina);

    if(eleccionMaquina==1)
    {
        eleccionMaquina="Piedra";
        console.log(eleccionMaquina);
    }
    else if(eleccionMaquina==2)
    {
        eleccionMaquina="Papel";
        console.log(eleccionMaquina);
    }
    else
    {
        eleccionMaquina="Tijera";
        console.log(eleccionMaquina);
    }
	
}//FIN DE LA FUNCIÓN
function piedra()
{
    if(eleccionMaquina==1)
    {
        alert("emp");
    }   
    else if(eleccionMaquina==2)
    {
        alert("gano");
    }
    else
    { 
        alert("perdio")
    }
	

}//FIN DE LA FUNCIÓN
function papel()
{


}//FIN DE LA FUNCIÓN
function tijera()
{
	

}//FIN DE LA FUNCIÓN