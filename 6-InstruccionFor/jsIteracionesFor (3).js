function Mostrar() {

    var repeticiones = prompt("ingrese el número de repeticiones");
    var i;
    
    while (isNaN(repeticiones)) {
        repeticiones = prompt("Reingrese el número de repeticiones");
    }
    for (i = 0; i < repeticiones; i++)
    {
        console.log("Hola UTN FRA");
    }

}//FIN DE LA FUNCIÓN