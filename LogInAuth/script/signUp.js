function createUser(event) {
  event.preventDefault(); //its imp for stop page reloading when we submit form

  //submit karte time ham validation ko call krenge manually for checking any field is empty or not if empty then form data are not submited =>
  validation("fullname", "fullname-error");
  validation("email", "email-error");
  validation("password", "password-error");

  //here we write singup code or logic

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const userData = {
    //if property and value both name are same then we write shortcut ,single value
    fullname,
    email,
    password,
  };
  //we dont store obj directly in localstorage so we convert obj to str =>
  const payload = JSON.stringify(userData);

  //for uniqeu key name so we use Date.now()=>
  const key = Date.now();

  localStorage.setItem(key, payload);

  Swal.fire({
    icon: "success",
    title: "SignUp Successfully",
    toast: true,
    timer: 1000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
 // reset form data after submited 
 const form = event.target
//  console.log(form);
 form.reset();
 
}

//input fields error sms fun
function validation(inputId, errorId) {
  const input = document.getElementById(inputId);
  const label = document.getElementById(errorId);
  // console.log(input,label);

  const value = input.value.trim();

  if (value.length === 0) {
    label.classList.remove("hidden");
    throw new Error(`${input.name} is required`); // { here i write a logic for if any field is empty then form is not submited }
  } else {
    label.classList.add("hidden");
  }
}
