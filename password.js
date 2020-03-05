document.addEventListener("DOMContentLoaded", () => {
  let firstPassword = document.querySelector("#firstPassword");
  let confirmPassword = document.querySelector("#confirmPassword");
  let validate = document.querySelector("#validate");
  let errorMessage = document.querySelector("#errorMessage");
  validate.addEventListener("click", () => {
    let error = "";
    if(firstPassword.value.length < 8)
    {
      error = error+"password length must be at least 8 characters; "
    }
    if(firstPassword.value != confirmPassword.value)
    {
      error = error+"Passwords do not match; "
    }
    if(error == "")
    {
      error = "good password"
    }
    errorMessage.innerText = error;
  })
})
