function Mostrar()
{
    var num;
    var contDivisor=0;
    var i;
    num=parseInt(prompt("Ingrese un numero "));
    
    for(i=1;i<=num;i++)
    {
        if(!(num%i==0))
        {    
           continue;    
                }
        contDivisor++;
        console.log(i);
    }

    console.log("Se encontraron " +contDivisor+ " divisores de " +num+ ".");





}//FIN DE LA FUNCIÓN