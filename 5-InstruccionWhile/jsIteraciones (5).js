function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo != "f" && sexo != "m" )
{
   sexo = prompt("Letra no Valida. Reingrese ");
}

document.getElementById('Sexo').value="Su sexo es "+sexo;

}//FIN DE LA FUNCIÓN