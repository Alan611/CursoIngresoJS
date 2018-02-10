function Mostrar()
{
	//declarar contadores y variables 
	var contador=0;
	var contPos=0;
	var contNeg=0;
	var acumPos;
	var acumNeg;
	var contCeros=0;
	var contPares=0;
	var num;
	var respuesta;

do
	{
		num = parseInt(prompt("Ingrese el Nùmero"));
		while(isNaN(num))
		{
			num=parseInt(prompt("Reingrese un numero"));
		}

		if(num >0)
		{
			acumPos = acumPos + num;
			contPos++;
		} 
		else if (num <0)
		{
			acumNeg = acumNeg + num;
			contNeg++;
		}
		else
		{
			contCeros++;
		}

		if(num %2 == 0)
		{
			contPares++;
		}

		respuesta = confirm("¿Desea Continuar?");
	}while(respuesta);

	



   
	
}//FIN DE LA FUNCIÓN