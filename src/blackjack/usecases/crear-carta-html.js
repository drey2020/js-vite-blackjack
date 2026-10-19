
/**
 * 
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Array<HTMLElement>} divCartasJugadores 
 * @returns {HTMLImageElement} imagen de retorno
 */
export const crearCartaHtml = (carta, turno, divCartasJugadores) => {
    if(!carta) throw new Error('La carta es necesaria');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);

    return imgCarta;
}