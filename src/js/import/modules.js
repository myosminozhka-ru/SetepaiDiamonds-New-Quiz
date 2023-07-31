import RadioBtns from "%modules%/items/index.js";
import Controller from "%modules%/UI/index.js";
import Form from "%modules%/form/index.js";
import Steps from "./steps.js";
import phoneMask from "./phoneMask";

const step = new Steps()
const feedback = new Form()

let radioTypeValue = null
{
  const el = document.querySelector('.q-app__start')
  const controller = new Controller(el)
  const radioBtns = new RadioBtns(el)
  radioBtns.onChange((e) => {
    controller.ableNext(e)
    radioTypeValue = e.target.value
  })
  controller.onNext((e) => {
    step.closeStart()
    step.openType(radioTypeValue)
    step.toType(radioTypeValue, 0)
  })
}

{
  const inners = document.querySelectorAll('.q-app__inner')
  inners.forEach(inner => {
    const els = inner.querySelectorAll('.q-step')
    els.forEach((element, index) => {
      const el = element
      const controller = new Controller(el)
      const radioBtns = new RadioBtns(el)
      radioBtns.onChange((e) => {
        controller.ableNext(e)
      })
      controller.onNext((e) => {
        if (index === 0) {
          step.toStep(index + 1)
        } else if (index === els.length - 1) {
          step.closeType(radioTypeValue)
          step.openForm()
        } else {
          step.toStep(index + 1)
        }
      })
      controller.onPrev((e) => {
        if (index === 0) {
          step.closeType(radioTypeValue)
          step.openStart()
        } else if (index === els.length - 1) {
          step.toStep(index - 1)
        } else {
          step.toStep(index - 1)
        }
      })
    });
  })
}

{
  const el = document.querySelector('.q-app__form')
  const controller = new Controller(el)
  const img = document.querySelector('.q-finish__img img')
  controller.ableNext()
  controller.onNext((e) => {
    feedback.initEl(document.querySelector(`.q-app__inner--${radioTypeValue}`))
    feedback.submit().then(res => {
      if (res.status === 'ok') {
        img.setAttribute('src', img.getAttribute('src') + radioTypeValue + '.png')
        res.img ? img.setAttribute(res.img) : null;
        step.closeForm()
        step.openFinish()
      }
    })
  })

  controller.onPrev((e) => {
    step.closeForm()
    step.openType(radioTypeValue)
  })
}

window.qapp = {
  step,
  feedback,
  phoneMask: phoneMask('[type="tel"]'),
}