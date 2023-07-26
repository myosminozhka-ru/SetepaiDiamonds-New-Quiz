export default class QForm {
  constructor() {
    this.formNode = document.querySelector('.q-form__form');
    this.formBtn = document.querySelector('.q-controller__btn--submit');
    this.inputNodes = document.querySelectorAll('.q-form__item input');
    this.action = this.formNode ? this.formNode.getAttribute('action') : null;
    this.init();
  }
  init() {
    this.submitHandler()
  }
  submitHandler() {
    this.formBtn ? this.formBtn.addEventListener('click', this.submit.bind(this)) : null;
  }
  async submit(e) {
    e.preventDefault();
    let invalid = false
    this.inputNodes.forEach(element => {
      if (element.value === '') {
        invalid = true
      }
    });
    if (invalid) {
      alert('Fill in all required fields')
      return
    }
    const href = this.formBtn.getAttribute('href')
    const fromData = new FormData(this.formNode)
    fromData.append('href', href)
    const response = await fetch(this.action, {
      method: 'POST',
      body: fromData,
    })
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      window.location = href
    } else {
      alert("ERROR HTTP: " + response.status);
    }
  }
}