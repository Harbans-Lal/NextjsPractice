const form  = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById('submitBtn')

form.addEventListener('submit' , (e) =>{
    e.preventDefault();

    validateInputs();
})

const validateInputs = () =>{
    const userNameVal = userName.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmPassword.value.trim();

    if(userNameVal === ''){
        setError(userName , 'User name is required')
    }else{
        setSuccess(userName)
    }
    if(!validEmail(emailVal)){
        setError(email , 'invalid email')
    }else{
        setSuccess(email)
    }
    if(passwordVal.length <6 ){
        setError(password , "password should at least 6 character")
    }else{
        setSuccess(password)
    }
    if(confirmPasswordVal !== password.value ){
        setError(confirmPassword , "passowrd does not match")
    }else{
        setSuccess(confirmPassword)
    }
}

const setError = (element , message) => {
    const formController = element.parentElement;
    const errorSpan = formController.querySelector(".error");
    errorSpan.innerText = message

    formController.classList.add("error") 
    formController.classList.remove("success")
}

const setSuccess = (element) =>{
    const formController = element.parentElement;
    const errorSpan = formController.querySelector(".error");
    errorSpan.innerText = ""
    formController.classList.add('success')
    formController.classList.remove('error')
}

const validEmail = (ele) =>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(ele);
}