/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo;
    var aumento;
    var nuevosueldo;

    sueldo = parseInt (document.getElementById("sueldo").value);
    
    aumento = parseInt(aumento);
    
    aumento = sueldo * 10/100;
    
    nuevosueldo = sueldo + aumento;

    document.getElementById("resultado").value = nuevosueldo

}
