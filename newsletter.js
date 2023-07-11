const inputEmail = document.querySelector("#input-email")
const btnInputEmail = document.querySelector("#btn-input-email")
const errorEmail = document.querySelector("#error-email")
const boxPopup = document.querySelector("#box-popup")
const btnPopupClose = document.querySelector("#btn-popup-close")

const showPopup = () => {
  boxPopup.classList.add("active")
  document.body.style.overflowY = "hidden"
}

const closePopup = () => {
  boxPopup.classList.remove("active")
  document.body.style.overflowY = "auto"
}

let isNewsletterTouched = false

inputEmail.addEventListener("input", () => {
  if (!isNewsletterTouched) return
  const { value } = inputEmail
  if (!value || !value.trim() || !value.includes("@")) {
    errorEmail.innerText = "E-mail musi zawierać znak @"
  } else {
    errorEmail.innerText = ""
  }
})
inputEmail.addEventListener("blur", () => {
  isNewsletterTouched = true
  const { value } = inputEmail
  if (!value || !value.trim() || !value.includes("@")) {
    errorEmail.innerText = "E-mail musi zawierać znak @"
  } else {
    errorEmail.innerText = ""
  }
})

const handleEmailSend = () => {
  const { value } = inputEmail

  if (!value || !value.trim() || !value.includes("@")) {
    errorEmail.innerText = "E-mail musi zawierać znak @"
  } else {
    errorEmail.innerText = ""
    showPopup()
    inputEmail.value = ""
  }
}

btnInputEmail.addEventListener("click", handleEmailSend)

btnPopupClose.addEventListener("click", closePopup)
