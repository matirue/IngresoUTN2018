function Mostrar()
{ //FORMA 1:
  //  var num=parseInt(prompt("Ingrese un numero "));
  //  var contDiv=0;
    
  //  for(var i=1;i<=num;i++)
  //  {
  //      if(num%i==0)
  //      {
  //          contDiv++;
  //      }

  //   }

  //      if(contDiv==2)
  //      {
  //          alert(num+ " es primo");
  //      }
  //      else
  //      {
  //          alert(num+ " no es primo");
  //      }
   

//OTRA FORMA... aca usamos bandera:

  var num=parseInt(prompt("Ingrese un numero: "));
  var primo=true;

  for(i=2;i<num;i++)
  {
      if(num%i==0)
      {
          primo=false;
          break;
      }
  }
  if(primo==true)
  {
      alert(num+ " es primo.");
  }
  else
  {
      alert(num+ " no es primo.");
  }



}//FIN DE LA FUNCIÓN