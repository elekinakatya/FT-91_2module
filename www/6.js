function SearchElements(arr1,arr2){
    const set1=new Set(arr1);
    const element=new Set();
    for (const i of arr2){
        if (set1.has(i)){
            element.add(i);
        }
    }
    return Array.from(element);
}
function readArray1() {
    const input = prompt("Введите 1 массив");
    const arr1 = input.split(',').map(Number); 
    return arr1;
}
function readArray2() {
    const input = prompt("Введите 2 массив");
    const arr2 = input.split(',').map(Number); 
    return arr2;
}
const userArray1 = readArray1();
const userArray2 = readArray2();
const result = SearchElements(userArray1,userArray2);
console.log("Элементы,которые присутствуют в обоих массивах:", result);

function NumberOccurrences(arr){
    const s=new Map();
    for (const i of arr){
        if (s.has(i)){
            s.set(i,s.get(i)+1);
        }else{
            s.set(i,1);
        }        
    }
    return s;
}
const s=[1,2,3,4,3];
const res=NumberOccurrences(s);
console.log(res);

class Student{
    constructor(name,group){
        this.group=group;
        this.name=name;
    }
}
function NumberOfstudents(students){
    const groupCounts= new Map();
    for (const i of students){
        if(groupCounts.has(i.group)){
            groupCounts.set(i.group,groupCounts.get(i.group)+1);  
        }else{
            groupCounts.set(i.group,1);
        }
    }
    let maxCount=0;
    for (const count of groupCounts.values()){
        if(count>maxCount){
            maxCount=count;
        }
    }
    return maxCount;
}
const students = [
    new Student('Саша', 'Группа 1'),
    new Student('Маша', 'Группа 2'),
    new Student('Даша', 'Группа 4'),
    new Student('Паша', 'Группа 3'),
    new Student('Глаша', 'Группа 1'),
    new Student('Наташа', 'Группа 1'),
  ];
  
  const groupSize = NumberOfstudents(students);
  console.log(`Количество студентов в самой большой группе: ${groupSize}`);