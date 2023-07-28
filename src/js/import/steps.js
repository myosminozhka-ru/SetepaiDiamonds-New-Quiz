export default class Steps {
  constructor() {
    this.start = document.querySelector(`.q-app__start`);
    this.inners = document.querySelectorAll(`.q-app__inner`);
    this.ring = document.querySelector(`.q-app__inner--ring`);
    this.ringSteps = document.querySelectorAll(`.q-app__inner--ring`);
    this.earrings = document.querySelector(`.q-app__inner--earrings`);
    this.form = document.querySelector(`.q-app__form`);
    this.finish = document.querySelector(`.q-app__finish`);
  }
  openStart() {
    this.start.classList.add('active')
  }
  closeStart() {
    this.start.classList.remove('active')
  }
  openType(name) {
    document.querySelector(`.q-app__inner--${name}`).classList.add('active')
  }
  closeType(name) {
    document.querySelector(`.q-app__inner--${name}`).classList.remove('active')
  }
  toType(name, index) {
    const steps = document.querySelectorAll(`.q-app__inner--${name} .q-step`)
    steps.forEach(i => i.classList.remove('active'))
    steps[index].classList.add('active')
  }
  toStep(index) {
    const steps = document.querySelectorAll(`.q-app__inner.active .q-step`)
    steps.forEach(i => i.classList.remove('active'))
    steps[index].classList.add('active')
  }
  openForm() {
    this.form.classList.add('active')
  }
  closeForm() {
    this.form.classList.remove('active')
  }
  openFinish() {
    this.finish.classList.add('active')
  }
  closeFinish() {
    this.finish.classList.remove('active')
  }
}