
// let num1=1
// function cal(num1:number,num2:number){
//     return num1+num2
// }
// console.log(cal(num1,3))

function getTotal(numbers){
    return numbers.reduce((acc,item)=>{
return acc+item
    },0)
}

console.log(getTotal([3,2,1]));