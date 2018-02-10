function Mostrar()
{
//tomo la edad  

	var age;

    var estado;

    age = parseInt(document.getElementById("edad").value);

    estado = document.getElementById("estadoCivil").value;

    if(age >=18 && estado == "Soltero")
    {
        alert("Es soltero y no es Menor de Edad");
    }
}//FIN DE LA FUNCIÓN