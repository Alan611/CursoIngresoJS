function Mostrar()
{
	var positivo=0;
	var negativo=1;
	var respuesta=true;
	var num;
	

while(respuesta==true)
{
	num = parseInt(prompt("Ingrese un Numero"))
	while(isNaN(num))
	{
	num = prompt("Error, ingrese un numero");
	}

	if(num >=0)
	{
		positivo = positivo + num;
	}
	else
	{
		negativo = negativo * num;
	}

	respuesta = confirm("Desea Continuar?");
}
	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;


}//FIN DE LA FUNCIÓN