var intxt = document.getElementById("intxt");
var enbtn = document.getElementById("enbtn");
var desbtn = document.getElementById("desbtn");
var copy = document.getElementById("copy");
var msg1 = document.getElementById("404");
var msg2 = document.getElementById("404i");
var img = document.getElementById("img");
var conttr = document.getElementById("conttr");
var trad = document.getElementById("traduccion");
const x = window.matchMedia('(max-width: 1000px)');

enbtn.onclick = codeB;
desbtn.onclick = decodeB;
copy.onclick = copyF;
intxt.onclick = fcs;

function fcs(){
    if(intxt.focus){
        intxt.textContent="";
    }
}

function placeholder(){
    intxt.textContent="Ingresa tu texto aquí...";
}

function codeB(){
    
    if(intxt.textContent != "Ingresa tu texto aquí..." && validar(intxt.textContent)==true){
        copy.style.display="block";
        trad.style.display="block";
        msg1.style.display="none";
        msg2.style.display="none";
        img.style.display="none";
        conttr.style.display="none";
        code(intxt.textContent);
        intxt.textContent="Ingresa tu texto aquí...";
    }

}

function decodeB(){

    if(intxt.textContent != "Ingresa tu texto aquí..." && validar(intxt.textContent)==true){
        copy.style.display="block";
        trad.style.display="block";
        msg1.style.display="none";
        msg2.style.display="none";
        img.style.display="none";
        conttr.style.display="none";
        decode(intxt.textContent);
        intxt.textContent="Ingresa tu texto aquí...";
    }

}

function copyF(){

    if(trad.textContent != ""){
        copy.style.display="none";
        trad.style.display="none";
        msg1.style.display="block";
        msg2.style.display="block";
        conttr.style.display="block";
        if(!x.matches){
            img.style.display="block";
        }
        intxt.textContent = trad.textContent;
        navigator.clipboard.writeText(trad.textContent);
    }

}

function validar(msg){

    let ntvalid = /^[a-z\s]+$/;

        if (ntvalid.test(msg)) {
            return true;
        }else{
            alert("Error. Ingresa solo letras minúsculas, sin acentos ni otros caracteres especiales.");
            intxt.textContent = "";
            return false;  
        }  

}


/*La letra "a" es convertida para "ai"
 *La letra "e" es convertida para "enter"
 *La letra "i" es convertida para "imes"
 *La letra "o" es convertida para "ober"
 *La letra "u" es convertida para "ufat"*/

function code(msg){

    let texto = msg;
    let newtxt="";
    
    for(i=0;i<texto.length;i++){
        if(texto.at(i)=="a"){
            newtxt+="ai";
        }else if(texto.at(i)=="e"){
            newtxt+="enter";
        }else if(texto.at(i)=="i"){
            newtxt+="imes";
        }else if(texto.at(i)=="o"){
            newtxt+="ober";
        }else if(texto.at(i)=="u"){
            newtxt+="ufat";
        }else{
            newtxt+=texto.at(i);
        }
    }

    trad.textContent = newtxt;
    intxt.textContent = "";

}

function decode(msg){

    let texto = msg;

    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    trad.textContent = texto;
    intxt.textContent = "";

}