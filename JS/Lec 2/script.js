// let name = "Rohit";
// let age=30;
// console.log(name,age);

// const account=1234;
// // account=23;

// console.log(account)

//old

// var a=10;
// var a=20;

// if (true){
//     var a=20;
// }

// console.log(a)

// function fun(){
//     var c = 20;
// }

// console.log(c)

// data types

// primitive data types (prmitive vs non-primitive)
// here no need to declare dat type explicitly

// number(both int,float) (8bytes/64 bit)(2^53-1 to -25^3)

// let a=10;
// let b=1.23;
// console.log(a,b);
// console.log(typeof a)
// console.log(typeof b)

// string

// let c="strike"
// let d='abd'

// console.log(c,d);
// console.log(typeof d)


// boolean
// let login=true;
// let f=false;
// console.log(login,f);
// console.log(typeof f)


// undefined

// let user;

// console.log(user) //undefined
// console.log(typeof user)

// const p; (cant be undefined)

//bigint

// let num=123423334242323432423423432n;
// console.log(num);
// console.log(typeof num)
//  num=123423334242323432423423432;
// console.log(num);
// console.log(typeof num)

//null

// let weather=null;
// console.log(weather);

// console.log(typeof weather) //a bug 

// null(represents intentional absence of a value) vs undefined(unitentional absence of a value)

// let weather=current_weather("Dwarka");
// 25
// null (when exists but cant fetch currently)
// undefined (when doesnt even exist in the db)

//symbol

// const id1=Symbol("id")
// const id2=Symbol("id")
// console.log(typeof symbol) //an undefined variable
// console.log(typeof id1)
// console.log(id1,id2)
// console.log(id1==id2)

//non-primitive (array,object,function)
//typeof all non-pri. is object only
// let arr=[10,20,11,'rohit',true]

// console.log(arr)

// Rohit 12312 18 gen

//object (key value pair)

let obj={
    name:"Rohit",
    account:12312,
    age:19,
    category:'gen'
}

console.log(obj)
console.log(typeof obj)

//function

let s=function add(){
    console.log('hello')
}

console.log(s)//(func name)
console.log(s()) //func call (undefined?)
s() //func call

console.log(typeof s)//object but why shows function

// a func can be stored in a variable in js


// primitive is immutable(but?)

let a=10
a=20
