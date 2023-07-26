export default class Controller {
  constructor() {
    this.prevBtnNode = document.querySelector('.q-controller__btn.q-controller__btn--prev');
    this.nextBtnNode = document.querySelector('.q-controller__btn.q-controller__btn--next');
    this.initPath = this.nextBtnNode.getAttribute('href');
  }
  setQuery(e, data) {
    let currentQuery = this.nextBtnNode.getAttribute('href')
    const url = new URL(window.location.origin + currentQuery)
    const urlParams = new URLSearchParams(url.search);
    const pathname = url.pathname.replace(/\/{2,}/, '/')
    if (urlParams.size === 0) {
      this.nextBtnNode.setAttribute('href', pathname + '?' + data.string)
    } else {
      const nameHas = urlParams.has(data.name)
      if (nameHas) {
        urlParams.set(data.name, data.value)
        this.nextBtnNode.setAttribute('href', pathname + '?' + urlParams.toString())
      } else {
        urlParams.set(data.name, data.value)
        this.nextBtnNode.setAttribute('href', currentQuery + '&' + data.string)
      }
    }
    this.ableNext()
  }
  disableNext(e, data) {
    this.nextBtnNode.classList.add('q-disabled')
  }
  ableNext() {
    this.nextBtnNode.classList.remove('q-disabled')
  }
}