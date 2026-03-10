//Zadania 1 - Variables
var str;
var num;
var logic;
var arr;
//Zadania 2 - Average
function average(arr) {
    var q = 0;
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        q++;
        tot += arr[i];
    }
    return tot / q;
}
console.log(average([5, 5, 4, 5, 5]));
//Zadania 4 - Object
var obj = {
    id: 541354253,
    name: 'Ernur',
    age: 17,
    grades: [5, 5, 4, 3, 5]
};
//Zadania 5 - StudentManager
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.students = [];
    }
    StudentManager.prototype.addStudent = function (name, age, grades) {
        var newStudent = {
            id: this.students.length + 1,
            name: name,
            age: age,
            grades: grades
        };
        this.students.push(newStudent);
    };
    StudentManager.prototype.displayStudents = function () {
        this.students.forEach(function (s) {
            console.log("ID: ".concat(s.id, ", Name: ").concat(s.name, ", Age: ").concat(s.age, ", Grades: [").concat(s.grades.join(', '), "]"));
        });
    };
    return StudentManager;
}());
var manager = new StudentManager();
manager.addStudent("Ernur", 17, [5, 4, 5]);
manager.displayStudents();
//Zadania 6 - Generic
function generic(data) {
    return data;
}
console.log(generic([1, 2, 3, true, 'Boo']));
//Zadania 7 - Compilation
