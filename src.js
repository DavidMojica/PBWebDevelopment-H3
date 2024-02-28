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
const generateCaptcha = len =>{
    return Array.from({ length: len }).reduce((code, _) => { // _ es un parametro que no se necesita dentro de la funcion
        return code + characters[Math.floor(Math.random() * characters.length)];
    }, ''); //Inicializar el captcha con una cadena vacia
}

const fillWithFoods = () =>{
    return ["Arepa", "Huevo", "Queso", "Pan", "Remolacha", "Rabano", "Aguacate", "Miel", "Mostaza", "Spaghetti", "Pizza", "Platano", "Manzana", "ñame"];
}

//Arrays
let captchas = Array.from({length:10},() => generateCaptcha(6)); //Generar un array con 10 captchas obtenidos de la funcion generateCaptcha

let foods = fillWithFoods();
let prices = [];
let files = [];

//Array methods implementation
//Método 1
//



//Metodo 2: filter
//Verificar cuantas comidas del array de comidas poseen al menos 1 vez uno de los cinco carácteres generados al azar por la funcion generateCaptcha
const foodCharacters = Array.from({length: 5}, () => generateCaptcha(1));

let contador = 0;
const comidaConCaracter = foods.filter(food => {
    const lowerCaseFood = food.toLowerCase();
    if (foodCharacters.some(char => lowerCaseFood.includes(char.toLowerCase()))) {
        contador++;
        return true; 
    } else return false; 
});

console.log(`Metodo 2:Filter\nCarácteres escogidos para la comida: ${foodCharacters}\nComidas que tienen alguno de estos carácteres: ${comidaConCaracter}\nCantidad: ${contador} de ${foods.length}`);



