function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch (mesDelAño)
    {
    case "Enero": 
    case "Marzo": 
    case "Mayo":
    case "Julio": 
    case "Agosto": 
    case "Octubre":
    case "Diciembre":
    alert("Este Mes Tiene 31 Días");
    break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    alert("Este Mes Tiene 30 Días");
    break;
    case "Febrero": alert("Este Mes Tiene 29 Días");
    break;
    }
}//FIN DE LA FUNCIÓN