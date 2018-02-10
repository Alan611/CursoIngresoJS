function Mostrar()
{
//tomo la edad  

var age;

age = parseInt(document.getElementById("edad").value);

if(age <13)
  {
      alert("Eres un Niño");
  }
  else
  {
      if(age >=13 && age <=17)
      {
          alert("Eres un Adolescente");
      }
      else
      {
          if(age >=18)
          {
              alert("Eres un Adulto");
          }
      }
  }
}//FIN DE LA FUNCIÓN