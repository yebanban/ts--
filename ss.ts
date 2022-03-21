/* function add(...args: number[]) {
  let argsAll = [...args]
  let fn = function (...args: number[]) {
    argsAll = [...argsAll, ...args]
    return fn
  } 
  fn.toString  = (): string  => {
    return argsAll.reduce((res, item) => res + item, 0) as unknown as string
  }
  return fn
}
let a:number=(add(3,1,5)(4)(6)(1,2,3) as unknown  as number)+5
console.log(a+5); */
/* function curry<A, R>(fn: (...args: A[]) => R) {
  let argsAll: A[] = []
  return function curriedFn(...args: A[]) {
    argsAll = [...argsAll, ...args]

    if (fn.length == argsAll.length) {
      return fn(...argsAll) as unknown as Function
    }
    return curriedFn
  }
}
function add(a: number, b: number, c: number) {
  return a + b + c
}
const b = curry(add)
console.log(b(2)(2)(3)) */
class A {
  constructor(public name: string) {}
  show() {
    return this.name
  }
}
class B extends A {
  constructor(name: string) {
    super(name)
  }
}
console.log(Object.getOwnPropertyDescriptor(A.prototype,'constructor'));
 
//123
