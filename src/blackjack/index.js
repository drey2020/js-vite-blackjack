import { pedirCarta, turnoComputadora, crearNuevoDeck, acumularPuntos, crearCartaHtml } from './usecases';

/*  
    *2C = two of Clubs (treboles)
    *2D = two of Diamonds (diamantes)
    *2H = two of Hearts (corazones)
    *2S = two of Spades (espadas)
*/

let deck = []; //*la baraja
const tipos = ['C', 'D', 'H', 'S'],
      especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

//*Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
      puntosHTML = document.querySelectorAll('small');

//*numJugadores = 2 : significa que el numero por defecto es 2
//*REGLA DEL JUEGO: El ultimo jugador siempre es la computadora
const inicializarJuego = (numJugadores = 2) => {

    deck =  crearNuevoDeck(tipos, especiales);

    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }

    btnPedir.disabled = false;
    btnDetener.disabled = false;

    puntosHTML.forEach(elemento => elemento.innerText = 0);
    divCartasJugadores.forEach(elemento => elemento.innerText = '');

}

//*EVENTOS
btnPedir.addEventListener('click', () => {
    const carta =  pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

    crearCartaHtml(carta, 0, divCartasJugadores);

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho!, perdiste :(');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);

    } else if (puntosJugador === 21) {
        console.warn('Felicidades!!!, ganaste :D');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartasJugadores);
});

btnNuevo.addEventListener('click', () => {
    console.clear();
    inicializarJuego();
});
