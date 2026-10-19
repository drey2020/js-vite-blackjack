import { valorCarta } from './';

//*Turno: 0 = primer jugador y el ultimo sera de la computadora
/**
 * 
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Array<Number>} puntosJugadores 
 * @param {Array<HTMLElement>} puntosHTML 
 * @returns {Number} puntos del jugador
 */

export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}