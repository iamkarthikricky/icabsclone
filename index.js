var userNameEl = document.getElementById('userName');
var nameErrorEl = document.getElementById('nameError');

var userEmailEl = document.getElementById('userEmail');
var emailErrorEl = document.getElementById('emailError');

var userPhoneEl = document.getElementById('userPhone');
var phoneErrorEl = document.getElementById('phoneError');

var dropdownSelectionEl = document.getElementById('dropdownSelection');
var serviceErrorEl = document.getElementById('serviceError');


var userSubjectEl = document.getElementById('userSubject');

var userMessageEl = document.getElementById('userMessage');
var messageErrorEl = document.getElementById('messageError');

var successMsgEl = document.getElementById('successMsg');


var validName =validEmail = validMobile = validService = validMessage = false;

var formEl=document.getElementById('formSubmit')

const emailValidator= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileValidator = /^\d{10}$/;

const nameValidation=()=> userNameEl.value=="" ? nameErrorEl.textContent="Please enter your name" :  (nameErrorEl.textContent="" , validName=true);
const emailValidation=()=> emailValidator.test(userEmailEl.value) ? ( emailErrorEl.textContent="" , validEmail =true) :  emailErrorEl.textContent="Please enter valid email address";
const mobileValidation=() => mobileValidator.test(userPhoneEl.value) ? ( phoneErrorEl.textContent="",validMobile=true ) : phoneErrorEl.textContent="Please enter mobile number";
const serviceValidation=() => dropdownSelectionEl.value =='Select Services' ? serviceErrorEl.textContent="Please select service type" : ( serviceErrorEl.textContent="" , validService=true );
const messageValidation=()=> userMessageEl.value=="" ? messageErrorEl.textContent="Please enter message" : (messageErrorEl.textContent="",validMessage=true);

formEl.addEventListener('submit',function(event){
    event.preventDefault();
    nameValidation();
    emailValidation();
    mobileValidation();
    serviceValidation();
    messageValidation();
    if(validName && validEmail && validMobile && validService && validMessage){
        successMsgEl.textContent="Thank you for contacting us, we will get back to you shortly."
        userNameEl.value="";
        userEmailEl.value="";
        userPhoneEl.value="";
        dropdownSelectionEl.value='Select Services';
        userSubjectEl.value="";
        userMessageEl.value="";

    }
    else{
        successMsgEl.textContent="";
    }
})