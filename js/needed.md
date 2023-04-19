submitBtn.addEventListener("click", (e) => {
const name = nameInput.value;
const email = emailInput.value;
const message = messageInput.value;
if (!name || !email || !message) {
if (name.match(/^[A-za-z]_\s{1}[A-Za-z]_$/) || name.match(/^[A-za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/) ) {
setError(true,nameError,nameValid)
} else {
setError(false,nameError,nameValid,'Write full name')
}
if (!email.match(/^[A-Za-z\.\_\-[0-9]_[@][a-za-z]_[\.][a-z]{2,4}\$/)) {
setError(false,emailError,emailValid,'Email is not valid')
} else {
setError(true,emailError,emailValid)
}
setError(false,messageError,messageValid,'message is required')
if (message) {
const required = 15;
const left = required - message.length;
setError(false,messageError,messageValid,`${left} more characters required`)

      if (left < 0) {
        setError(true,messageError,messageValid)
      }
    }

}
if (
email.match(/^[A-Za-z\.\_\-[0-9]_[@][a-za-z]_[\.][a-z]{2,4}$/) &&
    (name.match(/^[A-za-z]*\s{1}[A-Za-z]*$/) || name.match(/^[A-za-z]_\s{1}[A-Za-z]_\s{1}[A-Za-z]\*\$/) ) &&
message.length >= 15
) {

setError(true,emailError,emailValid)
setError(true,nameError,nameValid)

console.log('im ready to go where you send me to at the moment');

setError(true,messageError,messageValid)
}

})

               https://formspree.io/f/xknangjb

               function setError(isValid,error,valid,message) {

if (isValid) {
error.innerHTML = ''
valid.innerHTML = `<span class='good'><i class='bx bxs-check-circle'></i>good</span>`
} else {
error.innerHTML = message
valid.innerHTML = `<span class='bad'><i class='bx bxs-error-alt'></i>bad</span>`
}
}
