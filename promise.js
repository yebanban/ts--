// function queue(promises) {
//   promises.reduce((promise, cur) => promise.then(() => cur()), Promise.resolve())
// }
// function A() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve()
//       console.log('a')
//     }, 1000)
//   })
// }
// function B() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve()
//       console.log('b')
//     }, 1000)
//   })
// }
// function C() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve()
//       console.log('c')
//     }, 1000)
//   })
// }
// queue([A, B, C, B, A])
// function get(){
//   return new Promise(resolve=>{
//     setTimeout(()=>{
//       resolve(2)
//     },1000)
//   })
// }

// async function print(){
//   let user=await get()
//   console.log(user);
//   return user
// }
// console.log(print());

// resolve 的值是 undefined

let a=["(((())))","()((()))","((()))()","(()(()))","()()(())","()(())()","((())())","(())()()","((()()))","()(()())","(()())()","(()()())","()()()()"]
let b=["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
console.log(b.filter(v=>a.find(x=>v==x)==undefined));