window.cipher = {
    encode: (strng,offset) => {
//variable para almacenar el código ascii de la letra
let ascii=0;
let textoCodificado="";

//bucle for para recorrer letras del texto una por una
for(let i=0;i<strng.length;i++){
    let formula;
    //cuando usuario clickea espacio, = asignar algo,== igual
    //evalua si no es un espacio
    if(strng[i].charCodeAt()==32){
        formula=32;
    }else{
         //si no es espacio es una letra por lo tanto codifica
        ascii=strng[i].toUpperCase().charCodeAt(0);
        //transforma ascii a numero entero (parseInt)
        formula=((parseInt(ascii)-65+parseInt(offset))%26)+65;

    }

//almacenar la letra en ascii



textoCodificado=textoCodificado+String.fromCharCode(formula);
    }
    return textoCodificado.toUpperCase();
},


    decode: (srngD,offsetD) => {
        //variable para almacenar el código ascii de la letra
let ascii=0;
let textoCodificado="";

//bucle for para recorrer letras del texto una por una
for(let i=0;i<srngD.length;i++){

let formula;


if(srngD[i].charCodeAt()==32){
    formula=32;
}
else{
    //transforma ascii a numero entero (parseInt)
//se resta el desplazamiento para decodificar
ascii=srngD[i].toUpperCase().charCodeAt(0);
formula=((parseInt(ascii)-90-parseInt(offsetD))%26)+90;
}



textoCodificado=textoCodificado+String.fromCharCode(formula);
    }
    return textoCodificado.toUpperCase();
    


    }
   };