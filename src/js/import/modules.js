import RadioBtns from "%modules%/items/index.js";
import Controller from "%modules%/UI/index.js";
import Form from "%modules%/form/index.js";


const radioBtns = new RadioBtns()
const controller = new Controller()
const form = new Form()

radioBtns.onChange((e, data) => {
  controller.setQuery(e, data)
})
window.qapp = {
  radioBtns,
  controller,
  form
}