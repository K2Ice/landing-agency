const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const selectService = document.querySelector("#selectService")
const textAreaMessage = document.querySelector("#textAreaMessage")

const textSendResult = document.querySelector("#textSendResult")

const textErrorName = document.querySelector("#textErrorName")
const textErrorEmail = document.querySelector("#textErrorEmail")
const textErrorPhone = document.querySelector("#textErrorPhone")
const textErrorSelect = document.querySelector("#textErrorSelect")
const textErrorMessage = document.querySelector("#textErrorMessage")

const submitBtn = document.querySelector("#btnSubmit")

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

let isNameTouched = false
let isEmailTouched = false
let isPhoneTouched = false
let isSelectTouched = false
let isMessageTouched = false

nameInput.addEventListener("input", () => {
  if (!nameInput.value.trim() && isNameTouched) {
    textErrorName.innerText = "Podaj imię i nazwisko"
  } else if (nameInput.value.trim().length < 4 && isNameTouched) {
    textErrorName.innerText = "Imię i nazwisko musi mieć min. 4 znaki"
  } else {
    textErrorName.innerText = ""
  }
})

nameInput.addEventListener("blur", () => {
  isNameTouched = true

  if (!nameInput.value.trim()) {
    textErrorName.innerText = "Podaj imię i nazwisko"
  } else if (nameInput.value.trim().length < 4) {
    textErrorName.innerText = "Imię i nazwisko musi mieć min. 4 znaki"
  } else {
    textErrorName.innerText = ""
  }
})

emailInput.addEventListener("input", () => {
  if (!emailInput.value.trim().length && isEmailTouched) {
    textErrorEmail.innerText = "Musisz podać email"
  } else if (!emailInput.value.match(mailFormat) && isEmailTouched) {
    textErrorEmail.innerText = "Podaj email w prawidłowym formacie"
  } else {
    textErrorEmail.innerText = ""
  }
})

emailInput.addEventListener("blur", () => {
  isEmailTouched = true

  if (!emailInput.value.trim().length) {
    textErrorEmail.innerText = "Musisz podać email"
  } else if (!emailInput.value.match(mailFormat)) {
    textErrorEmail.innerText = "Podaj email w prawidłowym formacie"
  } else {
    textErrorEmail.innerText = ""
  }
})

phoneInput.addEventListener("input", () => {
  if (!phoneInput.value.match(phoneRegExp) && isPhoneTouched) {
    textErrorPhone.innerText = "Podaj numer w odpowiednim formacie"
  } else {
    textErrorPhone.innerText = ""
  }
})

phoneInput.addEventListener("blur", () => {
  isPhoneTouched = true
  if (!phoneInput.value.match(phoneRegExp)) {
    textErrorPhone.innerText = "Podaj numer w odpowiednim formacie"
  } else {
    textErrorPhone.innerText = ""
  }
})

selectService.addEventListener("change", () => {
  if (!selectService.value && isPhoneTouched) {
    textErrorSelect.innerText = "Wybierz usługę"
  } else {
    textErrorSelect.innerText = ""
  }
})

selectService.addEventListener("blur", () => {
  isSelectTouched = true
  if (!selectService.value) {
    textErrorSelect.innerText = "Wybierz usługę"
  } else {
    textErrorSelect.innerText = ""
  }
})

textAreaMessage.addEventListener("input", () => {
  if (!textAreaMessage.value.trim().length && isMessageTouched) {
    textErrorMessage.innerText = "Wpisz wiadomość"
  } else if (textAreaMessage.value.trim().length < 10 && isMessageTouched) {
    textErrorMessage.innerText = "Wiadomość musi mieć min. 10 znaków"
  } else {
    textErrorMessage.innerText = ""
  }
})

textAreaMessage.addEventListener("blur", () => {
  isMessageTouched = true
  if (!textAreaMessage.value.trim().length) {
    textErrorMessage.innerText = "Wpisz wiadomość"
  } else if (textAreaMessage.value.trim().length < 10) {
    textErrorMessage.innerText = "Wiadomość musi mieć min. 10 znaków"
  } else {
    textErrorMessage.innerText = ""
  }
})

const handleSubmit = async (e) => {
  e.preventDefault()
  let isError = false
  if (!nameInput.value.trim()) {
    textErrorName.innerText = "Podaj imię i nazwisko"
    isError = true
  } else if (nameInput.value.trim().length < 4) {
    textErrorName.innerText = "Imię i nazwisko musi mieć min. 4 znaki"
    isError = true
  } else {
    textErrorName.innerText = ""
  }

  if (!emailInput.value.trim().length) {
    textErrorEmail.innerText = "Musisz podać email"
    isError = true
  } else if (!emailInput.value.match(mailFormat)) {
    textErrorEmail.innerText = "Podaj email w prawidłowym formacie"
    isError = true
  } else {
    textErrorEmail.innerText = ""
  }

  if (!phoneInput.value.match(phoneRegExp)) {
    textErrorPhone.innerText = "Podaj numer w odpowiednim formacie"
    isError = true
  } else {
    textErrorPhone.innerText = ""
  }

  if (!selectService.value) {
    textErrorSelect.innerText = "Wybierz usługę"
    isError = true
  } else {
    textErrorSelect.innerText = ""
  }

  if (!textAreaMessage.value.trim().length) {
    textErrorMessage.innerText = "Wpisz wiadomość"
    isError = true
  } else if (textAreaMessage.value.trim().length < 10) {
    textErrorMessage.innerText = "Wiadomość musi mieć min. 10 znaków"
    isError = true
  } else {
    textErrorMessage.innerText = ""
  }

  if (isError) return

  textSendResult.innerHTML = "Wysłano poprawnie"
  textSendResult.style.color = "green"

  nameInput.value = ""
  emailInput.value = ""
  phoneInput.value = ""
  selectService.value = ""
  textAreaMessage.value = ""
}

submitBtn.addEventListener("click", handleSubmit)
