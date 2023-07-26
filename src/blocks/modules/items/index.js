export default class RadioBtns {
  constructor() {
    this.inputNodes = document.querySelectorAll('.q-items__input');
    this.callbacks = [];
    this.init();
  }
  init() {
    this.changeHandler()
  }
  changeHandler() {
    this.inputNodes.forEach(input => {
      input.addEventListener('change', this.getNextLinkQuery.bind(this))
    })
  }
  getNextLinkQuery(e) {
    const target = e.target
    const name = target.name
    const value = target.value
    const obj = {
      name,
      value,
      string: `${name}=${value}`
    }
    this.callbacks.forEach(callback => callback(e, obj))
    return obj;
  }
  onChange(callback) {
    this.callbacks.push(callback)
  }
}