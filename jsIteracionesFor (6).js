function Mostrar()
{
    var num;
    var contPar=0;
    var i;

    num=parseInt(prompt("Ingrese un numero: "));

    for(i=1;i<=num;i++)
    {
        if(i%2==0)
        {
            contPar++;
            console.log(i);
        }

    }

    console.log("Se registro " +contPar+ " numero pares.");

    //tmb se puede hacer con un continue q lo q hara es si sale algun numero impar volvera al for a incrementar
    //en caso de q sea par, no entrara al if y toara el registro.

    // var num
    //var num;
    //var contPar=0;
    //var i;

    //num=parseInt(prompt("Ingrese un numero: "));

    //for(i=1;i<=num;i++)
    //{
    //    if(i%2==1)     para que entre al if si es impar
    //    {
    //       continue;     al ser impar volvera al for sin ser ejecutadas las lineas de abajo
    //       
    //    }
    //        contPar++;
    //        console.log(i);

    //}

    //console.log("Se registro " +contPar+ " numero pares.");




}//FIN DE LA FUNCIÓN