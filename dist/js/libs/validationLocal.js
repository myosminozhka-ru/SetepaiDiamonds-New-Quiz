const regex = {
  email: /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Zа-яА-Я\-0-9]+\.)+[a-zA-Zа-яА-Я]{2,}))$/gi,
  name: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/gi,
  tel: /^\+1 \((\d){3}\) (\d|-){9}/gi,
}

const keys = {
  required: 'Name is required',
  minLength: 'Name is too short',
  maxLength: 'Name is too long',
  emailRequired: 'Email is required',
  email: 'Email is invalid',
  integer: 'Value should be a number',
  tel: 'Phone number is invalid',
  name: 'Name is invalid',
  minFilesCount: 'File is too short',
  maxFilesCount: 'File is too long',
  file: 'File is invalid',
}

const dictLocale = [
  {
    key: keys.required,
    dict: {
      ru: 'Поле обязательно для заполнения',
      en: 'The field is required',
    },
  },
  {
    key: keys.name,
    dict: {
      ru: 'Некорректное значение',
      en: 'Incorrect value',
    },
  },
  {
    key: keys.minLength,
    dict: {
      ru: 'Поле должно содержать минимум :value символа',
      en: 'The field must contain a minimum of :value characters',
    },
  },
  {
    key: keys.maxLength,
    dict: {
      ru: 'Поле должно содержать максимум :value символа',
      en: 'The field must contain a maximum of :value characters',
    },
  },
  {
    key: keys.emailRequired,
    dict: {
      ru: 'Электронная почта обязательна',
      en: 'Email is required',
    },
  },
  {
    key: keys.email,
    dict: {
      ru: 'Электронная почта недействительна',
      en: 'Email has invalid format',
    },
  },
  {
    key: keys.integer,
    dict: {
      ru: 'Значение должно быть числом',
      en: 'Value should be a number',
    },
  },
  {
    key: keys.tel,
    dict: {
      ru: 'Номер телефона недействителен',
      en: 'Phone number has invalid format',
    },
  },
  {
    key: keys.minFilesCount,
    dict: {
      ru: 'недействителен',
      en: 'invalid',
    },
  },
  {
    key: keys.maxFilesCount,
    dict: {
      ru: 'Не более :value файлов',
      en: 'No more than :value files',
    },
  },
  {
    key: keys.file,
    dict: {
      ru: 'Неверный формат или размер файла больше 10МБ',
      en: 'Invalid format or file size larger than 10MB',
    },
  },
];

export default {
  dictLocale,
  keys,
  regex
}