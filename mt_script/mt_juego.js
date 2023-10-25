const items = document.querySelectorAll('[data-item]');
const jugadas = ['mt_papel', 'mt_roca', 'mt_tijera'];
const elementoEleccionComputadora = document.getElementById('mt_eleccion-computadora');
let contadorElemento = document.getElementById('mt_puntaje');
let mensajeResultado = document.getElementById('mt_mensaje_resultado');
let mensajeEleccionComputadora = ['papel', 'roca', 'tijera'];
let contadorGanados = 0;

juego();

function juego() {

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.style.cursor = 'pointer';
        item.addEventListener('click', clickMouse);
    }
}

function clickMouse({target: item}) {
    const eleccionJugador = item.id;
    const numeroAleatorio = Math.floor(Math.random() * 3);
    const eleccionComputadora = jugadas[numeroAleatorio];
    const mensajeComputadora = mensajeEleccionComputadora[numeroAleatorio];
    elementoEleccionComputadora.innerHTML = "<p> Computadora Eligio: " + mensajeComputadora + "</p>";

    if (eleccionJugador === 'mt_papel') {
        if (eleccionComputadora === eleccionJugador) {
            mensajeResultado.innerHTML = '<p>Empate</p>'
        }
        if (eleccionComputadora === 'mt_roca') {
            mensajeResultado.innerHTML = '<p>Ganaste</p>'
            contadorGanados += 1;
        }
        if (eleccionComputadora === 'mt_tijera') {
            mensajeResultado.innerHTML = '<p>Perdiste</p>'
        }
    }
    if (eleccionJugador === 'mt_roca') {
        if (eleccionComputadora === eleccionJugador) {
            mensajeResultado.innerHTML = '<p>Empate</p>'
        }
        if (eleccionComputadora === 'mt_tijera') {
            mensajeResultado.innerHTML = '<p>Ganaste</p>'
            contadorGanados += 1;
        }
        if (eleccionComputadora === 'mt_papel') {
            mensajeResultado.innerHTML = '<p>Perdiste</p>'
        }
    }
    if (eleccionJugador === 'mt_tijera') {
        if (eleccionComputadora === eleccionJugador) {
            mensajeResultado.innerHTML = '<p>Empate</p>'
        }
        if (eleccionComputadora === 'mt_papel') {
            mensajeResultado.innerHTML = '<p>Ganaste</p>'
            contadorGanados += 1;
        }
        if (eleccionComputadora === 'mt_roca') {
            mensajeResultado.innerHTML = '<p>Perdiste</p>'
        }
    }
    contadorElemento.innerText = contadorGanados
}

