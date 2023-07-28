export default class RadioBtns {
  constructor(el) {
    this.inputNodes = el.querySelectorAll(`.q-items__input`);
    this.callbacks = [];
    this.init();
  }
  init() {
    this.changeHandler()
  }
  changeHandler() {
    this.inputNodes.forEach(input => {
      input.addEventListener('change', this.change.bind(this))
    })
  }
  change(e) {
    this.callbacks.forEach(callback => callback(e))
  }
  onChange(callback) {
    this.callbacks.push(callback)
  }
}