//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var num;
    var contNum=0;
    var contPar=0;
    var prom;
    var sumaTotal=0;
    var numMax;
    var numMin;
    var resp;
   

    do 
      {
        num=parseInt(prompt("Ingrese un numero positivo: "));
        contNum++;

           while(num<=0)
             {
                 num=parseInt(prompt("Error. Por faavor, ingrese un numero positivo mayor a cero: "));
             }
        
           if(contNum==1)
             {
                 numMax=num;
                 numMin=num;
             }
             
           if(num<numMax)
             {
                 numMax=num;
             }  
           if(num>numMin)
             {
                 numMin=num;
             }  

           if(num%2==0)
             {
                 contPar++;
             } 
        
           
                 sumaTotal+=num;
             
             
        
        resp=prompt("¿Desea continuar? ('s' para si, 'n' para no.)");
      }while(resp=='s')
    
    
    
    prom=sumaTotal/contNum;

    document.write("A: Cantidad de numeros pares ingresados: " +contPar+"<br/>");
    document.write("B: El promedio de los numeros ingresados: " +prom.toFixed(2)+ "<br/>");
    document.write("C: El numero maximo ingresado es: " +numMax+ " y el numero minimo es " +numMin+ "<br/>");

    
    


}

