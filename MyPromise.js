const PENDING = Symbol('pending')
const FULFILLED = Symbol('fulfilled')
const REJECTED = Symbol('rejected')
const CALLBACKS = Symbol('callbacks')
function macrotask(callback) {
  setTimeout(callback)
}
class MyPromise {
  constructor(executor) {
    this.state = PENDING
    this.result = null
    this[CALLBACKS] = []
    let resolve = value => {
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.result = value
        macrotask(() => {
          this[CALLBACKS].forEach(({ onFulfilled }) => onFulfilled())
        })
      }
    }
    let reject = reason => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.result = reason
        macrotask(() => {
          this[CALLBACKS].forEach(({ onRejected }) => onRejected())
        })
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => this.result
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : () => {
            throw this.result
          }

    let promise = new MyPromise((resolve, reject) => {
      let resolveResult = thenCallback => () => {
        try {
          var result = thenCallback(this.result)
        } catch (error) {
          reject(error)
        }
        if (result == promise) {
          throw new TypeError('Chaining cycle detected for promise')
        }
        try {
          if (result instanceof MyPromise) {
            result.then(resolve, reject)
          } else {
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }
      switch (this.state) {
        case PENDING:
          this[CALLBACKS].push({
            onFulfilled: resolveResult(onFulfilled),
            onRejected: resolveResult(onRejected),
          })
          break
        case FULFILLED:
          macrotask(resolveResult(onFulfilled))
          break
        case REJECTED:
          macrotask(resolveResult(onRejected))
          break
      }
    })
    return promise
  }
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }
  finally(onFinally) {
    return this.then(
      v => {
        return MyPromise.resolve(onFinally()).then(() => v)
      },
      reason => {
        return MyPromise.resolve(onFinally()).then(() => {
          throw reason
        })
      }
    )
  }
  static resolve(v) {
    if (v instanceof MyPromise) {
      return v
    } else if (typeof v.then === 'function') {
      return new MyPromise((resolve, reject) => {
        v.then(resolve, reject)
      })
    } else {
      return new MyPromise(resolve => {
        resolve(v)
      })
    }
  }
  static reject(reason) {
    return new MyPromise((_, reject) => {
      reject(reason)
    })
  }
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let results = new Array(promises.length)
      let count = 0
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          v => {
            results[index] = v
            if (++count === promises.length) {
              resolve(results)
            }
          },
          reason => {
            reject(reason)
          }
        )
      })
    })
  }
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        MyPromise.resolve(promise).then(resolve, reject)
      })
    })
  }
}


   MyPromise.resolve(2)
    .then(data => {
      console.log(data, 'success')
    })
    .finally(() => {
      return 2
    })
    .catch(err => {
      console.log(err, 'error')
    })

export default MyPromise

