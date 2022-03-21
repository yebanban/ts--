class Animation {
  constructor(el) {
    this.el = el
    this.defaultHeight = this.height
    this.timeout = 10
  }
  get height() {
    return window.getComputedStyle(this.el).height.slice(0, -2) * 1
  }
  set height(height) {
    this.el.style.height = height + 'px' /* 
      console.log(this.el.style.height) */
  }
  hide() {
    return new Promise((resolve) => {
      let timer = setInterval(() => {
        if (this.height <= 0) {
          clearInterval(timer)
          resolve()
          return
        }
        this.height = this.height - 1
      }, this.timeout)
    })
  }
  show() {
    return new Promise((resolve) => {
      let timer = setInterval(() => {
        if (this.height >= this.defaultHeight) {
          clearInterval(timer)
          resolve()
          return
        }
        this.height = this.height + 1
      }, this.timeout)
    })
  }
}
class Slide {
  constructor(el) {
    this.el = document.querySelector(el)
    this.links = this.el.querySelectorAll('dt')
    this.panels = [...this.el.querySelectorAll('dd')].map(el => new Panel(el))
    this.bind()
  }
  bind() {
    this.links.forEach((el, i) => {
      el.addEventListener('click', () => {
        this.action(i)
      })
    })
  }
  action(i) {
    Panel.hideAll(this.panels.filter((el, index) => index != i)).then(() => {
      this.panels[i].show().then(()=>console.log(i))
    })
  }
}
class Panel extends Animation {
  static num = 0
  constructor(el) {
    super(el)
  }
  static hideAll(panels) {
    return new Promise((resolve) => {
      if (Panel.num > 0) {
        return
      }
      panels.forEach(panel => {
        Panel.num++
        panel.hide().then(() => {
          Panel.num--
        })
      })
      resolve()
    })
  }
}
window.onload = () => {
  let slide = new Slide('.slide')
  console.log(slide.panels)
}
