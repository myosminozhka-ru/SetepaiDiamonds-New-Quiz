export default class Controller {
  constructor(el) {
    this.prevBtnNode = el.querySelector(`.q-controller__btn.q-controller__btn--prev`);
    this.nextBtnNode = el.querySelector(`.q-controller__btn.q-controller__btn--next`);
    this.nextCallbacks = [];
    this.prevCallbacks = [];
    
    this.init();
  }
  init() {
    this.nextHandler()
    this.prevHandler()
  }
  nextHandler() {
    this.nextBtnNode ? this.nextBtnNode?.addEventListener('click', this.next.bind(this)) : null;
  }
  prevHandler() {
    this.prevBtnNode ? this.prevBtnNode?.addEventListener('click', this.prev.bind(this)) : null;
  }
  next(e) {
    this.nextCallbacks.forEach(callback => callback(e))
  }
  prev(e) {
    this.prevCallbacks.forEach(callback => callback(e))
  }
  disableNext(e, data) {
    this.nextBtnNode.classList.add('q-disabled')
  }
  ableNext() {
    this.nextBtnNode.classList.remove('q-disabled')
  }
  onNext(callback) {
    this.nextCallbacks.push(callback)
  }
  onPrev(callback) {
    this.prevCallbacks.push(callback)
  }
}