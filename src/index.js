/* Acá va tu código manejo del dom*/
function codificar(){
   //guardar valor de cuadro que usuario digita
   let strng=document.getElementById('CuadroTexto').value;
   
   //guardo desplazamiento que elige usuario
   let offset= document.getElementById('desplazamiento').value;
   
   //guardar todo el contenido de cipher
  
   let paso= cipher.encode(strng,offset);

   //    root.innerHTML = cipher.encode(texto,offset)

   //document.getElementById('divcodificado').style="display:block;float: center; ";
   document.getElementById('CuadroSalidaC').innerHTML=paso;
}
codificar();
function decodificar(){
   //guadar valor de cuadro que usuario digita para descifrar
   let strngD= document.getElementById('CuadroTexto').value;
   //el espacio de desplazamiento elegido por el usuario
   let offsetD=document.getElementById('desplazamiento').value;
   //guardar contenido de cipher
   let pasoD= cipher.decode(strngD,offsetD);

//   document.getElementById('divdecodificado').style="display:block;float: center; ";
   //root.innerHTML = cipher.decode(texto,offset)
   document.getElementById('CuadroSalidaD').innerHTML=pasoD;

}
decodificar();  

    


