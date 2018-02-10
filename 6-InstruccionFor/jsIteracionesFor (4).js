function Mostrar() {

    for (i = 0; ; i++) {

        console.log(i)

        if (!confirm("¿Desea Continuar?")) {
            
            break;
        }
    }
}//FIN DE LA FUNCIÓN