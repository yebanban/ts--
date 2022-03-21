const input = document.querySelector('input')
const str = document.querySelector('p')
input.addEventListener('keyup', function () {
  // let reg = /^(?!.*xd)[a-z]+$/
  // let reg = /(?<=<a[\w\W]*?>)(?:[\w\W]*?)(?=<\/a>)/gi
  let reg2 = /<span.*?>(.*?)<\/span>/g
  str.innerHTML = str.innerHTML.replace(reg2, (span, inner) => inner)
  try {
    let reg = new RegExp(this.value.replace(/\\/g, '\\'), 'g')
    str.innerHTML = str.innerHTML.replace(reg, inner => `<span style='color:red'>${inner}</span>`)
  } catch (error) {}
})
document.body.getAttribute
let re
// 替换所有a标签的href
// let reg1 = /<a([\w\W]*?)href="[\w\W]*?"([\w\W]*?)>/gi

// document.body.innerHTML = document.body.innerHTML.replace(
//   reg1,
//   (v, a1, a2) => `<a${a1}href='http://www.baidu.com'${a2}>`
// )

//匹配所有标签名
// let reg = /<([a-zA-Z]+?)\b.*?>.*?<\/\1>/g,
//   res

// while ((res = reg.exec(document.body.innerHTML))) {
//   console.log(res[1])
// }

//修改所有a标签内容
// let reg1=/(?<=<a[\w\W]*?>)([\w\W]*?)(?=<\/a>)/gi;
// let res;
// while((res=reg1.exec(document.body.innerHTML))){
//   console.log(res);
// }
// document.body.innerHTML=document.body.innerHTML.replace(reg1,(p0,p1,p2)=>p1+'a标签内容');
