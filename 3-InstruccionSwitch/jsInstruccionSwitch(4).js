function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño)
{
    case "Febrero":
    alert("Si, tiene 28 días.")
    break;

    case "Abril":
    
    case "Mayo":
    
    case "Junio":
    
    case "Septiembre":

    case "Noviembre":
    alert("Si, tiene 30 dias.")
    break;

    default:
    alert("Si, tiene 31 días")
    break;
    
}
	
	



}//FIN DE LA FUNCIÓN