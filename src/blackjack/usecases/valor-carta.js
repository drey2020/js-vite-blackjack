/**
 * Permite dar un puntaje a cada carta
 * @param {string} carta 
 * @returns {number} retorna el valor de la carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ? //*evalua si es un nro o no lo es
        (valor === 'A') ? 11 : 10 //*NO es un numero';
        : valor * 1; //*Es un numero //*La multiplicacion por 1 cambia el string a tipo numero
}