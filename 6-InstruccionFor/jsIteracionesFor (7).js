function Mostrar()
{
  //  var num=parseInt(prompt("Ingrese un numero: "));
  //  var contDiv=0;
  //  for(i=1;i<=num;i++)
  //  {
  //      if(num%i==0)
  //      {
  //          contDiv++;
  //          console.log(i);
  //      }
  //  }
  // console.log("Se encontraron " +contDiv+ " divisores de " +num+ ".");

  var num=parseInt(prompt("Ingrese un numero "));
  var contDivisor=0;  
  
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