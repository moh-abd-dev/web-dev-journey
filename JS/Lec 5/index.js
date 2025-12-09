// Number

// let a=10
// let b=23.23456
// console.log(a)
// console.log(b.toFixed(1) , typeof b.toFixed(2) )//string it is and it is new copy and value of b is not changed becoz it is number and primitive
// console.log(b)

// console.log(b.toPrecision(10))//it will pad the number with 0 as required
// console.log(typeof b.toString())

// let a=new Number(20); //will not use this generally
// let b=new Number(20)
// let b=20;

// console.log(typeof a,typeof b)
// console.log(a==b)//compares the address of these two not the value

// let obj1={
//     name:'Rohit'
// }
// let obj2={
//     name:'Rohit'
// }

// let obj2=obj1

// console.log(obj1==obj2)

// in primitive ,data copy and in object refernce copy
// primitive data will be compared and copy by/on value and non - primitve will be compared on reference

// let r=0
// let p=new Number(0)
// // boolean conversion of any object will return true except null

// console.log(r==p) // true but why? becoz address are compared not value as it is comparision between non boolean value(that has an address) and object
// console.log(Boolean(p)) // it has address so it will be true
// console.log(Boolean(null))
// console.log(false==Boolean({})) // comparision between boolean value and boolean of object returns false 
// console.log(false==p) // (so false also has address then?) and thats why this is true
// console.log(r==Boolean(0))



// console.log(Math.abs(-4))
// console.log(Math.PI)
// console.log(Math.LN10)
// console.log(Math.SQRT2)
// console.log(Math.ceil(2.3))
// console.log(Math.floor(2.3))
// console.log(Math.max(1,2,3))

// console.log(Math.random()) // generates value between 0 and 1 (1 not included)

// // random from 0 to 9
// c=Math.random()
// console.log(c,Math.floor(c*10)+1) //what if it generates number < 10^-1

// // How to generate number 1 to 6 (one way if else)

// console.log(Math.floor((Math.floor(c*10)+1)/2)+1) 
// console.log(c,Math.floor(c*6)+1) //--> range is 0 to 5 by adding 1

// Math.floor(Math.random()*totalnoofoutcome)+shift --> Math.floor(Math.random()*(max-min+1))+min

// 15-25

// console.log(Math.floor(Math.random()*11)+15) 

// Can we use it for otp generation :4 digit :1000-9999

// console.log(Math.floor(Math.random()*9)+1,Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10))

// console.log(Math.floor(Math.random()*(9999-1000+1))+1000) 

// This is not secure? It is not random? It's an illusion
// Why we dont use this and why crypto library

// random funtion for 0 to 0.99999 by for loop

//first some number is taken and then on it some logic will be doen to make it some value but it will change the value only when input is different 
// and input(seed value) is based on time(in some milliseconds) and hence it is guessable no secure

//crypto library for seed --> current ram usage+mouse pointer +.....
















// HW--> how we can use toPrecision , toString method on a number? 
// HW--> crypto library
// HW--> Whose time will be taken as input
