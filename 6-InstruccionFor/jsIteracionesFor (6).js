function Mostrar()
{   // FORMA 1:
    //var num=parseInt(prompt("Ingrese un numero: "));
    //var contPar=0;

    //for (var i=1 ; i<=num ; i++)
    //{
    //    if(i%2==0)
    //    {
    //        contPar++;
    //        console.log(i);
    //    }
    //}
    //console.log("Se encontraron " +contPar+ " numeros pares. ");

    //FORMA2:

    var num=parseInt(prompt("Ingrese un numero: "));
    var contPar=0;

    for (var i=1 ; i<=num ; i++)
    {
        if(i%2==1)   //pido q sea impar
        {
            continue;
        }
        contPar++;
        console.log(i);
    }
    console.log("Se encontraron " +contPar+ " numeros pares. ");




}//FIN DE LA FUNCIÓN