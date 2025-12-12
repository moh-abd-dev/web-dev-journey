// String 

// const str1='Rohit';
// const str2= "Rohit Negi"
// const day=18;
// const str3= `Rohit
// Negi${day}`; //Most used way of string 

// console.log(str1,str2,str3)

// const str=`Hello Coder Army`;

// console.log(str.length)
// console.log(str[1])

// str[2] ="2";//immutable no change

// console.log(str)

// str='u'

// upper case 

// const str=`Hello Coder Army Coder`;

// // case change

// console.log(str.toUpperCase()) // original doesnt change ,a new copy is created on which changes will be implemented
// console.log(str.toLowerCase())

// //finding substring

// console.log(str.indexOf('Cod')) // 6 if yes --> else -1 //return the first occurence
// console.log(str.lastIndexOf('Cod'))
// console.log(str.indexOf('Cod',18))
// console.log(str.includes('Cod'))
// console.log(str.includes('cod'))

// extracting substring

// const str=`Hello Coder Army Coder`;

// console.log(str.slice(1))
// console.log(str.slice(1,9)) // 9th index will not be included

// console.log(str.slice(-4))
// console.log(str.slice(-4)) //-1 not include
// console.log(str.slice(-4,-9)) //null string

// console.log(str.substring(2,5)) // (start,end+1) same as slice but we cant markdown the negative index
// console.log(str.substr(1,3)) (start,length)
// const a = "Rohit"
// const b = "Negi"
// const c = a+ " "+b
// console.log(a+b)
// console.log(c)
// console.log(24+'rf'+2)
// console.log(24+2+'rf')
// console.log('rf'+24+2) // left to right

// const str=`Hello Coder Army Coder`;

// console.log(str.replace('ode','iam')) // replace only first occurence
// console.log(str.replaceAll('ode','iam')) 
// console.log(str.replaceAll('ode')) // replace string not given so undefined will go

// trim ( cleaning whitespace) (only start and end not in between)

const str=' roh it '

console.log(str)
console.log(str.trim())

// seperation

const names='Rohit, rahul, abd, raja' 
console.log(names.split(',')) //--> will be splitted and into an array
console.log(names.split(' ')) 
console.log(names.split()) // whole string as own

