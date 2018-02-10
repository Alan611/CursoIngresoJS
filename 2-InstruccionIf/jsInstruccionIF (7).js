function Mostrar()
{
//tomo la edad  

	var age;

    var estado;

    age = parseInt(document.getElementById("edad").value);

    estado = document.getElementById("estadoCivil").value;

    if(age <=18 && estado == "Soltero")
    {
    alert("Eres muy pequeño para no ser soltero");
    }
}//FIN DE LA FUNCIÓN