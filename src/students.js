class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}

const students = [
    new Student("Sponge Bob", 6),
    new Student("Son Goku", 3),
    new Student("Mickey Mouse", 8.5),
    new Student("Homer Simpson", 4),
    new Student("Woodpecker", 9.5),
    new Student("Light Yagami", 10),
    new Student("Naruto Uzumaki", 5)
];

function approvedStudents() {
    return students.filter(student => student.grade >= 6)
        .map(student => student.name);
};

console.log(approvedStudents());