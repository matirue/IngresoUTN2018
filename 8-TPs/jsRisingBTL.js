/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    {
        var edad=parseInt(prompt("Ingrese su edad: ")); 
    
        while(edad<18 || edad>90)
         {
           edad=parseInt(prompt("Denegado, reingrese edad entre 18 y 90 años."));
         }

       document.getElementById("Edad").value=edad;

    }


    {
        var sexo=prompt("Ingrese su sexo, 'F' para femenino y 'M' para masculino.").toUpperCase();

          while(!(sexo=='F' || sexo=='M'))
           {
              sexo=prompt("Error. Reingrese su sexo, 'F' para femenino y 'M' para masculino. ").toUpperCase();
           }

          if(sexo=='F')
          {
              sexo="Femenino";
          }
          else
          {
              sexo="Masculino";
          }
        document.getElementById("Sexo").value=sexo;
    }

    {
        var estadoCivil=prompt("Ingrese su Estado Civil (Soltero/Casado/Divorciado/Viudo).");

        while(!(estadoCivil=='Soltero' || estadoCivil=='Casado' || estadoCivil=='Divorciado' || estadoCivil=='Viudo'))
        {
            estadoCivil=prompt("Error. Rengrese su Estado Civil (Soltero/Casado/Divorciado/Viudo).");
        }
        switch(estadoCivil)
        {
            case 1:
             estadoCivil="Soltero";
             break;
            
            case 2:
             estadoCivil="Casado";
             break;
            
            case 4:
             estadoCivil="Divorciado";
             break;

            case 5:
             estadoCivil="Viudo";
             break;
        }

        document.getElementById("EstadoCivil").value=estadoCivil;
    }

    {
        var sueldo=parseInt(prompt("Monto de sueldo $"));

        while(sueldo<8000 || sueldo!=parseInt(sueldo))
         {
            sueldo=parseInt(prompt("El sueldo a ingresar debe ser mayor a $8000"));
         }
        
        document.getElementById("Sueldo").value="$"+sueldo;
    }

    {
        var numLegajo=parseInt(prompt("Ingrese su mumero de legajo, no mas de 4 cifras y sin ceros a la izquierda: "));

        while(!(numLegajo>=1000 && numLegajo<10000 && numLegajo==parseInt(numLegajo)))
         {
             numLegajo=parseInt(prompt("Error. Por favor reingrese numero de legajo, no mas de 4 cifras y sin ceros a la izquierda: "));
         }

        document.getElementById("Legajo").value=numLegajo;
    }

    {
        var nacion=prompt("Ingrese su nacionalidad (A: Argentino. E: Extranjero. N: No nacionalizado): ").toUpperCase();

        while(!(nacion=='A' || nacion=='E' || nacion=='N'))
         {
             nacion=prompt("Error. Reingrese su nacionalidad (A: Argentino. E: Extranjero. N: No nacionalizado): ").toUpperCase();
         }
        
         switch(nacion)
          {
              case 'A':
               nacion="Argentino.";
               break;

              case 'E':
               nacion="Extranjero.";
               break;

              case 'N':
               nacion="No nacionalizado.";
               break;
          }

        document.getElementById("Nacionalidad").value=nacion;
    }


}
