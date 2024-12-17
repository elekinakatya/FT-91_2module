const student = {
    lastName: "Иванов",
    firstName: "Иван",
    marks: [
        { subject: "Математика", mark: 5 },
        { subject: "Русский язык", mark: 4 },
        { subject: "Физика", mark: 5 },
        { subject: "Химия", mark: 3 },
        { subject: "Информатика", mark: 5}
    ]
};
function printStudentInfo(student) {
    console.log(`Фамилия: ${student.lastName}`);
    console.log(`Имя: ${student.firstName}`);
    console.log("Оценки:");
    student.marks.forEach((m) => {
        console.log(`${m.subject}: ${m.mark}`);
    });
}
printStudentInfo(student);

class Student{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
        this.marks=[]
    }
    averageMark(){
        let tMarks = 0;
        let tCount = 0;

        for (const markEntry of this.marks) {
            tMarks += markEntry.mark.reduce((a, b) => a + b, 0); 
            tCount += markEntry.mark.length; 
        }
        return tCount > 0 ? (tMarks / tCount).toFixed(2) : 0; 
    }

    
    allMark(subject){
        const existingMark = this.marks.find(m => m.subject === subject);
        return existingMark ? existingMark.mark : []; 
    }
    
    addMark(subject, mark) {
        const existingMark = this.marks.find(m => m.subject === subject);
        if (existingMark) {
            existingMark.mark.push(mark); 
        } else {
            this.marks.push(new Mark(subject, [mark])); 
        }
    }

    deleteMark(subject){
        const markIndex = this.marks.findIndex(m => m.subject === subject);
        if (markIndex !== -1) {
            this.marks[markIndex].mark = []; 
        }
    }
    
    printInfo() {
        console.log(`Фамилия: ${this.lastName}`);
        console.log(`Имя: ${this.firstName}`);
        console.log("Оценки:");
        
        this.marks.forEach((mark) => {
            console.log(`${mark.subject}: ${mark.mark}`);
        });
    }

}
class Mark{
    constructor(subject,mark){
        this.subject=subject;
        this.mark=mark;
    }
}
const stud = new Student("Иванов", "Иван");
stud.addMark("Математика", 5);
stud.addMark("Русский язык", 4);
stud.addMark("Физика", 5);
stud.addMark("Химия", 3);
stud.printInfo();
console.log(`Средняя оценка: ${stud.averageMark()}`);
const mathMarks = stud.allMark("Математика");
console.log("Оценки по математике:", mathMarks);
stud.deleteMark("Физика");
console.log("После удаления оценок по физике:");
stud.printInfo();