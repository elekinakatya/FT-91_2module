//1 задание
function TwoMax(a,b,c){
    const max1=Math.max(a,b,c);
    const max2=Math.max(a===max1 ? -Infinity: a, b===max1 ? -Infinity: b, c===max1 ? -Infinity: c);
    return max1*max2;
}
let a=parseInt(prompt('Введите число'));
let b=parseInt(prompt('Введите число'));
let c=parseInt(prompt('Введите число'));
alert(TwoMax(a,b,c))


//2 задание
function NameAndRank(name,rank="рядовой"){
    return `Привет, ${rank} ${name}` ;
}
const greeting1 = NameAndRank("Сергей", "капитан");
console.log(greeting1); 
const greeting2 = NameAndRank("Александр");
console.log(greeting2); 

//3 задание
function callFunction(func, ...args) {
    return func(...args);
}
const multiply = function(a, b) {
    return a * b;
}
const result1 = callFunction(multiply, 5, 10);
console.log(result1); 

//4 задание
function createPowerFunction(num) {
    if (num % 2 === 0) {
        return (x) => x ** 2;
    } else {
        return (x) => x ** 3;
    }
}
const input = prompt("Введите целое число:");
const number = parseInt(input, 10);
if (!isNaN(number)) {
    const powerFunction = createPowerFunction(number);
    const result = powerFunction(number); 
    console.log(`Результат: ${result}`);
} else {
    console.log("Пожалуйста, введите корректное целое число.");
}

//5 задание
function factorial(n) {
    if (n < 0) {
        return undefined; 
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
let x = parseInt(prompt('Введите число'));
const result =factorial(x);
console.log(`Факториал числа ${x}: ${result}`)
