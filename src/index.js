/* Acá va tu código manejo del dom*/
function codificar(){
   //guardar valor de cuadro que usuario digita
   let strng=document.getElementById('CuadroTexto').value;
   //guardo desplazamiento que elige usuario
   let offset= document.getElementById('desplazamiento').value;
   //guardar todo el contenido de cipher
   console.log(offset,strng);
   let paso= cipher.encode(strng,offset);

   //    root.innerHTML = cipher.encode(texto,offset)
   document.getElementById('CuadroSalidaC').innerHTML=paso;
}
function decodificar(){
   //guadar valor de cuadro que usuario digita para descifrar
   let strngD= document.getElementById('CuadroTexto').value;
   //el espacio de desplazamiento elegido por el usuario
   let offsetD=document.getElementById('desplazamiento').value;
   //guardar contenido de cipher
   let pasoD= cipher.decode(strngD,offsetD);
   console.log(pasoD);
   //root.innerHTML = cipher.decode(texto,offset)
   document.getElementById('CuadroSalidaD').innerHTML=pasoD;

}
//e carga como offset y strng, recibe informacion
function mayuscula(e){
   e.value=e.value.toUpperCase();
  //evalúa codigo ascii de tecla ingresada  Ñ para cambiarla por N
   if(e.value.charCodeAt()==209){
e.value="N";

   }
   //

}


    


