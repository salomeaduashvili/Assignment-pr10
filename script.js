const submit = document.getElementById("submit-btn");
const inputs = document.querySelectorAll("input[type='text']");
const checked = document.getElementById("conteiner-check");
const squear = document.getElementById("checkimg");
const selected1 = document.getElementById("select1");
const selected2 = document.getElementById("select2");
const general = document.getElementById("general");
const suport = document.getElementById("support");

let count = 0;
suport.addEventListener("click", () => {
  count++;
  if (count % 2 === 1) {
    suport.style.backgroundColor = "#e0f1e8";
    selected2.style.display = "block";
    selected1.style.display = "none";
    general.style.backgroundColor = "white";
    count++;
    radioInputCheck = true;
  }
});

general.addEventListener("click", () => {
  count++;
  if (count % 2 === 1) {
    general.style.backgroundColor = "#e0f1e8";
    selected1.style.display = "block";
    selected2.style.display = "none";
    suport.style.backgroundColor = "white";
    count++;
    radioInputCheck = true;
  }
});

let checkCount = 0;
let radioInputCheck = false;
let squearCheck = false;

checked.addEventListener("click", () => {
  console.log(checkCount);
  checkCount++;

  if (checkCount % 2 === 1) {
    squear.style.display = "block";
    squear.parentElement.style.border = "none";
    squearCheck = true;
  } else {
    squear.style.display = "none";
    squear.parentElement.style.border = "1px solid #86a2a5";
    squearCheck = false;
  }
});

submit.addEventListener("click", () => {
  let empty = false;

  inputs.forEach((input) => {
    input.text = input.value;

    if (input.value.trim() === "") {
      empty = true;
    }
  });
  if (empty === true || squearCheck === false || radioInputCheck === false) {
    inputs.forEach((input) => {
      input.style.border = "solid 1px #d73c3c";
    });
    const lastError = document.getElementById("lasterror");
    lastError.textContent =
      "To submit this form, please consent to being contacted";
    const messageError = document.getElementById("message-error");
    messageError.textContent = "This field is required";
    const contentError = document.getElementById("content-error");
    contentError.textContent = "Please select a query type";
    const mailError = document.getElementById("mail-error");
    mailError.textContent = "Please enter a valid email address";
    const lastNameError = document.getElementById("lastname-error");
    lastNameError.textContent = "This field is required";
    const nameError = document.getElementById("name-error");
    nameError.textContent = "This field is required";
  } else {
    const messageSent = document.getElementById("sent");
    messageSent.style.display = "block";
  }
});
