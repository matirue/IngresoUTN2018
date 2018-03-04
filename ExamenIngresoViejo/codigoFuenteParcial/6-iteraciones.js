//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var imp;
    var impMayor;
    var impMenor;
    var flag=0;

    for(i=1;i<8;i++)
     {
         imp=parseFloat(prompt("Ingrese importe del día (mayor a cero): "));

         while(imp<=0)
          {
              imp=parseFloat(prompt("Error, Reingrese importe del dia (mayor a cero): "));
          }
        
         if(imp>impMayor || flag==0)
          {
              impMayor=imp;
          }

         if(imp<impMenor || flag==0)
          {
              impMenor=imp;
              flag=1;
          }
     }
    
     alert("El mayo importe fue de $" +impMayor+ " y el menor fue de $" +impMenor+ ".");
}

