let mensaje = "02-Unkown-Type";

console.log(mensaje);

function mul(numero:unknown){
    if(typeof numero === "number"){
        return numero * 5;
    }
    return "Ingrese un numero valido";
    
}

console.log(mul(7));
console.log(mul('john'));