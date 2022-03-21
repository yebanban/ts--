window.onload = () => {
  class Validate {
    max(value, len) {
      return value.length <= len
    }
    min(value, len) {
      return value.length >= len
    }
    isNumber(value) {
      return /^\d+$/.test(value)
    }
  }
  function View() {
    this.modelProxy = new Proxy(
      {},
      {
        get(obj, property) {},
        set(obj, property, value) {
          document.querySelectorAll(`[v-model="${property}"]`).forEach(el => {
            el.value = value
          })
          document.querySelectorAll(`[v-bind="${property}"]`).forEach(el => {
            el.innerHTML = value
          })
        },
      }
    )
    /* this.validateProxy=new Proxy() */
  }
  View.prototype.init = function () {
    const modelInputs = document.querySelectorAll('[v-model]')
    const validateInputs = document.querySelectorAll('[validate]')
    const validate = new Validate()
    modelInputs.forEach(el => {
      el.addEventListener('keyup', e => {
        this.modelProxy[e.target.getAttribute('v-model')] = e.target.value
      })
    })
    validateInputs.forEach(el => {
      el.addEventListener('keyup', e => {
        let state = e.target
          .getAttribute('rule')
          .split(',')
          .every(rule => {
            let info = rule.split(':')
            return validate[info[0]](e.target.value,info[1])
          })
        if (state) {
          e.target.style.backgroundColor = 'white'
        } else {
          e.target.style.backgroundColor = 'red'
        }
      })
    })
  }
  let view = new View()
  view.init()
}


