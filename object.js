let obj = {
  a: 'a',
  my: {
    x: 'x',
    arr: [3, 2, 1],
    o: { a: 'a' },
  },
  arr: [1, 2, { a: 'a' }],
}

function copy(obj, map = new Map()) {
  if (typeof obj !=='object') return obj
  let o = Array.isArray(obj) ? [] : {}
  if (map.has(obj)) return map.get(obj)
  else {
    map.set(obj, o)
  }
  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      o[property] = copy(obj[property],map)
    }
  }
  return o
}
obj.my.x = obj
let o = copy(obj)
o.my.x=1 
o.my.arr.push(5)
console.log('o', o)
console.log('obj', obj)
