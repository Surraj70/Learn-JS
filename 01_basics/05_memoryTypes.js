// Stack (Primitive) ,       Heap(Non-Primitive)


// STACK EXAMPLE
// let myName = "Suraj"

// let myNickName = myName
// myNickName = 'Roshan'

// console.log(myName)
// console.log(myNickName)


// HEAP EXAMPLE

let userOne = {
    email : "suraj@gmail.com"
    // upi : "123"
}

let userTwo = userOne
userTwo.email = "roshan@gmail.com"

console.log(userOne)
console.log(userTwo)