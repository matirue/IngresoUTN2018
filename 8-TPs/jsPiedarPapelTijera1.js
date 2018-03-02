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
    
    //console.log(eleccionMaquina);

    switch(eleccionMaquina)
      {
          case 1:
            eleccionMaquina="piedra";
            break;

          case 2:
            eleccionMaquina="papel";
            break;
          case 3:
            eleccionMaquina="tijera";
            break;
      }	

}//FIN DE LA FUNCIÓN
function piedra()
{
    ppt="piedra";

    if(ppt==eleccionMaquina)
    {
        alert("Empate!");
    }
    else if(eleccionMaquina=="tijera")
    {
        alert("Ganaste!");
    }
    else
    {
        alert("Perdiste");
    }
	

}//FIN DE LA FUNCIÓN
function papel()
{
    ppt="papel";
    if(ppt==eleccionMaquina)
    {
        alert("Empate!");
    }
    else if(eleccionMaquina=="tijera")
    {
        alert("Perdiste!");
    }
    else
    {
        alert("Ganaste!");
    }


}//FIN DE LA FUNCIÓN
function tijera()
{
    ppt="tijera";

	if(ppt==eleccionMaquina)
    {
        alert("Empate!");
    }
    else if(eleccionMaquina=="piedra")
    {
        alert("Perdista!");
    }
    else
    {
        alert("Ganaste!");
    }

}//FIN DE LA FUNCIÓN