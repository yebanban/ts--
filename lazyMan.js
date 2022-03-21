// class LazyMan {
//   constructor(name) {
//     this.queue = []
//     console.log(`Hi I am ${name}`)
//     setTimeout(() => {
//       this.runQueue()
//     })
//   }
//   runQueue() {
//     this.queue.reduce((p, c) => p.then(() => c()), Promise.resolve())
//   }
//   eat(food) {
//     this.queue.push(function () {
//       return new Promise(resolve => {
//         console.log(`I am eating ${food}`)
//         resolve()
//       })
//     })
//     return this
//   }
//   sleep(delay) {
//     this.queue.push(function () {
//       return new Promise(resolve => {
//         setTimeout(() => {
//           resolve()
//         }, 1000 * delay)
//       })
//     })
//     return this
//   }
//   sleepFirst(delay) {
//     this.queue.unshift(function () {
//       return new Promise(resolve => {
//         setTimeout(() => {
//           resolve()
//         }, 1000 * delay)
//       })
//     })
//     return this
//   }
// }
// console.log(new LazyMan('abc').eat('eag').eat('food').sleepFirst(1).sleep(5).eat('meinv'))
/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
 var canIWin = function(maxChoosableInteger, desiredTotal) {
  let dp=new Array(Math.pow(2,maxChoosableInteger))
  for(let i=0;i<dp.length;i++){
      dp[i]=new Array(desiredTotal+1)
      for(let j=0;j<dp[i].length;j++){
          dp[i][j]=0
      }
  }
  function dfs(state,desiredTotal){
      if(dp[state][desiredTotal]===1) {
          return true
      }else if(dp[state][desiredTotal]===-1){
          return false
      }
      for(let i=maxChoosableInteger;i>=1;i--){
          let number=1<<(i-1)
          if(!(state&number)){
              if(i>=desiredTotal||!dfs(state|number,desiredTotal-i)){
                  dp[state][desiredTotal]=1
                  return true
              }
          }
      }
      dp[state][desiredTotal]=-1
      return false
  }
  return dfs(0,desiredTotal)

};
console.log(canIWin(10,1));