const module = (function () {
  let moduleList = []
  function define(name, moduleNameList, action) {
    let modules = moduleNameList.map(moduleName => moduleList[moduleName])
    moduleList[name] = action(...modules)
  }
  return { define }
})()

module.define('a', [], function () {
  return {
    max(arr, key) {
      return arr.reduce((pre, cur) => (pre[key] < cur[key] ? cur : pre))
    },
    min(arr, key) {
      return arr.reduce((pre, cur) => (pre[key] > cur[key] ? cur : pre))
    },
    sort(arr, key, order = 'asc') {
      arr.sort((a, b) => (order == 'asc' ? a[key] - b[key] : b[key] - a[key]))
    },
  }
})
module.define('b', ['a'], function (a) {
  let data = [
    {
      name: 'js',
      grade: 58,
      price: 45,
    },
    {
      name: 'c++',
      grade: 62,
      price: 88,
    },
    {
      name: 'ts',
      grade: 95,
      price: 32,
    },
  ]
  a.sort(data, 'price')
  console.log(a.min(data, 'grade'))
  console.table(data)
  a.sort(data, 'price','des')
  console.table(data)
  a.sort(data, 'grade','des')
  console.table(data)
})
