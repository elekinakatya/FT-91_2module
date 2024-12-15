
let x = parseInt(prompt('Введите число'));
let sum=0
if (x===1) false
for (let i=1; i<x;i++){
    if (x%i===0){
        sum+=i;
    }
}
if (sum===x) {
    alert(`${x} является совершенным числом.`);
} else {
    alert(`${x} не является совершенным числом.`);
}
