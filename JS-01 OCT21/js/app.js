console.log("Hola de nuevo");

/*VARIABLES: var y let(palabras resrvadas para declarar vairables) 
var(para variables que cambian su valor, let para variables con valor definido*/
    
    var mes="Octubre";
console.log (typeof(mes));

var dia= 21;
console.log(typeof(dia));

var esFestivo;
esFestivo=null;
console.log(esFestivo);

var var1, var2, var3;

dia='veintiuno';
console.log(typeof(dia));

console.log(document);

function suma(a,b) {
    document.getElementById("resultado").innerHTML= a + b;
    alert("Hiciste click")
}

//LocalStorage

//funciones como expresion

var imprimir= function(dato){
    document.getElementById("valor").innerHTML = dato;
}
var aumentar= function () {
    localStorage.contador++;
    imprimir(localStorage.contador);
}

var reiniciar = function() {
    localStorage.contador = 0;
    imprimir(localStorage.contador);
}

var eliminar = function() {
    localStorage.removeItem("contador");
    imprimir(localStorage.contador);
}

if (typeof(Storage) !="undefined") {
    if(localStorage.contador){
        imprimir(localStorage.contador);
    } else{
        localStorage.contador=0;
    }
}