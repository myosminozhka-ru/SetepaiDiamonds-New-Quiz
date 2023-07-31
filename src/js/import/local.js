const lang = document.querySelector('html').getAttribute('lang')
export default {
  current: lang,
  tampl: {
    ru: "",
    en: "",
  },
  success: {
    ru: "Спасибо, ваше сообщение отправлено",
    en: "Thank you, your message has been sent",
  },
  error: {
    ru: "Возникла ошибка отправки, попробуйте позже",
    en: "There was an error sending, please try again later",
  },
  sent: {
    ru: "Сообщение отправлено",
    en: "Message sent",
  },
  loading: {
    ru: "Загрузка...",
    en: "Loading...",
  },
  captcha: {
    ru: "Ошибка поля капча",
    en: "Captcha field error",
  },
  copied: {
    ru: "Ссылка скопирована!",
    en: "Link copied!",
  },
}