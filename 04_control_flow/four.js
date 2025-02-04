// const myNums = [1,2,3,4,6,5]

// const newNums = myNums.filter((num)=> {
//    return  num >4
// }
// )

// console.log(newNums)

// const myArr = [1,2,3,4,6,5]
// arr = myArr.map((num) => num * 10)
// console.log(arr)

const myNums = [1,2,3]

const myTotal = myNums.reduce((acc, num) => {acc+num}, 0)

console.log(myTotal);
