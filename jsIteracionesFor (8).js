function Mostrar()
{
    //var num=parseInt(prompt("Ingrese un numero: "));
    //var contDivisor=0;
    //for(var i=1;i<=num;i++)
    //{
    //    if(num%i==0)
    //    {
    //        contDivisor++;
    //    }
    //}
    //if(contDivisor==2)
    //{
    //    alert (num+ " es primo.");
    //}
    //else{
    //    alert(num+ " no es primo.");
    //}

//otra manera con var bandera

var num=parseInt(prompt("Ingres un numero: "));
var esPrimo=true;

for(i=2 ; i<num ; i++)
{
   if(num%i==0)
    {
        esPrimo=false;
        break;
    }
}

if(esPrimo)
{
    alert(num+ " es primo.");
}
else 
{
    alert(num+ "  no es primo.");
}



}//FIN DE LA FUNCIÓN