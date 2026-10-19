//import { shuffle } from 'underscore'; //*es mas especifico|
import _ from 'underscore'; //*importa todo el paquete de underscore, es mas generico

/**
 * Esta función crea un nuevo deck de cartas
 * @param {Array<string>} tiposDeCarta Ejm: ['C', 'D', 'H', 'S'],
 * @param {Array<string>} tiposEspeciales Ejm: ['A', 'J', 'Q', 'K']
 * @returns {Array} regresa un nuevo deck de cartas barajeadas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if( !tiposDeCarta || tiposDeCarta.length === 0 )
        throw new Error("Se necesita un arreglo con los tipos de carta(tiposDeCarta) como un arreglo de string");
    
    if( !tiposEspeciales || tiposEspeciales.length === 0 )
        throw new Error("Se necesita un arreglo con los tipos especiales(tiposEspeciales) como un arreglo de string");

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }

    return _.shuffle(deck); //*arreglo barajeado
}

//export default crearDeck; //*ejemplo exportacion por defecto