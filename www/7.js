//1.Напишите функцию, производящую сортировку в массиве студентов
//по средней оценке. Метод должен реализовывать сортировку Шелла.



function AverageMark(grades) {
    const sum = grades.reduce((a, grade) => a + grade, 0);
    return sum / grades.length;
}

function ShellSort(students) {
    const n=students.length;
    let step=Math.floor(n / 2);

    while (step>0) {
        for (let i=step; i<n; i++) {
            const t=students[i];
            let j=i;

            while (j>=step && AverageMark(students[j-step].grades)>AverageMark(t.grades)) {
                students[j]=students[j-step];
                j-=step;
            }
            students[j]=t;
        }
        step=Math.floor(step / 2);
    }
}
const students=[
    { name: "Сережа", grades: [4,5,3,4] },//4
    { name: "Вика", grades: [5,5,5,5] },//5
    { name: "Саша", grades: [5,4,5,4] },//4,5
    { name: "Даша", grades: [2,3,5,3] },//3,25
    { name: "Даня", grades: [2,2,2,2] },
];
ShellSort(students);
console.log(students);






