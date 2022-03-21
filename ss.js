var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null')
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
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
var A = /** @class */ (function () {
  function A(name) {
    this.name = name
  }
  A.prototype.show = function () {
    return this.name
  }
  return A
})()
var B = /** @class */ (function (_super) {
  __extends(B, _super)
  function B(name) {
    return _super.call(this, name) || this
  }
  return B
})(A)
console.log(Object.getOwnPropertyDescriptor(A.prototype, 'constructor'))
//123
