function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

    while(numero <0 ||numero >9)
	{
		numero = prompt("Numero Incorrecto. Ingrese un nùmero entre el 0 y 9");
	}

    alert("Nùmero Correcto");


}//FIN DE LA FUNCIÓN