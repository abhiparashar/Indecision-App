//arguments object - no longer bound with arrow functions
const add = function(a,b){
    console.log(arguments)
    return a+b;
}
console.log(add(5, 100, 1000)) 
//0: 5
//1: 100
//2: 1000
//length: 3

//this keyword no longer bound
// const user = {
//     name:'Andrew',
//     cities:['philadelphia','New York','dublin'],
//     printplacesLived: function(){
//         this.cities.forEach((city)=>{
//             console.log(this.name+ ' has lived in' + city)
//         })
//     }
// }
//user.printplacesLived()

//map function
const user = {
    name: 'Andrew',
    cities:['philadelphia','New York','dublin'],
    printplacesLived(){
            return 
    }
}
