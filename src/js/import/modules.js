import RadioBtns from "%modules%/items/index.js";
import Controller from "%modules%/UI/index.js";
import Form from "%modules%/form/index.js";
import Steps from "./steps.js";

const step = new Steps()
const feedback = new Form()

let radioTypeValue = null
{
  const el = document.querySelector(".q-app__start")
  const controller = new Controller(el)
  const radioBtns = new RadioBtns(el)
  radioBtns.onChange((e) => {
    controller.ableNext(e)
    radioTypeValue = e.target.value
  })
  controller.onNext(() => {
    step.closeStart()
    step.openType(radioTypeValue)
    step.toType(radioTypeValue, 0)
  })
}

{
  const inners = document.querySelectorAll(".q-app__inner")
  inners.forEach(inner => {
    const els = inner.querySelectorAll(".q-step")
    els.forEach((element, index) => {
      const el = element
      const controller = new Controller(el)
      const radioBtns = new RadioBtns(el)
      radioBtns.onChange((e) => {
        controller.ableNext(e)
      })
      controller.onNext(() => {
        if (index === 0) {
          step.toStep(index + 1)
        } else if (index === els.length - 1) {
          step.closeType(radioTypeValue)
          step.openForm()
        } else {
          step.toStep(index + 1)
        }
      })
      controller.onPrev(() => {
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
  const el = document.querySelector(".q-app__form")
  const controller = new Controller(el)
  const img = document.querySelector(".q-finish__img img")
  controller.ableNext()
  controller.onNext(() => {
    feedback.initEl(document.querySelector(`.q-app__inner--${radioTypeValue}`))
    feedback.submit().then(res => {
      if (res?.status === "ok") {
        img.setAttribute("src", img.getAttribute("src") + radioTypeValue + ".png")
        if(res.img){
          //Предполагаем, что res.img - объект с ключом и значением атрибута, который нужно установить
          for (const key in res.img) {
            if (Object.prototype.hasOwnProperty.call(res.img, key)) {
              img.setAttribute(key, res.img[key]);
            }
          }
        }
        step.closeForm()
        step.openFinish()
      }
    }).catch(error => {
      console.error("Error in onNext:", error); // Обрабатываем ошибку, если она возникнет
    });
  })

  controller.onPrev(() => {
    step.closeForm()
    step.openType(radioTypeValue)
  })
}

window.qapp = {
  step,
  feedback,
}
