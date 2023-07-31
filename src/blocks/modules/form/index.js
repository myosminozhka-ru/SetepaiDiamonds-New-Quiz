import validationLocal from '../../../js/libs/validationLocal'
import local from '../../../js/import/local'
const {keys, dictLocale, regex} = validationLocal
function validate() {
  if (!document.querySelector('.q-form__form')) return
  const validation = new JustValidate('.q-form__form', {
    validateBeforeSubmitting: true,
  }, dictLocale);
  validation.setCurrentLocale(local.current);
  validation
    .addField('[name="name"]', [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: keys.minLength,
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: keys.maxLength,
      },
      {
        rule: 'required',
        errorMessage: keys.required,
      },
    ])
    .addField('[name="tel"]', [
      {
        rule: 'required',
        errorMessage: keys.required,
      },
      {
        rule: 'customRegexp',
        value: regex.tel,
        errorMessage: keys.tel,
      },
    ])
    .addField('[name="email"]', [
      {
        rule: 'required',
        errorMessage: keys.emailRequired,
      },
      {
        rule: 'customRegexp',
        value: regex.email,
        errorMessage: keys.email,
      },
    ])
  return validation
}
export default class QForm {
  constructor(el) {
    this.formNode = document.querySelector('.q-form__form');
    this.formBtn = document.querySelector('.q-controller__btn--submit');
    this.inputNodes = document.querySelectorAll('.q-form__item input');
    this.action = this.formNode ? this.formNode.getAttribute('action') : null;
    this.el = el
    this.formType = document.querySelector('.q-app__start');
    this.validation = validate()
    this.invalid = false
    this.init()
  }
  init() {
    console.log(this.validation, validate)
    this.validation.onValidate(evt => {
      if (evt.isValid) {
        this.invalid = false
      } else {
        this.invalid = true
      }
    })
  }
  initEl(el) {
    this.el = el
  }
  submitHandler() {
    this.formBtn ? this.formBtn.addEventListener('click', this.submit.bind(this)) : null;
  }
  async submit(e) {
    e?.preventDefault();
    if (this.invalid) {
      alert('Fill in all required fields')
      return
    }
    const formData = new FormData(this.formNode)
    const formDataStep = new FormData(this.el)
    const formDataType = new FormData(this.formType)
    for (const pair of formDataStep.entries()) {
      formData.append(pair[0], pair[1])
    }
    for (const pair of formDataType.entries()) {
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