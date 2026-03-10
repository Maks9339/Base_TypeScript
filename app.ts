//Zadania 1 - Variables
let str: string;
let num: number;
let logic: boolean;
let arr: number[];


//Zadania 2 - Average
function average(arr: number[]) {
    let q = 0
    let tot = 0
    for (let i = 0; i < arr.length; i++) {
        q++
        tot += arr[i]
    }
    return tot/q;
}
console.log(average([5, 5, 4, 5, 5]))


//Zadania 3 - Interface
interface Student {
    id: number,
    name: string,
    age: number,
    grades: number[]
}


//Zadania 4 - Object
let obj: Student =  {
    id: 541354253,
    name: 'Ernur',
    age: 17,
    grades: [5, 5, 4, 3, 5]
}


//Zadania 5 - StudentManager
class StudentManager {
    private students: Student[] = [];

    addStudent(name: string, age: number, grades: number[]): void {
        const newStudent: Student = {
            id: this.students.length + 1,
            name,
            age,
            grades
        };
        this.students.push(newStudent);
    }

    displayStudents(): void {
        this.students.forEach(s => {
            console.log(`ID: ${s.id}, Name: ${s.name}, Age: ${s.age}, Grades: [${s.grades.join(', ')}]`);
        });
    }
}

const manager = new StudentManager();
manager.addStudent("Ernur", 17, [5, 4, 5]);
manager.displayStudents();

//Zadania 6 - Generic
function generic(data: any[]) {
    return data
}
console.log(generic([1, 2, 3, true, 'Boo']))


//Zadania 7 - Compilation