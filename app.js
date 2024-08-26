let numeroSecreto=0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    
    if (numeroDeUsuario===numeroSecreto){
        asignarTextElemento('p',`Acertaste el nuemero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usurio no acerto//
        if(numeroDeUsuario>numeroSecreto){
            asignarTextElemento('p','El numero secreto en menor');
        } else{
            asignarTextElemento('p','El numero secreto es mayor');
        }

        intentos++;

        limpiarCaja();
    }
    return;
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}
function generarNumeroSecreto() {
    let nuemroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(nuemroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextElemento('p','Ya se sortearon todos los numeros posibles ');
    } else{

    // si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(nuemroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(nuemroGenerado);
            return nuemroGenerado;
        } 
    }   
}

function condicionesInciales(){
    asignarTextElemento('h1','Juego del numero secreto!');
    asignarTextElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar la caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    numeroSecreto=generarNumeroSecreto();
    //Inicializar el numero de intentos
    //Deshabilitar el boton denuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesInciales();

