//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var nota;
    var sexo;
    var prom;
    var notaMenor;
    var contNotas=0;
    var contVarones=0;
    var flag=0;

    for(i=0;i<6;i++)
     {
        nota=parseInt(prompt("Ingrese nota: "));

         while(!(nota>=0 && nota<11))
          {
              nota=parseInt(prompt("Error. La nota debe ser entre 0-10: "));
          }
        
        sexo=(prompt("Ingrese sexo, 'F' para Femenino o 'M' para masculino: ").toUpperCase());
         
         while(!(sexo=='F' || sexo=='M'))
          {
            sexo=(prompt("Error. Reingrese sexo, 'F' para Femenino o 'M' para masculino: ").toUpperCase());
          }
        
        contNotas+=nota;
        
         if(nota<notaMenor || flag==0)
          {
              notaMenor=nota;
              flag=1
          }

         if(nota>=6 && sexo=='M')
          {
              contVarones++;

          }

     }

    prom=(contNotas/6).toFixed(2);
    
    alert("El promedio total de las notas es de " +prom+ ", donde la nota mas baja fue de " +notaMenor+ " y un total de " +contVarones+ " varones aprobaron con mas de 6." );

}

