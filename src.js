console.time("Render time: ");
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

//Funciones flecha para llenar los arrays o interactuar en alguna parte.
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const generateCaptcha = len =>{
    return Array.from({ length: len }).reduce((code, _) => { // _ es un parametro que no se necesita dentro de la funcion -D
        return code + characters[Math.floor(Math.random() * characters.length)];
    }, ''); //Inicializar el captcha con una cadena vacia
}

const fillWithFoods = () =>{
    return ["Arepa", "Huevo", "Queso", "Pan", "Remolacha", "Rabano", "Aguacate", "Miel", "Mostaza", "Spaghetti", "Pizza", "Platano", "Manzana", "ñame"];
}

//Arrays
let captchas = Array.from({length:5},() => generateCaptcha(6)); //Obtener un array con 5 captchas obtenidos de la funcion generateCaptcha 
let foods = fillWithFoods(); //Obtener los valores directamente desde la funcion.
let numbers = Array.from({length:4},() => getRandomInt(0,100)); //Obtener un array con 4 números entre 0 y 100
let valores = Array.from({length: 5},() =>  Math.pow(getRandomInt(10,100),3)); //Obtener un array con numeros entre 0 y 100 pero elevado a la 3. Es decir, entre 10000 y 1000000

console.log("Los enunciados de los ejercicios que desarrollé están como comentarios en el código. (linea 38, 46, 60 y 65)");
//Array methods implementation
//Método 1: map
//A todos los captchas, reemplazarle cualquiera de sus elementos por otro aleatorio.
const captchasModificados = captchas.map(captcha => {
    const randomIndex = getRandomInt(0, captcha.length); 
    return captcha.slice(0, randomIndex) + generateCaptcha(1) + captcha.slice(randomIndex + 1);
});
console.log(`Metodo 1: map\nCaptchas originales: ${captchas}\nCaptchas modificados: ${captchasModificados}`)

//Metodo 2: filter
//Verificar cuantas comidas del array de comidas poseen al menos 1 vez uno de los cinco carácteres generados al azar por la funcion generateCaptcha -D
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

//Metodo 3: Every - Verifica si todos los elementos de un vector cumplen con una condición proporcionada -D
//Verificar si todos los elementos de un array son mayores que 20 -D
let mensaje = numbers.every(num => num > 20) ? "Todos los números son mayores a 20." : "No todos los numeros son mayores a 20.";
console.log(`Método 3: Every\nArray: ${numbers}\n${mensaje}`)

//Metodo 4: foreach
//A cada valor del array de valores, incluirle un 20% de su valor original por mora.
console.log(`Método 4: Foreach\nValores: ${valores}`);
valores.forEach((valor, index, array)=>{
    array[index] = Math.floor(valor * 1.20);
});
console.log(`Valores con 20% de interés: ${valores}`);
console.timeEnd("Render time: ");