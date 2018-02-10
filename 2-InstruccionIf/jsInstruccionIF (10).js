function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
  	var num = Math.floor((Math.random()*10)+1);

    if(num <=3)
     {
      alert(num + " Vamos, la proxima se puede");
     }
      else if(num >=4 && num <=8)
      {
        alert(num + " Aprobó");
      }
      if(num >=9)
      {
        alert(num + " Excelente");
      }
}
//FIN DE LA FUNCIÓN
