import { pedirCarta, acumularPuntos, crearCartaHtml } from './';

/**
 * Turno de la computadora
 * @param {number} puntosMinimos  puntos minimos que la computadora necesita para ganar
 * @param {Array<string>} deck 
 * @param {Array<number>} puntosJugadores
 * @param {Array<HTMLElement>} puntosHTML
 * @returns {void} no retorna nada
 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, puntosHTML, divCartasJugadores) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    //if(!deck) throw new Error('El deck es necesario');
    if(!puntosJugadores) throw new Error('Los puntos de los jugadores son necesarios');
    if(!puntosHTML) throw new Error('Los elementos HTML para mostrar los puntos son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
        crearCartaHtml(carta, puntosJugadores.length - 1, divCartasJugadores);

        if (puntosMinimos > 21) {
            break;
        }
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}

const determinarGanador = (puntosJugadores) => {
    //*desestructuracion de arreglos
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador gana');
        } else {
            alert('Computadora gana');
        }
    }, 100);
}
