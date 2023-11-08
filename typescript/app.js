// // let num1=1
// // function cal(num1:number,num2:number){
// //     return num1+num2
// // }
// // console.log(cal(num1,3))
// // function getTotal(numbers: Array<number>) {
// //     return numbers.reduce((acc, item) => {
// //         return acc + item
// //     }, 0)
// // }
// // console.log(getTotal([3, 2, 1]));
// // const user={
// //     firstname:"Nimesh",
// //     Lastname:"Devaliya",
// //     role:"professor"
// // }
// // console.log(user);
// // number
// // string
// // boolen
// // arry
// // type alias
// // custum type banava mate upyog thai
// type User={
//     name:string;
//     age:number;
//     address?:string;
//     // ?optional che 
// }
// const user:User={
// name:"Nimesh",
// age:30,
// }
// function login(Usedata:User):User{
//     // ----------------------^
//     // void/  return kai nathi te batave
//     // User/ return karvanu che atle
// return Usedata
// }
// console.log(login({name:"Nimesh",age:20}))
// custumze 
//  type ID=number | string;
//  const userid:ID='123';
// interfaces
// interface Ttansaction{
//     payerAccount:number;
//     payeeAccount:number;
// }
// interface BankAcount{
//     accountnumber:number;
//     accountholder:string;
//     balance:number;
//     isActive:boolean;
//     transaction:Ttansaction[]
// }
// const transaction1:Ttansaction={
//     payerAccount:123,
//     payeeAccount:455,
// }
// const transaction2:Ttansaction={
//     payerAccount:123,
//     payeeAccount:455,
// }
// const bankAcount:BankAcount={
//    accountnumber:123,
//     accountholder:"Nimesh Devaliya",
//     balance:4000,
//     isActive:true,
//     transaction:[transaction1,transaction2]
// }
// extend
// jyare  same value bija object ma hoy  tye duplicatene kadhi nakhe
// interface Book {
//     name: string,
//     price: number,
//     filesize: number,
//     format: string
// }
// interface EBook extends Book{
//     // name: string,
//     // price: number,
//     filesize: number,
//     format: string
// }
// interface Audiobook extends EBook {
//     // name: string,
//     // price: number,
//     // filesize: number,
//     // format: string
//     duration: number
// }
// const book: Audiobook= {
//     name: "Atomic",
//     price: 1200,
//     filesize: 300,
//     format: 'pdf',
//     duration: 4,
// }
// marge
// interface Book{
//     name:string;
//     price:number;
// }
// interface Book{
//     size:number;
// }
//  const book:Book={
//     name:"nimesh",
//     price:25,
//     size:45,
//  }
// unions
// type Id=number| string;
// function printID(id:Id){
//     // Narrowing
//     if(typeof id=== 'string'){
//     console.log(id.toUpperCase());
// }
// else{
//     console.log(id);
// }
// }
// printID("nimesh");
function getFirastthre(x) {
    return x.slice(0, 3);
}
console.log(getFirastthre([1, 2, 3, 4]));
