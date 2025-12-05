// Operators,Loops,Conditionals

// Operator
// Arithmetic

// console.log(2+5)
// console.log(2-5)
// console.log(2*5)
// console.log(5/2)
// console.log(2**5)
// console.log(5%2)

// Assignment Operators (+=,-=,*=,/=,**=,%=,=)

// let x=20
// let y=30

// // y=y-x
// y+=x
// console.log(y)

// Comparision Operators(>,<,>=,<=,==)
// === ?

// let x=20
// let y="20"

// console.log(y>x)
// console.log(y==x)
// console.log(y===x) or y!==x// first checks type then compares the same type variables or datas (strict checking)
// console.log(y==x) // comparing but if a string can convert to number and comparable so js does that

// let z="10";
// let a=Number(z)

// console.log(typeof z)

// let a='121ac'
// let b=Number(a)

// console.log(b,typeof b) //as b is not a number but trying to be converted into one
// console.log(0/0) // type of NAN is number only

//Number --> string

// let c=10
// let d=String(c)

// console.log(d,typeof d)

// Boolean --> Number

// let a=true
// console.log(Number(a))
// console.log(Number(false))

// console.log(Number(null)) --> 0
// console.log(Number(undefined)) --> NaN

//Ecma script(JS rules,but implementation can defer acc. to different browsers)

// console.log(String(true),typeof String(true))

// Boolean conversion

// console.log(Boolean(0))
// console.log(10)

// console.log(Boolean(''))
// console.log(Boolean('s'))

// let a=.1
// let b=.2

// let c=a+b

// console.log(c,c==0.3) //-->false ,but why? (problem of handling decimal values in cs)
// due to decimal binary conversion discrepencies (some decimal to binary conversion are endless so exact binary conversion is not done and only approx result we will get)

// 8 byte storage in js

// solving floating point precision issue --> converting 0.1 and 0.2 into string and then convert each char(digit) and add 

// 1. null is loosely equal to undefined

// console.log(null==undefined)
// console.log(null===undefined)
// console.log(typeof null)
// console.log(typeof undefined)

// console.log(null==0)
// console.log(null=='')
// console.log(null==false)

// >,<,>=,<= (null-->Number(0),undefined-->NaN) 
// console.log(null>=0)
// console.log(null<=0)
// console.log(null==0,null===0,Number(0),0)
// console.log(null>0)
// console.log(null<0)

// console.log(null>=undefined)
// console.log(undefined>=0)

// console.log('Rohit'>'mohit','Rohit'>'Mohit') // ascii value based character by character comparision

// Comparision done only on Number (any data type first convert )

// console.log('10'>=10)
// console.log('10'>=true)
// console.log('1'==true,Number(null),0,'0'==null,'0'==0)
// console.log('rohit'=='rohit','rohit'==='rohit')
// console.log(null>='')

// why null==0 is not true?

// console.log(Number(null),0,'0'==null,'0'==0)
// console.log(Number(null)==0)

// console.log(NaN==NaN) //--> false

// Loop

// for loop

//post increment/decrement i++/i--
//pre increment/decrement ++i/--i

// let i=0
// console.log(i++)
// console.log(i)
// console.log(++i)

// for(let i=0;i<=10;i++){
//     console.log(i)
// }

// let i=0

// while loop

// while(i<10){
//     console.log(i)
//     i++
// }

// do while loop

// let i=0

// do{
//     console.log(i)
//     i++
// }while(i<10);

// let age=15;

// if (age>=18){
//     console.log('Eligible for voting')
// }
// else{
//     console.log('Not Eligible for voting')
// }

//kid young old 

// let age=20

// if (age<18){
//     console.log('kid')
// }else if(age>60){
//     console.log('old')
// }else{
//     console.log('young')
// }

// logical operator (&& ,||)

// console.log(true&& true)
// console.log(false || false)



let a='rohit'
let b='mohit'

console.log(0||a)
console.log(0&&a)
console.log(a&&b)
console.log(a&&b||a)
console.log(a&&b&&a) //--> returns the one which make it true first asap

// !=

console.log(4!=5)

// HW : AND:&& ,OR:||
// HW: 0.3==0.3 problem
