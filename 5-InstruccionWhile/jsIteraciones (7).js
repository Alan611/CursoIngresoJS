function Mostrar()
{

	var contador=0;
	var acumulador=0;
	//var respuesta='si';
    var respuesta=true;
	var num;

    while(respuesta == true)
	{
		num = parseInt(prompt("Ingrese el Nùmero"));
		while(isNaN(num))
		{
			num=parseInt(prompt("Reingrese un numero"));
		}
		acumulador = acumulador + num;
		respuesta = confirm("¿Desea Continuar?");
		contador++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN