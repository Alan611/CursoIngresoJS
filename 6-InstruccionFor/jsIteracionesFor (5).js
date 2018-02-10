function Mostrar() {
    var num
    var acumNum=0

    for( ; ; ){ 
    
    num = parseInt(prompt("Ingrese un Nùmero"))
    
    while(isNaN(num)){
        prompt("Error. Reingrese un Nùmero");
    }
        if(num == 9){
            break
        }
            acumNum = acumNum + num
        
    console.log(acumNum);

    }
  

}
//FIN DE LA FUNCIÓN