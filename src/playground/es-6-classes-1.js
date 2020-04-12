class Person{
    constructor(name="anonymous",age=0){
        this.name  = name || 'test' //function default
        this.age  = age;
    }
    //getGreeting(){
        //return ' Hi ' + this.name + ' ! '
        // return `Hi. I am ${this.name} !`
    //}
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age)
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        //return 'testing'
        let description = super.getDescription()
        //return description
        if(this.hasMajor()){
            description += `their major is ${this.major}.`
        }
    }
}

//const me = new Person('andrew mead',18)
const me = new Student('andrew mead',26,"computer science")
//console.log(me.getGreeting())
//console.log(me.getDescription())
//console.log(me.hasMajor())
console.log(me.getDescription())

//const other = new Person()
const other = new Student()
//console.log(other.getGreeting())
//console.log(other.getDescription())
//console.log(other.hasMajor())
console.log(other.getDescription())