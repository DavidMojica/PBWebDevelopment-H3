//Globals
const characters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c',
    'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6',
    '7', '8', '9', '0'
  ];

//Arrow functions
const generateCaptcha = () =>{
    return Array.from({ length: 6 }).reduce((code, _) => { // _ es un parametro que no se necesita dentro de la funcion
        return code + characters[Math.floor(Math.random() * characters.length)];
    }, ''); //Inicializar el captcha con una cadena vacia
}

const fillWithFood = Array =>{

}

//Arrays
let captchas = Array.from({length:10}, generateCaptcha); //Generar un array con 10 captchas obtenidos de la funcion generateCaptcha

let foods = [];
let prices = [];
let files = [];

console.log(captchas);