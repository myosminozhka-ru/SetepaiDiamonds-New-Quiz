export default class QForm {
  constructor(el) {
    this.formNode = document.querySelector('.q-form__form');
    this.formBtn = document.querySelector('.q-controller__btn--submit');
    this.inputNodes = document.querySelectorAll('.q-form__item input');
    this.action = this.formNode ? this.formNode.getAttribute('action') : null;
    this.el = el
    
  }
  init() {
    this.submitHandler()
  }
  initEl(el) {
    this.el = el
  }
  submitHandler() {
    this.formBtn ? this.formBtn.addEventListener('click', this.submit.bind(this)) : null;
  }
  async submit(e) {
    e?.preventDefault();
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
    const formData = new FormData(this.formNode)
    const formDataStep = new FormData(this.el)
    for (const pair of formDataStep.entries()) {
      formData.append(pair[0], pair[1])
    }
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    const response = await fetch(this.action, {
      method: 'POST',
      body: formData,
    })
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      return {
        status: 'ok'
      }
    } else {
      alert("ERROR HTTP: " + response.status);
    }
  }
}