 var v1 = document .getElementById("var-Texto");
 var v2 = document .getElementById("var-Entera");
 var v3 = document .getElementById("var-Boleano");

 //tipo string (texto)
 var Nombre = "edwin";
 //tipo number (numero)
 var Edad = 50.2;
 //tipo boleano (booleano)
 var Vive = true; 

 var vector = ['juan', 'pedro', 'manuel',true,13.37]

//operaciones
 var opNombre = 'Colegio' + ' ET Nro 12';
 var opEdad
 var opVive
//muestro las variables en los respectivos elementos
 v1.innerText +=  ' ' + opNombre ;
 v1.innerText +=  ' ' + opEdad ;
 v1.innerText +=  ' ' + vector ;