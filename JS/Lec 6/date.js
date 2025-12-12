// Date

// const now = new Date(); // this takes the time from our system
// // but JS doesnt have access to system then how ?
// // how system clock works (hardware level)

// // console.log(now) // UTC time (how this is working)

// // console.log(now.toString()) // GMT+530 (IST)
// // console.log(now.toISOString())
// // console.log(now.toUTCString())
// // console.log(now.toLocaleString())

// console.log(now.getDate())
// console.log(now.getMonth())
// console.log(now.getFullYear())
// console.log(now.getDay()) // -->(0-6,5(Friday))
// console.log(now.getMonth()) // -->(0-11) 9(October)

// const now= new Date(2025,10,30,8,25,16,125); // year month date hour minute second millisecond
// // Date is currently flawed temporal will come later 

// console.log(now.getDay())
// console.log(now) // 8-->9(september) 
// console.log(now.toString())

const now=Date.now()
const date=new Date(1765519084740)
console.log(date)
console.log(new Date(0).toString()) // why start from this
console.log(new Date().toString())
console.log(Date(128323).toString()) // why this way

// Date() vs new Date()


console.log(now)// date in millisecond

// why UTC exist(need of universal time) , to connect whole world and stand at same base point (leetcode example)

// 1765519352314 : Timestamp (timestamps in millisecond go to leetcode server)

const dates= new Date(-1233437382393347485)
const dates1= new Date(-12334373823933)
console.log(dates1)
console.log(dates)

// even yt uploads are done on utc based and then acc to where its been accessed the time will be set their standard time

// HW:
// importance of utc and epoch time
// browsers automatic utc to local conversion