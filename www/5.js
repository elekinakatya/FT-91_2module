//5.1Одномерные массивы. Вариант 7
function Array(arr){
    if (arr.length === 0){
        return 0;
    }
    let count=0;
    for (let i = 1; i < arr.length; i++){
        if (arr[i]!==arr[i-1]){
            count++;
        }
    }
    return count+1;
}
function readArray() {
    const input = prompt("Введите вещественные числа через запятую:");
    const arr = input.split(',').map(Number); 
    return arr;
}

const userArray = readArray();
const result = Array(userArray);
console.log("Количество элементов, не равных предыдущему:", result);


//5.2Многомерные массивы. Вариант 7
function Mat(matrix){
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const minElements = [];

    for (let col = 0; col < numCols; col++) {
        let min = matrix[0][col]; 

        for (let row = 1; row < numRows; row++) {
            if (matrix[row][col] < min) {
                min = matrix[row][col]; 
            }
        }
        minElements.push(min); 
    }
    return minElements;
}
const matrix = [
    [-3, 3, 53],
    [1, 3, 23],
    [7, 3, 33]
];
const res=Mat(matrix);
console.log("Минимальные элементы столбцов:", res);