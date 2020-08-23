class Parent{
    constructor(){
        this.fatherName = "schwanegger";
    }
}




class Child extends Parent {
    constructor (name){
        super();
        this.name = name;
        
    }
    getFullName(){
        return this.name + " " + this.fatherName ;
    }

}

const baby = new Child("Tom Hanks");
const baby2 = new Child ("Leonadro Di Caprio")
console.log(baby.getFullName());
console.log(baby2.getFullName());