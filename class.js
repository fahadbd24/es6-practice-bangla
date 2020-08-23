class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "GLab";
    }

}

const student1 = new Student(12, "rakib");
const student2 = new Student(13, "Sakib");
const student3 = new Student(101, "Nahid")
console.log(student1.name,student2.name,student3.name);